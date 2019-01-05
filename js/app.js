// immediate invoke function expression
(function () {
// create counter value
let counterValue = 0;
// get button with 
const buttons = document.querySelectorAll('.counterBtn');
const counter = document.getElementById('counter');


buttons.forEach(function(btn) {
btn.addEventListener('click', function(event){
// e.preventDefault();
// set up an element that we click
const value = event.target;
// console.log(value);

if (value.classList.contains('prevBtn')) {
    counterValue--;
    
}
else if (value.classList.contains('nextBtn')){
    counterValue++;
}
counter.textContet = counterValue;
console.log(counterValue);

// change color
if (counterValue === 0){
    counter.style.color = '#333';
}
else if (counter < 0){
    counter.style.color = '#F6511d';
}
else if (counter > 0){
    counter.style.color = '#7fb800';
}
     });
    });
})();