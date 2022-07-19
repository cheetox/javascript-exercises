const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((sum,a)=>sum+=a,0);
};

const multiply = function(nums) {
  return nums.reduce((mul,num)=>mul *=num,1)
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
  let mul=1;
	while(a>1){
    mul*=a;
    a--;
  }
  return mul;
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
