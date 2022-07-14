const ftoc = function(fah) {
  let res=(fah-32)*(5/9);
  return Math.round(res*10)/10;
};

const ctof = function(cel) {
  let res=cel*(9/5)+32;
  return Math.round(res*10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
