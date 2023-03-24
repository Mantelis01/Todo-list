const addBtn = document.querySelector(".add");
const list  = document.querySelector(".list");
const delBtn = document.getElementById("delete");
const inputBox = document.getElementById("inputBox");


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
        //list.appendChild(li).innerHTML=input;
        list.appendChild(li);
        inputBox.value = '';
    }
}

function deleteSelected(){
    const checkedListItems = document.querySelectorAll(".list input[type='checkbox']:checked");
    for(const checkedItem of checkedListItems){
        checkedItem.parentElement.remove();
    }
};