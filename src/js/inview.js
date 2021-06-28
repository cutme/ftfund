import InView from 'inview';

document.addEventListener('DOMContentLoaded',function() {
            
    const anims = document.getElementsByClassName('anim'),
          contact = document.getElementById('kontakt'),
          phone = document.getElementById('phone');
          
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
        
        
        const inview_contact = InView(contact, function(isInView) {
            if (isInView) {
                if (contact_visible === false) {
                    phone.classList.add('is-fadeout');
                    contact_visible = true;
                }

            } else {
                if (contact_visible === true) {
                    phone.classList.remove('is-fadeout');
                    contact_visible = false;
                }
            }
        });
    };

}, false);
