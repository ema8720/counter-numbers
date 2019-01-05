// immediate invoke function expression
(function () {
// create counter value
let counterValue = 0;
const buttons = document.querySelectorAll('.counterBtn');
const counter = document.getElementById('counter');


buttons.forEach(function(btn){
    btn.addEventListener('click', function(event){
        // This is going to return the element that I am clicking
const value = event.target;
// console.log(value);

// console.log(value);
if (value.classList.contains('prevBtn')){
    counterValue--;
}
else if (value.classList.contains('nextBtn')){
    counterValue++;
}
counter.textContent = counterValue;
// console.log(counterValue);

// change color
if ( counterValue === 0) {
    counter.style.color = "#333";
}
else if (counterValue < 0) {
    counter.style.color = "#F6511d";
}
else if (counterValue > 0) {
    counter.style.color = "#7FB800";
}
     });
    });
})();