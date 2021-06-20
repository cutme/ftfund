document.addEventListener('DOMContentLoaded',function() {

    const cover = document.getElementById('cover');
    
    const init = function() {
        document.documentElement.removeAttribute('style');
        document.documentElement.classList.add('is-loaded');
        
        setTimeout(function() {
            
            window.animsInit();
            document.getElementsByClassName('js-reviewsSlider')[0] ? window.reviews() : false;
            
            cover.remove();
        }, 250);  
    };
    
    window.addEventListener('load', init);

}, false);