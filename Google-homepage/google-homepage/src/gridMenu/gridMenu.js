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
import PhotoLogo from '../icons/photo.png';
import DuoLogo from '../icons/duo.png';
import ShoppingLogo from '../icons/shopping.png';
import DocsLogo from '../icons/docs.png';
import SheetsLogo from '../icons/sheets.png';
import SlidesLogo from '../icons/slides.png';
import BooksLogo from '../icons/books.png';
import BloggerLogo from '../icons/blogger.png';
import HangoutsLogo from '../icons/hangouts.png';
import KeepLogo from '../icons/keep.png';
import JamboardLogo from '../icons/jamboard.png';
import ClassroomLogo from '../icons/classroom.png';
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
        <MenuItem src={ PhotoLogo } name="Photo" />
        <MenuItem src={ DuoLogo } name="Duo" />
        <MenuItem src={ ShoppingLogo } name="Shopping" />
        <div className="horizontal-line"></div>
        <MenuItem src={ DocsLogo } name="Docs" />
        <MenuItem src={ SheetsLogo } name="Sheets" />
        <MenuItem src={ SlidesLogo } name="Slides" />
        <MenuItem src={ BooksLogo } name="Books" />
        <MenuItem src={ BloggerLogo } name="Blogger" />
        <MenuItem src={ HangoutsLogo } name="Hangouts" />
        <MenuItem src={ KeepLogo } name="Keep" />
        <MenuItem src={ JamboardLogo } name="Jamboard" />
        <MenuItem src={ ClassroomLogo } name="Classroom" />
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