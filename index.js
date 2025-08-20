

/* Calculator */

/* Add button function */
function add() {

    /* Getting the input Value on the 2 input fields */
    const firstNumber = document.getElementById('first-number');
    const lastNumber = document.getElementById('last-number');
    const unaNumero = Number(firstNumber.value);
    const duhaNumero = Number(lastNumber.value);

    /* Calculating and showing the result on the H1 with result id */
    document.getElementById('result').textContent = unaNumero + duhaNumero;
}

/* Multiply Button Function */
function multiply() {

     /* Getting the input Value on the 2 input fields */
    const firstNumber = document.getElementById('first-number');
    const lastNumber = document.getElementById('last-number');
    const unaNumero = Number(firstNumber.value);
    const duhaNumero = Number(lastNumber.value);

    /* Calculating and showing the result on the H1 with result id */
    document.getElementById('result').textContent = unaNumero * duhaNumero;
}

/* Subtract button function */
function subtract() {

     /* Getting the input Value on the 2 input fields */
    const firstNumber = document.getElementById('first-number');
    const lastNumber = document.getElementById('last-number');
    const unaNumero = Number(firstNumber.value);
    const duhaNumero = Number(lastNumber.value);

    /* Calculating and showing the result on the H1 with result id */
    document.getElementById('result').textContent = unaNumero - duhaNumero;
}

/* Divide button function */
function divide() {

     /* Getting the input Value on the 2 input fields */
    const firstNumber = document.getElementById('first-number');
    const lastNumber = document.getElementById('last-number');
    const unaNumero = Number(firstNumber.value);
    const duhaNumero = Number(lastNumber.value);

    /* Calculating and showing the result on the H1 with result id */
    document.getElementById('result').textContent = unaNumero / duhaNumero;
}

/* Converter */

/* Convert to Celsious Button */
function celcius() {

     /* Getting the input Value of the input field */
    const tempe = document.getElementById('tempt');

    /* Calculating and showing the result on the H1 with result id */
    document.getElementById('tempt-result').textContent = Math.floor((Number(tempe.value) - 32) * 5/9);
}

/* Convert to Kelvin Button */
function kelvin() {

    /* Getting the input Value of the input field */
    const tempe = document.getElementById('tempt');

    /* Calculating and showing the result on the H1 with result id */
    document.getElementById('tempt-result').textContent = Math.floor((Number(tempe.value) - 32) * 5/9 + 273.15);
}

