

let inputData = document.getElementById("kitchen-input");
let addBtn = document.getElementById('bttn');
let  kitchenItemsList = document.getElementById('kitchen-items-list');


let inputArray = [];





// add Function
function addFucntion(){
    let kitchenInputData = inputData.value;
    let li = document.createElement('li')
    li.innerText=kitchenInputData;
    // inputArray.push(kitchenInputData)
    // console.log(inputArray)
    kitchenItemsList.appendChild(li);
    li.style.cssText="animation-name:slideIn;"
    inputData.value=''
    inputData.focus();
    let trashBttn = document.createElement('i');
    trashBttn.classList.add('fa-solid','fa-trash')
    li.appendChild(trashBttn);
}
// delete Function
function deleteFunction(event){
    console.log(event.target.classList[0])
    if(event.target.classList[0]=== 'fa-solid'){
       let item= event.target.parentElement
       item.remove();
    }
}
kitchenItemsList.addEventListener('click',deleteFunction)
addBtn.addEventListener('click',addFucntion);

