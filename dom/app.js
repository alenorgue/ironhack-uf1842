// ¿En tu páis de origen es normal dejar propina?
const btnCalTotal = document.getElementById('calculate');
const billInput = document.getElementById('bill-amount');
const tipPercentageInput = document.getElementById('percentage-tip');
const outputTotal = document.getElementById('total');
const tipAmount = document.getElementById('tip-amount')

function calculateTotal(){
    const billValue = Number(billInput.value);
    const tipValue = Number(tipPercentageInput.value);
    const tipAmountValue = billValue * (tipValue / 100);
    const totalValue = Number(billValue) + Number(tipAmountValue);
    tipAmount.value = tipAmountValue.toFixed(2);
    outputTotal.value = totalValue.toFixed(2);
    console.log(totalValue)
}

btnCalTotal.addEventListener('click', calculateTotal)