import React, { useState } from 'react';
import MenuItem from './menuItem/menuItem';
import { ReactComponent as MenuIcon } from "../icons/menu.svg";
import MeetLogo from '../icons/meet.png';
import GmailLogo from '../icons/gmail.png';
import NewsLogo from '../icons/news.png';
import PlayLogo from '../icons/play.png';
import YoutubeLogo from '../icons/youtube.png';
import MapsLogo from '../icons/maps.png';
import SearchLogo from '../icons/search.png';
import ChatLogo from '../icons/chat.png';
import ContactsLogo from '../icons/contacts.png';
import DriveLogo from '../icons/drive.png';
import CalendarLogo from '../icons/calendar.png';
import TranslateLogo from '../icons/translate.png';
import './gridMenu.css';


function Menu() {
    return (<div className="menu-container">
        <MenuItem src={ SearchLogo } name="Search" />
        <MenuItem src={ MapsLogo } name="Maps" />
        <MenuItem src={ YoutubeLogo } name="YouTube" />
        <MenuItem src={ PlayLogo } name="Play" />
        <MenuItem src={ NewsLogo } name="News" />
        <MenuItem src={ GmailLogo } name="Gmail" />
        <MenuItem src={ MeetLogo } name="Meet" />
        <MenuItem src={ ChatLogo } name="Chat" />
        <MenuItem src={ ContactsLogo } name="Contacts" />
        <MenuItem src={ DriveLogo } name="Drive" />
        <MenuItem src={ CalendarLogo } name="Calendar" />
        <MenuItem src={ TranslateLogo } name="Translate" />
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