const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

document.addEventListener('DOMContentLoaded',function() {

    const el = document.getElementsByClassName('js-nav')[0],
          menu = document.getElementsByClassName('js-menu')[0];

//          hamburger = document.getElementsByClassName('js-hamburger')[0];

    const init = function() {

        const links = el.getElementsByTagName('a');
        
        const action = function(e) {
            
            e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
            
            const target = e.currentTarget.getAttribute('href');
            
            target.indexOf("#") === 0 ? window.runScroll(target) : window.open(target, '_self');            
        };
        
        for (let i = 0; i < links.length; i++) {
            links[i].addEventListener('click', action);
        }
    };

    el ? init() : false;

}, false);