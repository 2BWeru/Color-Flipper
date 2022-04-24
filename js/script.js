const colors =["green","red","teal",
"f15025"]

// 
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// let set up the event listener
// that listens for 'click' event


btn.addEventListener("click", function(){
//  get random number between 0-3 *** colors[0,1,2,3] arrays index numbers
const randomNumber = getRandomNumber();
console.log(randomNumber);

document.body.style.backgroundColor = colors[randomNumber];
color.textContent = colors[randomNumber];
})
// create a function that generates a random number for array index
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}
// math.floor == means round off
// math,random == get random number