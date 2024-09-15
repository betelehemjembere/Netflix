import React from 'react'
import netflixlogo from '../../assets/netflix-logo.jpg'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountBoxIcon from '@mui/icons-material/AccountBox';



import './header.css'

function Header() {
  return (
    <>
    <div className='header'>
    <div className='first-part'>
        <ul>
            <img src={netflixlogo} alt="Netflix" className='netflix-logo'/>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Language</li>
        </ul>
        </div>
        <div className='second-part'>
            <ul>
          <li> <SearchIcon /></li>
          <li className="icon-white"><NotificationsIcon  /></li>
          <li> <AccountBoxIcon/></li>
          <li> <ArrowDropDownIcon/></li>
          
            </ul>
        </div>
        </div>
    </>
  )
}

export default Header