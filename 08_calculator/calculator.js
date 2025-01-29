const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {

  return a-b;
};

const sum = function(input) {
  let total = 0;
	input.forEach((value)=>{
    total+=value

  })
  return Number(total);
};

const multiply = function(input) {
  let total = 1;
	input.forEach((value)=>{
    total*=value

  })
  return Number(total);
};

const power = function(a,b) {
	return a**b
};

const factorial = function(val) {
	let total = 1;

  if(val===1){
    return 1;
  }

  for(let i=val; i>=1; i--){
    
    total = i*total;
  }
  return total;
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

// console.log(multiply(1,2,4,5))
