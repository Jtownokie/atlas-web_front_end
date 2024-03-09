/* Add and Divide Functions - Complex Closures */

function divideBy(firstNumber) {
  return function(secondNumber) {
    return (secondNumber / firstNumber);
  };
};

function addBy(firstNumber) {
  return function(secondNumber) {
    return (firstNumber + secondNumber);
  };
};

const addBy100 = function(secondNumber) {return addBy(100);};
