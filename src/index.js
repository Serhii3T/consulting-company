// import of a JavaScript module
// import { example } from '@/js/example'

// import of styles
import '@/styles/index.scss'

import Swiper, {Navigation} from "swiper";
// import styles bundle
import 'swiper/css/bundle';
// configure Swiper to use modules
Swiper.use([
    Navigation,
]);

const sliderBlock = document.querySelector(".mySwiper");
if(sliderBlock != null) {
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        // loop: true,
        init: false,
        grabCursor: true,
    });
    swiper.init();
}

