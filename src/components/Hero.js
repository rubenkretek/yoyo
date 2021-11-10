import React from 'react';

//Components
import Badges from './Badges';

//Images
import heroImage from '../img/hero-image/20---iPhone-12-Pro-Perspective-Style-Left-&-Right.png';
import heroImageSmall from '../img/hero-image/20---iPhone-12-Pro-Perspective-Style-Left-&-Right@small.png';
import heroImageMedium from '../img/hero-image/20---iPhone-12-Pro-Perspective-Style-Left-&-Right@medium.png';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__container">
                <div className="hero__copy">
                    <h1>Find new joy in second-hand toys</h1>
                    <p className="hero__text">High-quality items at a fraction of the price, and you’ll be helping to save our planet Earth by reducing landfill.</p>
                    <Badges />
                </div>
                <div className="hero__image">
                    <picture>
                        <source srcset={heroImage} media="(min-width: 1024px)" />
                        <source srcset={heroImageMedium} media="(min-width: 640px)" />
                        <img src={heroImageSmall} alt="Little Loft app in two smartphones overlapping each other" />
                    </picture>
                </div>
            </div>
        </section>
    )
}

export default Hero;