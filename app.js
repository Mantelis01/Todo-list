//setting DOM elements to js variables
const addBtn = document.querySelector(".add");
const list = document.querySelector(".list");
const delBtn = document.getElementById("delete");
const inputBox = document.getElementById("inputBox");
const dateBox = document.getElementById("date");

let items = JSON.parse(sessionStorage.getItem("items")) || [];

//render function renders all needed list entries
function render() {
    const input = inputBox.value;
    //checks if input field is clear, if true gives user an error
    if (input === '') {
        alert('Trying to enter empty entry');
    }
    //if list item added correctly -> clears the input boxs' text
    else {
        const li = document.createElement("li");
        const checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        li.innerHTML = input;
        const timeLeft = document.createElement("span");
        timeLeft.innerHTML = calcTimeLeft(dateBox.value);
        li.appendChild(timeLeft)
        li.appendChild(checkBox);
        list.appendChild(li);
        const time = timeLeft.innerHTML;
        const item = { input, time};
        items.push(item);
        // Update sessionStorage
        sessionStorage.setItem("items", JSON.stringify(items));
        inputBox.value = '';
        dateBox.value = '';
        console.log(items);
    }
}

//function that deletes selected entries when "delete completed" button is clicked
function deleteSelected() {
    const checkedListItems = document.querySelectorAll(".list input[type='checkbox']:checked");
    for (const checkedItem of checkedListItems) {
        checkedItem.parentElement.remove();
    }
    // Update sessionStorage after deleting items
    items = [...list.children].map(child => {
        return {input: child.innerText.split('\n')[0], time: child.querySelector('span').textContent};
    });
    sessionStorage.setItem("items", JSON.stringify(items));
};

//calculates time remaining to complete todo entry
function calcTimeLeft(dateBox) {
    const currTime = new Date();
    const timeLeft = new Date(dateBox) - currTime;
    //console.log(timeLeft) <-- debug
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    return minutes ?  `${days}d ${hours}h ${minutes}m left` : '';
}

// Load items from sessionStorage on page load
window.onload = function() {
    items = JSON.parse(sessionStorage.getItem("items")) || [];
    items.forEach(item => {
        const li = document.createElement("li");
        const checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        li.innerHTML = item.input;
        const timeLeft = document.createElement("span");
        timeLeft.innerHTML = item.time;
        li.appendChild(timeLeft)
        li.appendChild(checkBox);
        list.appendChild(li);
    });
}