export default class LazyLoadBackground{
    
    constructor(){
        this.events();
    };

    events(){
        document.addEventListener('lazybeforeunveil', function(e){
            var bg = e.target.getAttribute('data-bg');
                
            if(bg){
                e.target.style.backgroundImage = `url(${bg})`;
            }

        });
    }
};