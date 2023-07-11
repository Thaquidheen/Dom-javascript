

let inputData = document.getElementById("kitchen-input");
let addBtn = document.getElementById('bttn');
let  kitchenItemsList = document.getElementById('kitchen-items-list');





addBtn.addEventListener('click',addFucntion);


function addFucntion(){
    let kitchenInputData = inputData.value;
    let li = document.createElement('li');
    li.style.cssText="animation-name:slideIn;"
    li.innerText=kitchenInputData;
    kitchenItemsList.appendChild(li);
}




