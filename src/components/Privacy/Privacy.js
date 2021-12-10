import React from 'react';
import "./privacy.css"

const _ = require("lodash");
const Privacy = () => {
    return (
    <>
        <nav>
            <a href="#first"><i className="fas fa-door-open"/></a>
            <a href="#second"><i className="fab fa-accusoft"/></a>
            <a href="#third"><i className="fas fa-database"/></a>
            <a href="#fourth"><i className="fab fa-sourcetree"/></a>
            <a href="#fifth"><i className="fas fa-address-card"/></a>
        </nav>

        <div className='container'>
            <section id='first' className="active">
                <h1>Welcome to TravelScraps' Privacy Policy</h1>
            </section>

            <section id='second'>
                <h1>Purpose</h1>
                <p> Our goal is to connect the world through travel. This policy describes what information we collect
                and how we intend to use that data.</p>
            </section>

            <section id='third'>
                <h1>Data that we collect</h1>
                <p>Data collection depends on what feature you use from our website.</p>
            </section>

            <section id='fourth'>
                <h1>Data Usage</h1>
                <p>The data that we collect is used to improve the quality of the website and therefore your experience</p>
            </section>

            <section id='fifth'>
                <h1>Contact Information</h1>
                <p>We would love to hear from you! Reach us at:</p>
            </section>
        </div>
        <footer className="text-white">Date of Last Revision: December 9, 2021</footer>
    </>
    )
}
export default Privacy;