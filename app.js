//setting DOM elements to js variables
const addBtn = document.querySelector(".add");
const list  = document.querySelector(".list");
const delBtn = document.getElementById("delete");
const inputBox = document.getElementById("inputBox");
const dateBox = document.getElementById("date");

//render function renders all needed list entries
function render(){
    const input = inputBox.value;
    //checks if input field is clear, if true gives user an error
    if(input === ''){
        alert('Trying to enter empty entry');
    }
    //if list item added correctly -> clears the input boxs' text
    else{
        const li = document.createElement("li");
        const checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        li.innerHTML = input;
        li.appendChild(checkBox);
        //li.appendChild();
        //list.appendChild(li).innerHTML=input;
        calcTimeLeft();
        list.appendChild(li);
        inputBox.value = '';
    }
}

//function that deletes selected entries when "delete completed" button is clicked
function deleteSelected(){
    const checkedListItems = document.querySelectorAll(".list input[type='checkbox']:checked");
    for(const checkedItem of checkedListItems){
        checkedItem.parentElement.remove();
    }
};

//still doesnt work properly, but should count remaining time to complete todo entry
function calcTimeLeft(){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;

   // const timeLeft = dateBox.value - dateTime;
    //console.log(dateBox.value);
    //console.log(dateTime);

    const now = new Date().getTime();
    const futureDate = new Date('27 Jan 2030 16:40:00').getTime();
    const timeleft = futureDate - now;
    console.log(timeleft);
    return timeleft;    
}