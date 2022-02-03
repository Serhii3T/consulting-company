// import swiper
import Swiper from "swiper";
// import styles bundle
import 'swiper/css/bundle';

const swiperBlock = () => {
    const sliderBlock = document.querySelector(".our-mission-swiper");
    if(sliderBlock != null) {
        let swiper = new Swiper(".our-mission-swiper", {
            slidesPerView: 3,
            spaceBetween: 30,
            init: false,
            grabCursor: true,
            breakpoints: {
                "@0.00": {
                    slidesPerView: "auto",
                },
                "@0.55": {
                    slidesPerView: 1,
                },
                "@0.75": {
                    slidesPerView: 2,
                },
                "@0.85": {
                    slidesPerView: 2,
                },
                "@1.00": {
                    slidesPerView: 3,
                },
                "@1.50": {
                    slidesPerView: 3,
                },
            },
        });
        swiper.init();
    }
}

export default swiperBlock;


