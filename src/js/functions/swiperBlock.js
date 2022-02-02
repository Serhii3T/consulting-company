// import swiper
import Swiper, {Navigation} from "swiper";
// import styles bundle
import 'swiper/css/bundle';
// configure Swiper to use modules

Swiper.use([
    Navigation,
]);

const swiperBlock = () => {
    const sliderBlock = document.querySelector(".mySwiper");
    if(sliderBlock != null) {
        let swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            spaceBetween: 30,
            init: false,
            grabCursor: true,
            breakpoints: {
                "@0.00": {
                    slidesPerView: "auto",
                    spaceBetween: 20,
                },
                "@0.55": {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                "@0.75": {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                "@0.85": {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                "@1.00": {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                "@1.50": {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },
        });
        swiper.init();
    }
}

export default swiperBlock;


