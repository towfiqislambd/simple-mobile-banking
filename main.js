// Buttons
document.getElementById('add-money').addEventListener('click', function() {
    showSectionForm('addMoney');
})
document.getElementById('cash-out').addEventListener('click', function() {
    showSectionForm('cashOut');
})
document.getElementById('transaction-btn').addEventListener('click', function() {
    showSectionForm('transaction');
})


// Add Money
document.getElementById('addMoney-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const amount = getInputFieldValueById('addMoney-amount');
    const pin = getInputFieldValueById('addMoney-pin-number');
    const currentAmount = getTextValueById('currentBalance');
    if (pin === 1234) {
        const newAmount = amount + currentAmount;
        document.getElementById('currentBalance').innerText = newAmount;
        document.getElementById('addMoney-amount').value = ''
        document.getElementById('addMoney-pin-number').value = ''

        // Transaction
        const p = document.createElement('p');
        p.innerText = `
            Added : ${amount} TK. New Balance : ${newAmount};
        `
        p.style.fontWeight = '600';
        document.getElementById('transaction-history').appendChild(p)
    }
    else{
        alert('Failed to add money. Please try again later')
    }
})


// Cash Out
document.getElementById('cashOut-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const cashOutAmount = getInputFieldValueById('cashOut-amount');
    const pinNumber = getInputFieldValueById('cashOut-pin-number');
    const currentAmount = getTextValueById('currentBalance');
    if (pinNumber === 1234) {
        const newAmount = currentAmount - cashOutAmount;
        document.getElementById('currentBalance').innerText = newAmount;
        document.getElementById('addMoney-amount').value = ''
        document.getElementById('addMoney-pin-number').value = ''

        // Transaction
        const p = document.createElement('p');
        p.innerText = `
            Withdraw : ${cashOutAmount} TK. New Balance : ${newAmount};
        `
        p.style.fontWeight = '600';
        document.getElementById('transaction-history').appendChild(p)
    }
    else{
        alert('Failed to cash out. Please try again later')
    }
})