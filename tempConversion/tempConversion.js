const ftoc = function(fahrenheit) {
  celcius = (fahrenheit - 32) * (5/9)
  celcius = Math.round(celcius * 10) / 10
  return(celcius)
}

const ctof = function(celcius) {
  fahrenheit = celcius * (9/5) + 32
  fahrenheit = Math.round(fahrenheit * 10) / 10
  return(fahrenheit)
}

module.exports = {
  ftoc,
  ctof
}
