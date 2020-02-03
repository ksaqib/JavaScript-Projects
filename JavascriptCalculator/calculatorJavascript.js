const Calculator = {
    DisplayValue: '0', 
    FirstOperand: null,
    WaitSecondOperand:false,
    operator: null,    
};
function InputDigits(){
    const {DisplayValue, WaitSecondOperand} = Calculator;
    if (WaitSecondOperand === true){
        Calculator.DisplayValue = digit;
        Calculator.WaitSecondOperand = false;
    }else {
        Calculator.WaitSecondOperand = DisplayValue === '0' ? digit : DisplayValue + digit; 
    }
}
function InputDecimal(dot){
    if(Calculator.WaitSecondOperand === true) return;
    if(!Calculator.DisplayValue.includes(dot)){
        Calculator.DisplayValue+=dot;
    }
}
function handleOperator(NextOperator){
    const {FirstOperand, DisplayValue, operator} = Calculator;
    const ValueOfInput = parseFloat(DisplayValue);
    if (opeartor && Calculator.WaitSecondOperand){
        Calculator.operator = NextOperator;
        return;
    }
    if (FirstOperand == null){
        Calculator.FirstOperand = ValueOfInput;
    } else if (opeartor) {
        const valueNow = FirstOperand || 0;
        const result = PerformCalculator[opeartor](valueNow, ValueOfInput);
        Calculator.DisplayValue = string(result);
        Calculator.FirstOperand = result;
    }
    Calculator.WaitSecondOperand = true;
    Calculator.opeartor = NextOperator;
}
const PerformCalculator = {
    '/': (FirstOperand, SecondOperand) => FirstOperand/SecondOperand,
    '*': (FirstOperand, SecondOperand) => FirstOperand*SecondOperand,
    '-': (FirstOperand, SecondOperand) => FirstOperand - SecondOperand,
    '+': (FirstOperand, SecondOperand) => FirstOperand + SecondOperand,
    '=': (FirstOperand, SecondOperand) => SecondOperand
};
function CalculatorReset(){
    Calculator.DisplayValue = '0';
    Calculator.FirstOperand = null;
    Calculator.WaitSecondOperand = false;
    Calculator.operator = null;
}
function updateDisplay(){
    const display = document.querySelector('.calculatorScreen');
    display.Value = Calculator.DisplayValue;
}
updateDisplay();
const keys = document.querySelector('.calculatorKeys');
keys.addEventListener('click', (event) => {
    const {target} = event;
    if(!target.matches('button')){
        return;
    }
    if (target.classList.contains('operator')){
     handleOperator(target.value);
     updateDisplay();
     return;
    }
    if (target.classList.contains('decimal')){
        InputDecimal(target.value);
        updateDisplay();
        return;
    }
    if (target.classList.contains('all-clear')){
        CalculatorReset();
        updateDisplay();
        return;
    }
    InputDigits(target.value);
    updateDisplay();
})

