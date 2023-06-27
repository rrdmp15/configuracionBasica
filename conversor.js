let cambioEuro = 0.91;
let cambioLibra = 0.78;

export function convertirDolaresAEuros(cantidad) {
  return cantidad * cambioEuro;
}

export function convertirDolaresALibras(cantidad) {
  return cantidad * cambioLibra;
}
