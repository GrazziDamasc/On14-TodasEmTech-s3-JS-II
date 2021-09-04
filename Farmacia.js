var product = Number(prompt('Insira a identificação do produto: '));
var precoProduct = Number(prompt('Insira o valor do produto'));
var product2 = Number(prompt('Insira a identificação do produto: '));
var precoProduct2 = Number(prompt('Insira o valor do produto'));

if (product === product2) {
  alert((precoProduct+precoProduct2) - 5.00);
  
}else{
  alert(product + product2);
}



