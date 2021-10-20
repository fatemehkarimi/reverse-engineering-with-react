import React, { useState } from 'react';
import MenuItem from './menuItem/menuItem';
import { ReactComponent as MenuIcon } from "../icons/menu.svg";
import './gridMenu.css'

function Menu() {
    return (<div className="menu-container">
        <MenuItem src="../icons/search.png" name="Search" />
        <MenuItem src="../icons/maps.png" name="Maps" />
        <MenuItem src="../icons/youtube.png" name="YouTube" />
        <MenuItem src="../icons/play.png" name="Play" />
        <MenuItem src="../icons/news.png" name="News" />
        <MenuItem src="../icons/gmail.png" name="Gmail" />
        <MenuItem src="../icons/meet.png" name="Meet" />
    </div>);
}

function GridMenu(props) {
    const [menuOpen, setMenuOpen] = useState(false);

    function handleMenuClick() {
        setMenuOpen(!menuOpen);
    }

    return (<div className="menu-icon-wrapper">
        <a role="button" href="#">
            <MenuIcon onClick={ handleMenuClick } />
        </a>
        { menuOpen ? <Menu /> : null }
    </div>);
}

export default GridMenu;