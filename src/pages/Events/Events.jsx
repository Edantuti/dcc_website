import { useEffect } from 'react';
import './Events.css'

import underline from './underline.svg'

export const Events = ({ page, setPage }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
        setPage('events')
        document.getElementById("navbarNav").classList.remove("show")
    })



    return (
        <div className='events-wrapper'>
            <div className='underline-header'>
                <span>Meet Our Team</span>
                <img src={underline} alt='' />
            </div>
            <div class="card">
                <img
                    class="eventImg"
                    src="https://source.unsplash.com/random/640x480/?wallpaper,landscape"
                    alt="event img"
                />
                <div class="text-content">
                    <div class="text-container">
                        <h2 class="heading">Event 1</h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum in
                            sed eligendi architecto, eius saepe reprehenderit! Ullam, dicta
                            itaque? Provident autem dolor cum repudiandae, nostrum beatae
                            mollitia neque sunt tempore!
                        </p>
                    </div>
                    <a href="#" class="btn">Know more &rAarr;</a>
                </div>
            </div>
            <div class="card card-2">
                <div class="text-content">
                    <div class="text-container">
                        <h2 class="heading">Event 2</h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum in
                            sed eligendi architecto, eius saepe reprehenderit! Ullam, dicta
                            itaque? Provident autem dolor cum repudiandae, nostrum beatae
                            mollitia neque sunt tempore!
                        </p>
                    </div>
                    <a href="#" class="btn">Know more &rAarr;</a>
                </div>
                <img
                    class="eventImg"
                    src="https://source.unsplash.com/random/640x480/?wallpaper,landscape"
                    alt="event img"
                />
            </div>
            <div class="card">
                <img
                    class="eventImg"
                    src="https://source.unsplash.com/random/640x480/?wallpaper,landscape"
                    alt="event img"
                />
                <div class="text-content">
                    <div class="text-container">
                        <h2 class="heading">Event 3</h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum in
                            sed eligendi architecto, eius saepe reprehenderit! Ullam, dicta
                            itaque? Provident autem dolor cum repudiandae, nostrum beatae
                            mollitia neque sunt tempore!
                        </p>
                    </div>
                    <a href="#" class="btn">Know more &rAarr;</a>
                </div>
            </div>
        </div>
    )
};