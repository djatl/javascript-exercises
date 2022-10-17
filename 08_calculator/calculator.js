const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
	let total=0;

  for (let i=0; i<a.length; i++) {
    total += a[i];
  }
  return total;

};

const multiply = function(a) {
  let product = a[0];
  for (let i=1; i<a.length; i++) {
    product *= a[i];
  }
  return product;
};

const power = function(a,b) {
  return a**b;
};

const factorial = function(a) {
	if(a===0 || a===1) {
    return 1;
  }
  let value = 1;
  for (let i=1; i<= a; i++) {
    value *= i;
  }

  return value;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
