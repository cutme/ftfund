import InView from 'inview';

document.addEventListener('DOMContentLoaded',function() {
            
    const anims = document.getElementsByClassName('anim'),
          contact = document.getElementById('kontakt'),
          phone = document.getElementById('phone'),
          quick = document.getElementById('quick');

    let contact_visible = false;

    window.animsInit = function() {        

        for (let i = 0; i < anims.length; i++) {

            const inview = InView(anims[i], function(isInView) {
                if (isInView) {

                    anims[i].classList.add('anim--visible');
                    this.destroy();
    
                }
            });
        }
        
        
        const inview_contact = InView(quick, function(isInView) {
            if (isInView) {
                if (contact_visible === false) {
                    phone.classList.add('is-fadeout');
                    quick.classList.add('eat-it');
                    contact_visible = true;
                }

            } else {
                if (contact_visible === true) {
                    phone.classList.remove('is-fadeout');
                    quick.classList.remove('eat-it');
                    contact_visible = false;
                }
            }
        });
    };

}, false);
