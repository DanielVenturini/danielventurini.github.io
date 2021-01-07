function borderColor (field, right) {
	field.style.borderColor = right ? 'green' : 'red'
}

function verify (IDS) {

	score = 0

	for (id of IDS) {
		field = document.getElementById(id)
		value = field.value

		borderColor(field, value === id)
		score += value === id 	// 2 + true = 3; 2 + false = 2
	}

	alert(`Your score is ${score}/${IDS.length}`)
}