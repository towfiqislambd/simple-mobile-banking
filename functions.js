// Button Functions
function showSectionForm(id) {
    document.getElementById('addMoney').classList.add('hidden')
    document.getElementById('cashOut').classList.add('hidden')
    document.getElementById('transaction').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

// Add Money + Cash Out Functions
function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = Number(inputValue)
    return inputNumber;
}
function getTextValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = Number(textValue)
    return textNumber;
}