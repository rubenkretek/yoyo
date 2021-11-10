import React from 'react';

// Images
import contentImage1 from '../img/content/content-image-1.jpg';
import contentImage2 from '../img/content/content-image-2.jpg';
import contentImage3 from '../img/content/content-image-3.jpg';
import contentImage4 from '../img/content/content-image-4.jpg';

// Data
const theData = [
    {
        title: 'Share together',
        subtitle: 'Sign up to our community of like-minded parents',
        copy: 'Dicta omnes ius ut, ei atomorum voluptatum definitionem per. Zril petentium sit at, vel at quis corrumpit. At facilisi contentiones per.',
        imageURL: contentImage1,
        imageAltTag: 'Image'
    },
    {
        title: 'Hidden treasures',
        subtitle: 'Find your little one’s next favourite toy, teddy, or swing',
        copy: 'Dicta omnes ius ut, ei atomorum voluptatum definitionem per. Zril petentium sit at, vel at quis corrumpit. At facilisi contentiones per.',
        imageURL: contentImage2,
        imageAltTag: 'Image'
    },
    {
        title: 'Store the money',
        subtitle: 'Feel safe and secure paying for items through our built-in wallet platform',
        copy: 'Dicta omnes ius ut, ei atomorum voluptatum definitionem per. Zril petentium sit at, vel at quis corrumpit. At facilisi contentiones per.',
        imageURL: contentImage3,
        imageAltTag: 'Image'
    },
    {
        title: 'One planet',
        subtitle: 'Buy from local sellers on our marketplace to help protect the planet',
        copy: 'Dicta omnes ius ut, ei atomorum voluptatum definitionem per. Zril petentium sit at, vel at quis corrumpit. At facilisi contentiones per.',
        imageURL: contentImage4,
        imageAltTag: 'Image'
    },
]

const Content = () => {
    return (
        <section className="content">
            {theData.map((data) => (
                <div className="content__item">
                    <div className="content__image">
                        <img src={data.imageURL} alt={data.imageAltTag} />
                    </div>
                    <div className="content__copy">
                        <h2>{data.title}</h2>
                        <p className="meta-text">{data.subtitle}</p>
                        <p>{data.copy}</p>
                    </div>
                </div>
            ))
            }
        </section>
    )
}

export default Content;