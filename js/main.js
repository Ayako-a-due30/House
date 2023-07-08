// 'use strict'; 
{
//トップに戻るボタン
const toTopButton = document.getElementById('top-button');

window.addEventListener('scroll',()=>{
    const scrolled = window.scrollY;
    console.log(scrolled);
    if (scrolled > 700) {
        toTopButton.classList.add('show-button');
    }else {
        toTopButton.classList.remove('show-button');
    }
});
}

