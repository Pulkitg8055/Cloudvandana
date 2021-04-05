function handleSubmit() {
	let sentence = document.getElementById('sentence').value;
	let letter = document.getElementById('letter').value;

	let index = sentence.indexOf(letter);
	if (index < 0) alert('Theletter does not exist in the sentence');
	else alert(sentence.substring(index + 1));
}
