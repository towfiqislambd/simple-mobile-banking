document.getElementById('casout-btn').addEventListener('click', function () {
    document.getElementById('cashOut').classList.remove('hidden');
    document.getElementById('addMoney').classList.add('hidden')
})

document.getElementById('addmoney-btn').addEventListener('click', function () {
    document.getElementById('addMoney').classList.remove('hidden');
    document.getElementById('cashOut').classList.add('hidden')
})


// Add Money

document.getElementById('addmoneyBtn').addEventListener('click', function (event) {
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const pin = document.getElementById('pin').value;
    const balance = document.getElementById('current-balance').innerText;
    if (pin === '1234') {
        const totalBalance = Number(balance) + Number(amount);
        document.getElementById('current-balance').innerText = totalBalance;
    }
    else {
        alert('Failed to add money. Please try again later😓')
    }
})

// Cash Out

document.getElementById('cashout-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const balance = document.getElementById('current-balance').innerText;
    const amount = document.getElementById('amountNumber').value;
    const pin = document.getElementById('pinNumber').value;
    if (pin === '1234') {
        const totalBalance = Number(balance) - Number(amount);
        document.getElementById('current-balance').innerText = totalBalance
    }
    else {
        alert('Failed to Cash Out. Please try again later😓')
    }
})