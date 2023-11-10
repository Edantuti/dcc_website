import { useEffect } from 'react';
import './Events.css'


import underline from './underline.svg'
import { EventCard } from './components/Event';
import { useState } from 'react';
import { pastOrFutureDate } from '../../utlis/pastOrFutureDate';

export const Events = ({ page, setPage }) => {

    const [upcomingEvents,setUpcomingEvents] = useState([]);
    const [pastEvents,setPastEvents] = useState([]);
    const [loading,setLoading] = useState(true);

    function reverse(list){
        const newList=[];
        for(let i=list.length-1;i>=0;i--){
            newList.push(list[i]);
        }
        return newList;
    }

    useEffect(() => {
        document.title = "Events - DCC"
        window.scrollTo(0, 0);
        setPage('events')
        document.getElementById("navbarNav").classList.remove("show")
    })

    useEffect(()=>{
        const fetchEvents =async()=>{
            const data = await fetch("https://api-admin-dcc.onrender.com/events");
            let events = await data.json();   
            setPastEvents(events);  
            setUpcomingEvents(reverse(events));
            setLoading(false)
        }
        fetchEvents();
    },[])

    if(loading)
        return (
            <div className='events-wrapper'>
            <div className='underline-header'>
                <span>Events</span>
                <img src={underline} alt='' />
            </div>
                <div className="loadingScreen">
                    Loading Events ...
                </div>
            </div>
    )

    return (
        <div className='events-wrapper'>
            <div className='underline-header'>
                <span>Events</span>
                <img src={underline} alt='' />
            </div>
            {
                upcomingEvents.map((event)=>{
                    if(pastOrFutureDate(event.date,event.time)==="UPCOMING"){
                    return (
                        <EventCard
                            imgAddress={event.imageURL}
                            heading={event.heading}
                            description={event.description}
                            cta_link={event.link}
                            ctaButtonText={"Know More"}
                            eventLocation={event.location}
                            eventTime={event.time}
                            eventDate={event.date}
                        />
                    )                        
                    }
                })
            }
            <h2 class="heading">Past Events</h2>
            {
                pastEvents.map((event)=>{
                    if(pastOrFutureDate(event.date,event.time)==="PAST"){
                    return (
                        <EventCard
                            imgAddress={event.imageURL}
                            heading={event.heading}
                            description={event.description}
                            cta_link={event.link}
                            ctaButtonText={"Know More"}
                            eventLocation={event.location}
                            eventTime={event.time}
                            eventDate={event.date}
                        />
                    )                        
                    }
                })
            }
            <EventCard
                imgAddress={"https://res.cloudinary.com/dhzod7y8u/image/upload/v1693606077/final_maadhyam_p2ktr5.jpg"}
                heading={"Maadhyam 3.0"}
                description={"Ignite Your Tech Journey at the orientation event for first-year students, brought to you by the powerhouse clubs DCC and GDSC at NITA! Join us for an exciting ride through boundless opportunities and tech innovation. Get ready to embark on this exhilarating journey and witness the unveiling of DCC & GDSC Orientation 2023, exclusively for 1st years."}  
                cta_link={"#"}
                ctaButtonText={"Know More"}
                eventDate={"September 3rd, Sunday"}
                eventLocation={"Visvesvaraya Auditorium"}
                eventTime={"2:30 - 5:30 PM"} 
            />
            <EventCard
                imgAddress={"https://firebasestorage.googleapis.com/v0/b/smart-naka-lifetime-error.appspot.com/o/GOC%20Banner%20Final.jpg?alt=media&token=c362fc18-b294-4cdc-8d90-503762c4dd2b"}
                heading={"The Game of Codes"}
                description={"The Game of Codes is an open-for-all coding contest where all participants are invited to code solutions for a set of problems in any programming language of their choice. It is an excellent opportunity for beginners to gain valuable coding experience and compete for prizes. This is a great chance to hone your coding skills and potentially take home a reward!"}
                cta_link={"https://goc.dccnita.tech"}
                ctaButtonText={"Know More"}

            />
            <EventCard
                imgAddress={'https://firebasestorage.googleapis.com/v0/b/smart-naka-lifetime-error.appspot.com/o/ctf%20banner2.jpg?alt=media&token=e8a44013-1ae6-4c6b-a6f9-98251475c2e9'}
                heading={"Capture the Flag (CTF)"}
                description={"Capture the Flag (CTF) is a two-day event packed with stimulating puzzles and riddles to solve and enjoy as you progress through the game. It will be an exhilarating experience to explore and demistify various challenges with your skills and ingenuity, ultimately culminating in victory."}
                cta_link={"https://ctf.dccnita.tech"}
                ctaButtonText={"Know more"}
            />
        </div>
    )
};