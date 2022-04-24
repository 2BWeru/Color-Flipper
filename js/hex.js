const hex = [0,1,2,3,4,5,6,7,8,9,
"A","B","C","D","E","f"]

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// Add event listener
btn.addEventListener("click", function(){
    // declare a variable that will hold the # sign for hex colors
  let hexColor = '#';
// set up a loop that runs six times...sinc hex colors have 6 values
// loop starts at 0 and runs till value is less than 6
for(let i = 0; i<6;i++){
    hexColor += hex[getRandomNumber()]
}
document.body.style.backgroundColor = hexColor;
color.textContent = hexColor;
})

function getRandomNumber(){
    return Math.floor(Math.random()*hex.length)
}