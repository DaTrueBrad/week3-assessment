let randomBtn = document.getElementById(`random`)
let foodArr = [`Sushi Up`, `Mo' Bettahs`, `Milagros`]

function randomSelect(event) {
    const random = Math.floor(Math.random() * foodArr.length);
    alert(`Go to ${random, foodArr[random]}! Link below!`);
}

randomBtn.addEventListener(`click`, randomSelect)