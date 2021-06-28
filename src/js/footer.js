document.addEventListener('DOMContentLoaded',function() {

    const el = document.getElementsByClassName('js-footer')[0],
          menu = el.getElementsByClassName('js-menu')[0];

    const init = function() {

        const links = menu.getElementsByTagName('a');
        
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