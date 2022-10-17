const ftoc = function(tempF) {
  let tempC = (tempF - 32.0)/1.8;
  tempC = Math.round(tempC * 10) / 10;
  return tempC;
};

const ctof = function(tempC) {
  let tempF = (tempC * 1.8) + 32.0;
  tempF = Math.round(tempF * 10) / 10;
  return tempF;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
