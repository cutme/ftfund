document.addEventListener('DOMContentLoaded',function() {

    const cover = document.getElementById('cover');
    
    const init = function() {
        document.documentElement.removeAttribute('style');
        document.documentElement.classList.add('is-loaded');
        
        setTimeout(function() {
            
            window.animsInit();
            document.getElementsByClassName('js-reviewsSlider')[0] ? window.reviews() : false;            
            
            cover.remove();
            
            window.location.hash ? window.runScroll( '#'+document.getElementById(window.location.hash.substring(1)).id ) : false;
        }, 250); 
    };
    
    window.addEventListener('load', init);

}, false);