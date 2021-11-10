import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';


const SocialIcons = () => {
    return (
        <div className="footer__social_icons">
            <div className="social-icons">
                <ul>
                    <li>
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                            <FaFacebookF />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                            <FaTwitter />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                            <FaInstagram />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SocialIcons;