var menuIcon = document.getElementsByClassName('menuicon');
var ul = document.getElementsByClassName('ul');

menuIcon[i].addEventListener('click',function(){

    if (ul.classList.add('ativo')){
        ul.classList.remove('ativo');
        document.getElementsByClassName('menuicon img').src = '/img/cardapio.png';
    }else{
        ul.classList.add('ativo');
        document.getElementsByClassName('menuicon img').src = '/img/x.png';
    }
})