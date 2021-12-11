import React from 'react';
import "./privacy.css"

const _ = require("lodash");
const Privacy = () => {
    
    const currentDate = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        return today;
    }

    let currDate = currentDate();
    
    return (
    <>
        <nav>
            <a href="#first"><i className="fas fa-door-open"/></a>
            <a href="#second"><i className="fab fa-accusoft"/></a>
            <a href="#third"><i className="fas fa-database"/></a>
            <a href="#fourth"><i className="fab fa-sourcetree"/></a>
            <a href="#fifth"><i className="fas fa-address-card"/></a>
        </nav>

        <div className='container sections'>
            <section id='first' className="active">
                <h1>Welcome to TravelScraps' Privacy Policy</h1>
            </section>

            <section id='second'>
                <div className="container">
                    <h1 style={{textAlign:"center"}}>Purpose</h1>
                    <p style={{marginLeft:"-40px"}}> Our goal is to connect the world through travel. We want people to be able to plan any upcoming trips through
                        the power of social media. We want users to gain inspiration for potential new travel destinations based on
                        where their friends and other users have been. This website is for anyone who is passionate about
                        traveling. This policy describes what information we collect
                        and how we intend to use that data. </p>
                </div>
            </section>

            <section id='third'>
                <div className="container">
                    <h1 style={{textAlign:"center"}}>Data that we collect</h1>
                    <li>Data collection depends on what feature you use from our website. For example, a Travel Guide user does
                    not possess the ability to start a timer representing a countdown till the start of their vacation. That ability
                        is made available only to a traveller user. Therefore, that is additional information we will collect regarding
                        traveller users.
                    </li>
                    <li>
                        A regular traveller also possesses the ability to add events to a calendar, while a travel guide
                        and an admin does not. Therefore, we will also calendar dates pertaining to certain events a user
                        has created for themselves.
                    </li>
                    <li>
                        Collecting this data will allow us to monitor the usage trends of these bonus features, thereby
                        allowing us to modify the services we provide to you in a way that enhances your experience.
                    </li>
                </div>
            </section>

            <section id='fourth'>
                <div>
                    <h1 style={{textAlign:"center"}}>Values</h1>
                    <ul>
                        <li>
                            To make sure people can connect and experience different locations and cultures around the world
                        </li>
                        <li>
                            To use your data with the sole purpose of enhancing end-user experience. We consider ourselves successful
                        </li>
                        <li>
                            To never sell your data to 3rd party clients.
                        </li>
                    </ul>
                </div>
            </section>

            <section id='fifth'>
                <div>
                    <h1 style={{textAlign:"center"}}>Contact Information</h1>
                    <p>We would love to hear from you! Reach us at any of the following email addresses:
                        <li>
                            dhananjai.a@northeastern.edu
                        </li>
                        <li>
                            priyal.patel@northeastern.edu
                        </li>
                        <li>
                            musembi.k@northeastern.edu
                        </li>
                        <li>
                            won.h@northeastern.edu
                        </li>
                    </p>
                </div>
            </section>
        </div>
        <footer className="text-white">Date of Last Revision: {currDate}</footer>
    </>
    )
}
export default Privacy;