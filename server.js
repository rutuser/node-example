const utils = require('./tirarDado.js');
const utils2 = require('./palabra.js');
const utils3 = require('./numPalabra.js');



console.log(utils.tirarDados(process.argv[3]));
console.log("Caras: " + utils2.fraseLength(process.argv[4]) + " Dado: " + (Math.floor(Math.random()*6)+1));

