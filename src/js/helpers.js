 (function(window, document, cutme, undefined) {

    const Helpers = function() {
        return {
	        detach: detach,
        	isInView: isInView
        };
    };
    
	const detach = function(node, target) {
		let parent = node.parentNode;
		let next = node.nextSibling;
	
		if (!parent) { return; }
		
		parent.removeChild(node);	// Detach node from DOM.		
		target.append(node, next);	// Append
	};
    
    const isInView = function(el) {
        let bottomOfWindow = (window.pageYOffset || window.scrollY) + window.innerHeight;
        
        if ( el.getBoundingClientRect().top + (window.pageYOffset || window.scrollY) < bottomOfWindow ) {
            return true;
        }
    };
    

}(window, document, window.cutme = window.cutme  || {}));