// <a href="#" data-target=".c-contact" class="o-btn o-btn--major">Poproś o ofertę</a>

import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

document.addEventListener('DOMContentLoaded',function() {

    //const topbar = document.getElementsByClassName('js-topbar')[0];
    
    window.runScroll = function(el) {
        
        let offsetTop = document.querySelector(el).offsetTop;
        let topbar_height = 0;
        //let topbar_height = topbar.clientHeight;
        
        scroll({
            top: offsetTop-topbar_height,
            behavior: "smooth"
        })
    };

/*
    const gtt = document.querySelectorAll("[data-target]");
    
    if (gtt.length > 0) {
        const action = function(e) {
  
        	e.preventDefault() ? e.preventDefault() : e.preventDefault = false;            
            runScroll(e.currentTarget.dataset.target);
        };

        for (let i = 0; i < gtt.length; i++) {
            gtt[i].addEventListener('click', action);
        }
    }
*/
    
    
    // Go top
/*
    
    const gotop = document.getElementsByClassName('js-gotop')[0];
    
    gotop.addEventListener('click', function() {
        scroll({
            top: 0,
            behavior: "smooth"
        })
    })
*/
    
}, false);
