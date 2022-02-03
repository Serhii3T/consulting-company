import $ from "jquery";
// import of styles
import '../styles/index.scss'

//import js
import btnLoadMore from './functions/btnLoadMore';
// import mapFunction from './functions/mapFunction';
import swiperBlock from './functions/swiperBlock';
import burgerBlock from './functions/burgerBlock';
import formBlock from './functions/formBlock';
import tabClick from './functions/tabClick';

document.addEventListener("DOMContentLoaded", function(event) {
    btnLoadMore();
    // mapFunction();
    swiperBlock();
    burgerBlock();
    formBlock();
    tabClick();
});

