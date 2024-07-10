let display = document.querySelector('input[name="display"]');
let buttons = document.querySelectorAll('input[type="button"]');

let calculation = '';
let result = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.value;

        if (value === 'DEL') {
            calculation = calculation.slice(0, -1);
        } else if (value === 'AC') {
            calculation = '';
        } else if (value === '=') {
            try {
                result = eval(calculation);
                calculation = result;
            } catch (error) {
                calculation = 'Error';
            }
        } else {
            calculation += value;
        }

        display.value = calculation;
    });
});