import "normalize.css/normalize.css";
import './styles/main.scss';

import SearchBar from './modules/SearchBar';
import SideMenu from './modules/SideMenu';
import LazyLoadBackground from './modules/LazyLoadBackground';

const searchBar = new SearchBar();
const sideMenu = new SideMenu();
const lazyLoad = new LazyLoadBackground();