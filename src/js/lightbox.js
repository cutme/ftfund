const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

document.addEventListener('DOMContentLoaded',function() {

    const trigger = document.getElementsByClassName('js-openLightbox');

    const init = function() {
        
        const hideLightbox = function(e) {
            document.removeEventListener('click', clickOutside);
            
            const target = document.getElementsByClassName('js-lightbox');
            
            for (let i = 0; i < target.length; i++) {
                target[i].classList.remove('fade-in');
                
                setTimeout(function() {
                    target[i].classList.remove('is-visible');
                }, 200);

                const closeBtn = target[i].getElementsByClassName('js-close');
                
                for (let i = 0; i < closeBtn.length; i++) {
                    closeBtn[i].removeEventListener('click', hideLightbox);
                }                
            }
        };

        
        const action = function(e) {
            
            e.preventDefault() ? e.preventDefault() : e.preventDefault = false;

            const target = document.querySelector(e.currentTarget.getElementsByTagName('a')[0].getAttribute('href')),
                  closeLightbox = target.getElementsByClassName('js-close');

            // Show
            target.classList.add('is-visible');
            setTimeout(function() {
                target.classList.add('fade-in');
            }, 10);


            // Close 
            for (let i = 0; i < closeLightbox.length; i++) {
                closeLightbox[i].addEventListener('click', hideLightbox);
            }
        };
        
        const clickOutside = function(e) {
            if (!e.target.closest('.js-nav')) {
                hideMenu();
        	}
        };
        
        // Hide lightbox on ESC

        document.addEventListener('keydown', function(evt) {
            // evt = evt || window.event;
            var isEscape = false;
            if ("key" in evt) {
                isEscape = (evt.key == "Escape" || evt.key == "Esc");
            } else {
                isEscape = (evt.keyCode == 27);
            }
            if (isEscape) {
                hideLightbox();
            }
        });

        for (let i = 0; i < trigger.length; i++) {
            trigger[i].addEventListener('click', action);
        }
    };

    trigger.length > 0 ? init() : false;

}, false);