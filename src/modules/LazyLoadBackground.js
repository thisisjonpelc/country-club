export default class LazyLoadBackground{
    
    constructor(){
        this.events();
    };

    events(){
        document.addEventListener('lazybeforeunveil', function(e){
            var bg = e.target.getAttribute('data-bg');

            console.log(e.target);
            //console.log(bg);

            if(bg){
                console.log('There is a background:', bg);
                e.target.style.backgroundImage = `url(${bg})`;
            }

        });
    }
};