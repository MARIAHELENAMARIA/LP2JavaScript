const cpf = require('node-cpf');

console.log(cpf.validate("000.000.000.000.00"));
console.log(cpf.validate("123.456.789-10"));
console.log(cpf.validate("12345678910"));

console.log("Olá Mundo!");