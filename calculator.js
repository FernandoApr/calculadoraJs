const sumar = (num1, num2) => num1 + num2;

const resta = (num1, num2) => num1 - num2;

const multiplicacion = (num1, num2) => num1 * num2;

const division = (num1, num2) => num1 / num2;

const calculate = () => {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operator = document.getElementById('operador').value;

  let result;

  switch(operator) {
    case 'suma':
      result = sumar(num1, num2);
      break;
    case 'resta':
      result = resta(num1, num2);
      break;
    case 'multiplicacion':
      result = multiplicacion(num1, num2);
      break;
    case 'division':
      result = division(num1, num2);
      break;
    default:
      result = 'Operación no válida';
  }

  document.getElementById('resultado').innerHTML = result;
};