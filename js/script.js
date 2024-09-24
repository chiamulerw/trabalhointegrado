var menuicon = document.querySelector('.menuicon')
var ul = document.querySelector('.ul')

menuicon.addEventListener('click',()=>{
    if (ul.classList.add('ativo')){
        ul.classList.remove('ativo');
    }else{
        ul.classList.add('ativo');
    }
})