/* 1. add event handler with the withdraw button
2. Get the withdraw amount
3. clear 
4. get previous withdraw total
5. calculate total withdraw */


// step 1:
document.getElementById('btn-withdraw').addEventListener('click',function(){

    // step 2
    const getWithdrawField = document.getElementById('withdraw-field')
    const valueofWithdrawFieldisString =getWithdrawField.value
    const valueofWithdrawField = parseFloat(valueofWithdrawFieldisString)

    // step 3 
    getWithdrawField.value= '';

    // step 4 
    const withdrawTotal = document.getElementById('withdraw-total')
    const valueofPreviousWithdrawIsString = withdrawTotal.innerText;
    const valueofPreviousWithdraw = parseFloat(valueofPreviousWithdrawIsString);

    // step 5
    const newWithdrawTotal= valueofWithdrawField + valueofPreviousWithdraw;
    withdrawTotal.innerText =newWithdrawTotal;
})