// 'use strict'; 
{
//トップに戻るボタンーーーーーーーーーーーーーーーーーーー
const toTopButton = document.getElementById('top-button');

window.addEventListener('scroll',()=>{
    const scrolled = window.scrollY;
    if (scrolled > 700) {
        toTopButton.classList.add('show-button');
    }else {
        toTopButton.classList.remove('show-button');
    }
});
//レスポンシブのトグルメニューーーーーーーーーーーーーーーーーーー

const menuButton = document.getElementById('menu-button');
const navi = document.getElementById('navi');
const mask = document.getElementById('mask');

menuButton.addEventListener('click',()=>{
    navi.classList.toggle('show-button');
    menuButton.classList.toggle('active');
    mask.classList.toggle('open');
});




}

