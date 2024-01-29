const inputElem = document.getElementById('inputdata');
const btnElem = document.getElementById('inputbtn');
const resultElem = document.getElementById('result');

btnElem.addEventListener('click',addData);

function addData (){
    if(inputElem.value == ''){
        alert('Please enter Your Task!');
    }
    else{
        const addNewData = document.createElement('ul');
        addNewData.innerHTML = `${inputElem.value}`;
        resultElem.appendChild(addNewData);
        inputElem.value = '';
    }
}


// function addData (){
//     if(inputElem.value ==""){
//     alert('Please enter to do!')
// }
// else{
// let newData = document.createElement('ul');
// newData.innerHTML = `${inputElem.value}`;
// resultElem.appendChild(newData);
// inputElem.value = '';

// }}
// inputElem.forEach((data)=>{
    //     return resultElem.target.value;
    
         
    

