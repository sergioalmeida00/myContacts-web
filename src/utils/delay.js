export function delay(milissegundos = 1000){
  return new Promise((resolve) => setTimeout(resolve,milissegundos));
}
