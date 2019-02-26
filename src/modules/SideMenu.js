export default class SideMenu{
    constructor(){
        this.menuToggle = document.getElementsByClassName('menu-button')[0];
        this.navMenu = document.getElementsByClassName('nav-menu')[0];
        this.listCategories = this.navMenu.getElementsByClassName('nav-menu__category-label');
        this.innerLinks = this.navMenu.getElementsByClassName('nav-menu__inner-link');

        console.log(this.innerLinks);

        this.events();
    }

    events(){
        this.menuToggle.addEventListener('click', () => {
            this.toggleNavMenuClass();
            this.toggleButtonClass();
        });

        Array.from(this.listCategories).forEach((category) => {
            category.addEventListener('click', (e) => {
                this.toggleCategoryClass(category);
            });
        });

        Array.from(this.innerLinks).forEach((link) => {
            link.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        })
    }

    toggleNavMenuClass(){
        this.navMenu.classList.toggle('nav-menu--visible');
    }

    toggleButtonClass(){
        console.log(this.menuToggle.childNodes);
        this.menuToggle.getElementsByClassName('menu-icon')[0].classList.toggle('menu-icon--close');
    }

    toggleCategoryClass(category){
        const classPresent = category.parentElement.classList.contains('nav-menu__category--open');
        this.removeCategoryClasses();

        if(!classPresent){
            category.parentElement.classList.toggle('nav-menu__category--open');
        }
    }
    
    removeCategoryClasses(){
        Array.from(this.listCategories).forEach((category) => {
            category.parentElement.classList.remove('nav-menu__category--open');
        });
    }
}