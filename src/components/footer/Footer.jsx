import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './footer.css'

function Footer() {
  return (
    <>
    <div className='footer'>
        <div className='icons'>
            <li className='icon-white'> <FacebookIcon/></li>
            <li> <InstagramIcon/></li>
            <li> <YouTubeIcon/></li>
        </div>
        <div className='links'>
            <div className='triple'>
            <li>Audio Description</li>
            <li>Inventor Relations</li>
            <li>Legal Notices</li>
            </div>
            <div className='triple'>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookies preferences</li>
            </div>
            <div className='triple'>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
            </div>
            <div className='triple'>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact us</li>
        </div>
        </div>
        <button>Service Code</button>
        <p>&copy; 1997-2024 Netflix,Inc.</p> <br/>
    </div>
    </>
  )
}

export default Footer