const price = document.querySelector('.price');
const btn = document.querySelector('.btn');
const paid = document.querySelector('.paid');
const result = document.querySelector('#result');
const dividedBill = document.querySelector('#dividedBill');
let numbers = [];

btn.addEventListener('click', function(e) {
   e.preventDefault();
   numbers[numbers.length]= price.value;
   const item = document.createElement('li');
   item.innerText = price.value;
   item.classList.add('paid');
   paid.appendChild(item);
   price.value = '';
})

const btnCount = document.querySelector('.btnOne');    
btnCount.addEventListener('click',  calculateAmount); 

function calculateAmount(e)  {
    e.preventDefault();
    let sum = 0;
    for (let index = 0; index < numbers.length; index++) {
        sum +=  +numbers[index];
    }
    result.textContent = sum;

    gsap.to(".btnOne", {rotation: 360, x: 100, duration: 1})   
}

const buttonTotal = document.querySelector('#buttonTotal');
buttonTotal.addEventListener('click', calculateTotal);

function calculateTotal(e) {
    e.preventDefault();
    const people = document.querySelector('#people').value;
    const total = parseFloat(result.textContent);
    
    if (isNaN(total) || people === '' || people < 1 ) {
        Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Please enter your information!"
          });   
    }
    gsap.to("#buttonTotal", {rotation: 360, x: 90, y: 15, duration: 1})

     let amountPerPerson = total/people;
     amountPerPerson = amountPerPerson.toFixed(2);
    dividedBill.textContent = amountPerPerson;
}





