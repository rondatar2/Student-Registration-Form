const btn = document.querySelector('#start-btn')
const name = document.querySelector('#name')
const male = document.querySelector('#male')
const female = document.querySelector('#female')
const email = document.querySelector('#email')
const course = document.querySelector('#course')
const number = document.querySelector('#number')
let vGender

btn.addEventListener('click', () => {
	let vName = name.value
	if (female.checked){
		vGender = 'Female'
	}
	else if(male.checked){
		vGender = 'Male'
	}
	else{
		vGender = 'Undefined'
	}
	let vEmail = email.value
	let vCourse = course.value
	let vNumber = number.value
	alert(`Your registration have been reserved with the following details. \n Name: ${vName} \n Sex: ${vGender} \n Email: ${vEmail} \n Course: ${vCourse} \n Mobile Number ${vNumber}`)
})