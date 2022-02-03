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


