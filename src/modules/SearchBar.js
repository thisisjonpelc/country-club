export default class SearchBar{
    constructor(){
        this.searchToggle = document.getElementsByClassName('search__toggle')[0];
        this.searchBar = document.getElementsByClassName('search__form')[0];

        this.events();
    }

    events(){
        this.searchToggle.addEventListener('click', () => {
            this.toggleSearchBarClass();
        });
    }

    toggleSearchBarClass(){
        this.searchBar.classList.toggle('search__form--visible');
    }
}