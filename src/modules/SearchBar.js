export default class SearchBar{
    constructor(){
        this.searchToggle = document.getElementsByClassName('search__toggle')[0];
        this.searchBar = document.getElementsByClassName('search__form')[0];

        console.log(this.searchToggle);

        this.events();
    }

    events(){
        this.searchToggle.addEventListener('click', () => {
            console.log('Clicked!');
        });
    }
}