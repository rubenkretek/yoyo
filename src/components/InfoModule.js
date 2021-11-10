import React from 'react';

//Images
import ourStoryImage from '../img/our-story/our-story.png';
import ourStoryImageSmall from '../img/our-story/our-story@small.png';
import ourStoryImageLarge from '../img/our-story/our-story@large.png';


const InfoModule = () => {
    return (
        <section className="info-module">
            <div className="info-module__container" data-aos="fade-up">

                <div className="info-module__image">
                    <picture>
                        <source srcset={ourStoryImage} media="(min-width: 1024px)" />
                        <source srcset={ourStoryImageLarge} media="(min-width: 640px)" />
                        <img src={ourStoryImageSmall} alt="Mother holding a baby, both looking happy" />
                    </picture>
                </div>

                <div className="info-module__copy">
                    <h2>Our Story</h2>
                    <p className="meta-text">In hendrerit nulla pharetra ante pulvinar egestas. Sed commodo massa id est iaculis, sit amet congue.</p>
                    <p>In hendrerit nulla pharetra ante pulvinar egestas. Sed commodo massa id est iaculis, sit amet congue enim placerat. Mauris leo arcu, mattis vitae sodales in, molestie eget quam.In hendrerit nulla pharetra ante pulvinar egestas. Sed commodo massa id est iaculis, sit amet congue enim placerat. Mauris leo arcu, mattis vitae sodales in, molestie eget quam.</p>
                </div>

            </div>
        </section>
    )
}

export default InfoModule;