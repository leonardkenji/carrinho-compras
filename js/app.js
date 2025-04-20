let totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = '';   

//function to dd the selected item to the cart
function adicionar() {
//get the string information from html
let product = document.getElementById('produto').value;
//quantidade
let quantity = document.getElementById('quantidade').value;
//Name
let productName = product.split('-')[0];
//slip price from product name
let productPrice = parseInt(product.split('R$')[1]);
let subtotal = productPrice*quantity;

//print in the cart
let listaDeProdutos = document.getElementById('lista-produtos');
listaDeProdutos.innerHTML = listaDeProdutos.innerHTML + ` <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantity}x</span> ${productName} <span class="texto-azul">R$${productPrice}</span>
        </section>`;
//calcular o valor total
totalGeral = totalGeral + subtotal;

let totalfinal = document.getElementById('valor-total');
totalfinal.textContent = `R$ ${totalGeral}`;
document.getElementById('quantidade').value = '0';
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = '';   
}