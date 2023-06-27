import readline from 'readline';
import { convertirDolaresAEuros, convertirDolaresALibras } from './conversor.js';

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese la cantidad en dólares: ', (cantidad) => {
  cantidad = parseFloat(cantidad);

  let euros = convertirDolaresAEuros(cantidad);
  let libras = convertirDolaresALibras(cantidad);

  console.log(`${cantidad} dólares equivale a ${euros.toFixed(2)} euros.`);
  console.log(`${cantidad} dólares equivale a ${libras.toFixed(2)} libras.`);

  rl.close();
});
