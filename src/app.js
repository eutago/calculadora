// Declarações de elementos
const numberButtons = document.querySelectorAll('[data-numbers]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const allCleanButton = document.querySelector('[data-allClean]');
const equalsButton = document.querySelector('[data-equals]');
const backspaceButton = document.querySelector('[data-backspace]');
let previousOperand = document.querySelector('[data-previous]');
let currentOperand = document.querySelector('[data-current]');

// Botão para limpar
allCleanButton.addEventListener('click', () => {
 previousOperand.innerHTML = '';
 currentOperand.innerHTML = '';
});

// Botões numéricos
for (const numberButton of numberButtons) {
 numberButton.addEventListener('click', (digit) => {
  const digits = digit.target.innerHTML;
  if (currentOperand.innerHTML.includes('.') && digits === '.') return;

  currentOperand.innerHTML += digits;
 });
}

// Botões dos operadores
for (const operatorButton of operatorButtons) {
 operatorButton.addEventListener('click', () => {
  previousOperand.innerHTML = `${currentOperand.innerHTML}${operatorButton.innerHTML}`;
  currentOperand.innerHTML = '';
 });
}

// Função de soma
const sum = () => {
 let result;

 const previousOperandFloat = parseFloat(previousOperand.innerHTML);
 const currentOperandFloat = parseFloat(currentOperand.innerHTML);

 if (isNaN(previousOperandFloat) || isNaN(currentOperandFloat)) return;

 result = previousOperandFloat + currentOperandFloat;
 currentOperand.innerHTML = result;
};

// Função de subtração
const subtraction = () => {
 let result;

 const previousOperandFloat = parseFloat(previousOperand.innerHTML);
 const currentOperandFloat = parseFloat(currentOperand.innerHTML);

 if (isNaN(previousOperandFloat) || isNaN(currentOperandFloat)) return;

 result = previousOperandFloat - currentOperandFloat;
 currentOperand.innerHTML = result;
};

// Função de multiplicação
const multiplication = () => {
 let result;

 const previousOperandFloat = parseFloat(previousOperand.innerHTML);
 const currentOperandFloat = parseFloat(currentOperand.innerHTML);

 if (isNaN(previousOperandFloat) || isNaN(currentOperandFloat)) return;

 result = previousOperandFloat * currentOperandFloat;
 currentOperand.innerHTML = result;
};

// Função de divisão
const division = () => {
 let result;

 const previousOperandFloat = parseFloat(previousOperand.innerHTML);
 const currentOperandFloat = parseFloat(currentOperand.innerHTML);

 if (isNaN(previousOperandFloat) || isNaN(currentOperandFloat)) return;

 result = previousOperandFloat / currentOperandFloat;
 currentOperand.innerHTML = result;
};

// Botão de igual
equalsButton.addEventListener('click', () => {
 if (previousOperand.innerHTML.includes('+')) {
  sum();
  previousOperand.innerHTML = '';
  setTimeout(() => {
   currentOperand.innerHTML = '';
  }, 3000);
 } else if (previousOperand.innerHTML.includes('-')) {
  subtraction();
  previousOperand.innerHTML = '';
  setTimeout(() => {
   currentOperand.innerHTML = '';
  }, 3000);
 } else if (previousOperand.innerHTML.includes('x')) {
  multiplication();
  previousOperand.innerHTML = '';
  setTimeout(() => {
   currentOperand.innerHTML = '';
  }, 3000);
 } else if (previousOperand.innerHTML.includes('÷')) {
  division();
  previousOperand.innerHTML = '';
  setTimeout(() => {
   currentOperand.innerHTML = '';
  }, 3000);
 }
});

// botão de apagar
backspaceButton.addEventListener('click', () => {
 currentOperand.innerHTML = currentOperand.innerHTML.slice(0, -1);
});
