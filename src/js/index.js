// import of styles
import '../styles/index.scss'

//import js
import btnLoadMore from './functions/btnLoadMore';
import swiperBlock from './functions/swiperBlock';
import burgerBlock from './functions/burgerBlock';
import formBlock from './functions/formBlock';
import tabClick from './functions/tabClick';

document.addEventListener("DOMContentLoaded", function(event) {
    btnLoadMore();
    swiperBlock();
    burgerBlock();
    formBlock();
    tabClick();
});

