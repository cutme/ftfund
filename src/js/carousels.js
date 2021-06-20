import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use([Navigation, Pagination]);


document.addEventListener('DOMContentLoaded',function() {
    
    window.reviews = function() {
	    
	    const swiper = new Swiper(document.getElementsByClassName('js-reviewsSlider')[0], {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            spaceBetween: 135
        });
    };


    

}, false)
