// Your code here
// moveDodgerLeft()

let dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    console.log("left")
    moveDodgerLeft()
  } else if (e.key === "ArrowRight"){
    console.log("right")
    moveDodgerRight()
  }
});


function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
 let rightNumbers = dodger.style.left.replace("px", "");
 
  let right = parseInt(rightNumbers, 10);

   if (right > 0) {
    dodger.style.left = `${right + 1}px`;
  }
}



// let dodger = document.querySelector('body div#game div#dodger')

// const moveDodgerLeft = () => {
//   let leftNumbers = dodger.style.left.replace('px', '')
//   let left = parseInt(leftNumbers, 10)
//   if (left > 0) {
//     dodger.style.left = `${left - 1}px`
//   }
// }

// const moveDodgerRight = () => {
//   let leftNumbers = dodger.style.left.replace('px', '')
//   let left = parseInt(leftNumbers, 10)
//   if (left < 360) {
//     dodger.style.left = `${left + 1}px`
//   }
// }

// document.addEventListener('keydown', function(e) {
//   if (e.key === 'ArrowLeft') {
//     moveDodgerLeft()
//   }
// })

// document.addEventListener('keydown', function(e) {
//   if (e.key === "ArrowRight") {
//     moveDodgerRight()
//   }
// })