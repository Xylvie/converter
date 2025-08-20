let fullName = '';


function getValue() {
    let nameValue = document.getElementById('first-name');
    let lastValue = document.getElementById('last-name');
    fullName = `${nameValue.value} ${lastValue.value}`;

    document.getElementById('greeting').textContent = `Hello ${fullName}!`;
}

function add() {
    const firstNumber = document.getElementById('first-number');
    const lastNumber = document.getElementById('last-number');
    const unaNumero = Number(firstNumber.value);
    const duhaNumero = Number(lastNumber.value);

    document.getElementById('result').textContent = unaNumero + duhaNumero;
}

function multiply() {
    const firstNumber = document.getElementById('first-number');
    const lastNumber = document.getElementById('last-number');
    const unaNumero = Number(firstNumber.value);
    const duhaNumero = Number(lastNumber.value);

    document.getElementById('result').textContent = unaNumero * duhaNumero;
}

function subtract() {
    const firstNumber = document.getElementById('first-number');
    const lastNumber = document.getElementById('last-number');
    const unaNumero = Number(firstNumber.value);
    const duhaNumero = Number(lastNumber.value);

    document.getElementById('result').textContent = unaNumero - duhaNumero;
}

function divide() {
    const firstNumber = document.getElementById('first-number');
    const lastNumber = document.getElementById('last-number');
    const unaNumero = Number(firstNumber.value);
    const duhaNumero = Number(lastNumber.value);

    document.getElementById('result').textContent = unaNumero / duhaNumero;
}

function celcius() {
    const tempe = document.getElementById('tempt');

    document.getElementById('tempt-result').textContent = Math.floor((Number(tempe.value) - 32) * 5/9);
}

function kelvin() {
    const tempe = document.getElementById('tempt');

    document.getElementById('tempt-result').textContent = Math.floor((Number(tempe.value) - 32) * 5/9 + 273.15);
}
