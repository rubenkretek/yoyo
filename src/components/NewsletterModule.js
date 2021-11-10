import React from 'react';

//Images
import woodBlocks from '../img/wood-blocks.svg';

const NewsletterModule = () => {
    return (
        <section className="newsletter-module">
            <div className="newsletter-module__container" data-aos="fade-up">
                <div className="newsletter-module__image">
                    <img src={woodBlocks} alt="Little Loft Logo" />
                </div>
                <div className="newsletter-module__content">
                    <h2>Let’s stay in touch</h2>
                    <p>Dicta omnes ius ut, ei atomorum voluptatum definitionem per. Zril petentium sit at, vel at quis corrumpit.</p>
                    <form class="form form--newsletter-sign-up" action="/" method="POST">
                        <label>Your email</label>
                        <input type="text" placeholder="Your email..." name="mail" required />
                        <input type="submit" value="Subscribe" />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default NewsletterModule;