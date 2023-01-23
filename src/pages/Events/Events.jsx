import { useEffect } from 'react';
import './Events.css'


import underline from './underline.svg'

export const Events = ({ page, setPage }) => {

    useEffect(() => {
        document.title = "Events - DCC"
        window.scrollTo(0, 0);
        setPage('events')
        document.getElementById("navbarNav").classList.remove("show")
    })



    return (
        <div className='events-wrapper'>
            <div className='underline-header'>
                <span>Events</span>
                <img src={underline} alt='' />
            </div>
            {/* <div class="card">
                <img
                    class="eventImg hidden"
                    src='https://firebasestorage.googleapis.com/v0/b/dcc-nita.appspot.com/o/2.png?alt=media&token=3ab8069b-e0b3-4e23-b1b0-cae7dd8602d0'
                    alt="event img"
                />
                <img
                    class='eventImg eventImgAlt'
                    src='https://firebasestorage.googleapis.com/v0/b/dcc-nita.appspot.com/o/poster1.png?alt=media&token=17fc460d-7945-47bf-888b-9aff12ad54ee'
                    alt=''
                />
                <div class="text-content">
                    <div class="text-container">
                        <h4 class="heading">Hack the Future: HACK-NITA</h4>
                        <p>


                            A statewide hackathon coming to Aayam 8.0, and it's sure to be a smashing success! Teams from all corners of the state will come together to collaborate and create groundbreaking projects. Participants will have the chance to demonstrate their abilities, network with peers, and make invaluable connections.

                        </p>
                    </div>
                    <a href="https://hacknita.dccnita.tech/" class="btn">Know more</a>
                </div>
            </div> */}
            <div class="card card-2">
                <img
                    class="eventImg hidden"
                    src='https://firebasestorage.googleapis.com/v0/b/smart-naka-lifetime-error.appspot.com/o/GOC%20Banner%20Final.jpg?alt=media&token=c362fc18-b294-4cdc-8d90-503762c4dd2b '
                    alt="event img"
                />
                <img
                    class='eventImg eventImgAlt'
                    src='https://firebasestorage.googleapis.com/v0/b/smart-naka-lifetime-error.appspot.com/o/GOC%20Poster%20Final.jpg?alt=media&token=6e6e977f-0d23-4061-9a60-12e33b0cfa6c'
                    alt=''
                />
                <div class="text-content">
                    <div class="text-container">
                        <h2 class="heading">The Game of Codes</h2>
                        <p>


                            The Game of Codes is an open-for-all coding contest where all participants are invited to code solutions for a set of problems in any programming language of their choice. It is an excellent opportunity for beginners to gain valuable coding experience and compete for prizes. This is a great chance to hone your coding skills and potentially take home a reward!

                        </p>
                    </div>
                    <a href="https://goc.dccnita.tech" class="btn">Know more</a>
                </div>

            </div>
            <div class="card">
                <img
                    class="eventImg hidden"
                    src='https://firebasestorage.googleapis.com/v0/b/smart-naka-lifetime-error.appspot.com/o/CTF%20Banner%20Final.jpg?alt=media&token=82e0df98-7882-4c22-ae52-a6147a77e6fc'
                    alt="event img"
                />
                <img
                    class='eventImg eventImgAlt'
                    src='https://firebasestorage.googleapis.com/v0/b/smart-naka-lifetime-error.appspot.com/o/CTF%20Poster%20Final.jpg?alt=media&token=3a0cb930-f085-41bc-ab06-4eb14012a8bd'
                    alt=''
                />
                <div class="text-content">
                    <div class="text-container">
                        <h2 class="heading">Capture The Flag (CTF)</h2>
                        <p>

                            Capture the Flag (CTF) is a two-day event packed with stimulating puzzles and riddles to solve and enjoy as you progress through the game. It will be an exhilarating experience to explore and demistify various challenges with your skills and ingenuity, ultimately culminating in victory.
                        </p>
                    </div>
                    <a href="#" class="btn">Know more</a>
                </div>
            </div>
        </div>
    )
};