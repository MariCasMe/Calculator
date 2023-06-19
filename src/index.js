
const numerOne=document.getElementById('numberOne');
const numberTwo=document.getElementById('numberTwo');
const result=document.getElementById('result');

const plus=document.getElementById('plus');
const minus=document.getElementById('minus');
const multiplication=document.getElementById('multiplication');
const divition=document.getElementById('divition');

plus.addEventListener('click',()=>{
    let adition=parseFloat(numerOne.value) + parseFloat(numberTwo.value);
    result.textContent=adition;
})
minus.addEventListener('click',()=>{
    let subtraction=parseFloat(numerOne.value) - parseFloat(numberTwo.value);
    result.textContent=subtraction;
})
multiplication.addEventListener('click',()=>{
    let mult=parseFloat(numerOne.value) * parseFloat(numberTwo.value);
    result.textContent=mult;
})
divition.addEventListener('click',()=>{
    let div=parseFloat(numerOne.value) / parseFloat(numberTwo.value);
    result.textContent=div;
})
