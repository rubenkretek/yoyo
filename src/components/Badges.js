import React from 'react';

//Images
import appstoreBadge from '../img/badges/appstore.png';
import googleBadge from '../img/badges/google-play.png';

const Badges = () => {
    return (
        <div className="badges">
            <a className="badges__item badges__item--apple" href="https://apps.apple.com/us/app/spotify-new-music-and-podcasts/id324684580?itsct=apps_box_badge&amp;itscg=30200"><img src={appstoreBadge} alt="Download on the App Store" /></a>
            <a className="badges__item badges__item--google" href='https://play.google.com/store/apps/details?id=com.spotify.music&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src={googleBadge} /></a>
        </div>
    )
}

export default Badges;