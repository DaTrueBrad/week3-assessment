console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert("Form submitted successfully.")
	// console.log('form submit');
}

function compliment(event) {
	alert(`Wow, you are so beautiful. My white eyes and yellow skin are amazed at your beauty. I want you here forever.`)
}


let form = document.querySelector('form#contact');
let duck = document.getElementById(`duck`)

form.addEventListener('submit', handleSubmit);
duck.addEventListener(`mouseover`, compliment)