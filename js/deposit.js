/*  1. add event handler/ listener to the deposit button
2. Get deposit from Deposit input field
2-5. convert string to number
3. clear the deposit input field after gettting the value
4.Get the previous deposit total
5.New Deposit value by adding inputFieldValue, and PreviousValue
6. current balance total
7. calculate the new balance and set it to the balance total

 */
// step- 1 
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step-2
    const depositField = document.getElementById('deposit-field');
    const valueofDepositFieldisString = depositField.value;
    const valueofDepositField= parseFloat(valueofDepositFieldisString);
 
    
    // step-3
depositField.value = '';

    // step-4
const depositTotal = document.getElementById('deposit-total');
const valueofPreviousDepositIsString = depositTotal.innerText;
const valueofPreviousDeposit = parseFloat(valueofPreviousDepositIsString)

// step 5: 
const newDepositTotal = valueofDepositField + valueofPreviousDeposit;
depositTotal.innerText = newDepositTotal;
// step-6 
const previousBalance = document.getElementById('balance-total');
const valueofPreviousBalanceIsString = previousBalance.innerText;
const valueofPreviousBalance= parseFloat(valueofPreviousBalanceIsString);
console.log(valueofPreviousBalance)
// step - 7

const newBalanceTotal = valueofPreviousBalance + newDepositTotal
 previousBalance.innerText = newBalanceTotal;

})
