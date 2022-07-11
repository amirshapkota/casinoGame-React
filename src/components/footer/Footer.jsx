import React from 'react'
import "./footer.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="upContent">
            <img src="./images/logo.png" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A inventore praesentium itaque maiores odit voluptate. Distinctio consectetur laudantium repudiandae iste. Nisi quis excepturi corporis ipsa molestiae ea adipisci aperiam esse?</p>
        </div>
        <div className="botContent">
            <div className="footerList">
                <h3>Useful Links</h3>
                <ul>
                    <li>Home</li>
                    <li>Promotion</li>
                    <li>Referral</li>
                    <li>About</li>
                    <li>Terms and Conditions</li>
                </ul>
            </div>
            <div className="footerList">
                <h3>Useful Links</h3>
                <ul>
                    <li>Home</li>
                    <li>Promotion</li>
                    <li>Referral</li>
                    <li>About</li>
                    <li>Terms and Conditions</li>
                </ul>
            </div>
            <div className="footerList">
                <h3>Useful Links</h3>
                <ul>
                    <li>Home</li>
                    <li>Promotion</li>
                    <li>Referral</li>
                    <li>About</li>
                    <li>Terms and Conditions</li>
                </ul>
            </div>
            <div className="socials">
                <div className="socialLinks">
                    <FacebookIcon className="socialIcon"/>
                    <InstagramIcon className="socialIcon"/>
                    <TwitterIcon className="socialIcon"/>
                </div>
            </div>
        </div>
        <div className="copyrightContent">
            <p>&copy; Copyright all right reserved | CAS Games 2022</p>
        </div>
    </div>
  )
}
