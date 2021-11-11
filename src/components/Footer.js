import React from 'react';

//Components
import Badges from './Badges';
import SocialIcons from './SocialIcons';

//Variables
const thisYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer class="footer">
            <div className="footer__container">
                <div className="footer__cta">
                    <h2>Get it for free</h2>
                    <Badges />
                </div>
                <div className="footer__divider">
                    <hr />
                </div>
                <div className="footer__disclaimer-social">
                    <div className="footer__disclaimer">
                        © Little Loft {thisYear} . All Rights Reserved.
                    </div>
                    <div className="footer__social_icons">
                        <SocialIcons />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;