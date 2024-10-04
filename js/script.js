// var menuIcon = document.getElementsByClassName('menuicon');
// var ul = document.getElementsByClassName('ul');

// menuIcon[i].addEventListener('click',function(){

//     if (ul.classList.add('ativo')){
//         ul.classList.remove('ativo');
//         document.getElementsByClassName('menuicon img').src = '/img/cardapio.png';
//     }else{
//         ul.classList.add('ativo');
//         document.getElementsByClassName('menuicon img').src = '/img/x.png';
//     }
// })

var menuHamburger = document.querySelector("#menuicon");
var listMenu = document.querySelector("#listMenu");
var img = document.querySelector("#changeIcon");
var body = document.querySelector("body");

menuHamburger.addEventListener("click", menuClick);

function menuClick(){
    if(listMenu.classList.contains('ativo')){
        listMenu.classList.remove('ativo');
        img.src = "/img/cardapio.png";
        body.style.overflow = 'auto';
    }else{
        listMenu.classList.add('ativo');
        img.src = "/img/x.png";
        body.style.overflow = 'hidden';

    }
}
