// let allBtn = document.querySelectorAll(`button`)

// function buttonAlert(event) {
//     for(let i = 0; i < allBtn.length; i++) {
//         if(allBtn[i].id === `color`) {
//             console.log(`color`)
//         } else if(allBtn[i].id === `place`) {
//             console.log(`place`)
//         }
//     }
//     console.log(allBtn)
// }

// function buttonListener() {
//     for(let i = 0; i < allBtn.length; i++) {
//         allBtn[i].addEventListener(`click`, buttonAlert)
//     }

// }

// buttonListener()

let colorButton = document.getElementById(`color`)
let placeButton = document.getElementById(`place`)
let ritualButton = document.getElementById(`ritual`)

function colorFunction(event) {
    alert(`My favorite color is Red.`)
}
function placeFunction(event) {
    alert(`My favorite place is the gym.`)
}
function ritualFunction(event) {
    alert(`My favorite ritual is waking up early.`)
}



colorButton.addEventListener(`click`, colorFunction)
placeButton.addEventListener(`click`, placeFunction)
ritualButton.addEventListener(`click`, ritualFunction)