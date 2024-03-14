let box = document.querySelector('.fundo');
let busca = document.querySelector('.lupa');


box.addEventListener('mouseover', ()=>{
box.classList.add('abrir');
});

box.addEventListener('mouseout', ()=>{
  box.classList.remove('abrir');
  });









// ATIVAÇÃO DO MENU MOBILE
const fundomenu= document.querySelector('.fundo-menu');
const menuclique = document.querySelector('.clique-menu');
const menufechar = document.querySelector('.fechar-menu');

menuclique.addEventListener('click', ()=>{
  fundomenu.classList.add("ativar-menu")
})

menufechar.addEventListener('click', ()=>{
  fundomenu.classList.remove("ativar-menu")
})



// ATIVAÇÃO DO CARROSSEL
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function addcarro(){
  const titulocarro = document.querySelector(".titulo-produto-carrinho");
  const titulobloco = document.querySelector(".titulo-produto")
  
  document.getElementById('titulo-produto-carrinho').innerHTML = 'titulobloco'
}



//ATIVAÇÃO DA BARRA DE PESQUISA
const pesquisainput = document.getElementById('input-pesquisa');//Barra de Pesquisa
const produtoinput  = document.getElementById('lista').getElementsByTagName('li'); //Lista + Dados

pesquisainput.addEventListener('input',function(){
const pesquisaterminal = pesquisainput.value.toLowerCase();

for (let i = 0; i < produtoinput.length; i++){
    const produtonome = produtoinput[i].innerText.toLowerCase();

    if (produtonome.includes(pesquisaterminal)){
        produtoinput[i].style.display = 'block'; 
    } else{
        produtoinput[i].style.display = 'none';
    } 
    }

})

//ATIVAÇÃO DA BARRA DE PESQUISAMOB
const fundolupamob= document.querySelector('#listamob');
const lupacliquemob = document.querySelector('#input-lupa');
const menufecharmob = document.querySelector('#fechar-busca');

lupacliquemob.addEventListener('click', ()=>{
  fundolupamob.classList.add("ativo-listamob")
})

menufecharmob.addEventListener('click', ()=>{
  fundolupamob.classList.remove("ativo-listamob")
})


const pesquisainputmob = document.getElementById('input-lupa');//Barra de Pesquisa
const produtoinputmob  = document.getElementById('listamob').getElementsByTagName('li'); //Lista + Dados

pesquisainputmob.addEventListener('input',function(){
const pesquisaterminalmob = pesquisainputmob.value.toLowerCase();

for (let i = 0; i < produtoinputmob.length; i++){
    const produtonomemob = produtoinputmob[i].innerText.toLowerCase();

    if (produtonomemob.includes(pesquisaterminalmob)){
        produtoinputmob[i].style.display = 'block'; 
    } else{
        produtoinputmob[i].style.display = 'none';
    } 
    }

})







