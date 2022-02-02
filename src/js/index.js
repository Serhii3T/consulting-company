import $ from "jquery";
// import of styles
import '../styles/index.scss'


//import js
import btnLoadMore from './functions/btnLoadMore';
import mapFunction from './functions/mapFunction';
import swiperBlock from './functions/swiperBlock';
import burgerBlock from './functions/burgerBlock';



const formBlock = document.querySelector(".form-contact");
if (formBlock != null) {
    formBlock.addEventListener('submit', function (e) {
        e.preventDefault();
        formBlock.classList.add('hidden');
        let thankBlock = document.querySelector('.thank-mess');
        thankBlock.classList.add('active');
    });
}



let navItemWork = document.querySelectorAll(".c-work__item");
if (navItemWork != null) {
    navItemWork.forEach(function (element) {

        element.addEventListener('click', function () {
            document.querySelector(".c-work__item.active").classList.remove('active');
            this.classList.add('active');
            let classBlock = this.getAttribute('data-cat');
            let blocks = document.querySelectorAll(".c-chapter__block");
            blocks.forEach(function (item) {
                item.classList.remove('active');
            });
            let blocksActive = document.querySelectorAll("." + classBlock);
            blocksActive.forEach(function (item) {
                item.classList.add('active');
            });
        });
    });
}



document.addEventListener("DOMContentLoaded", function(event) {
    btnLoadMore();
    mapFunction();
    swiperBlock();
    burgerBlock();
});

