

export const EventCard = ({
    imgAddress,
    heading,
    description,
    cta_link,
    ctaButtonText,
    eventDate=null,
    eventTime=null,
    eventLocation=null,
    }) =>{

        return (
        <div class="card">
            <img
                class="eventImg hidden"
                src={imgAddress}
                alt="event img"
            />
            <img
                class='eventImg eventImgAlt'
                src={imgAddress}
                alt=''
            />
            <div class="text-content">
                <div class="text-container">
                    <h2 class="heading">{heading}</h2>
                    <p>{description}</p>
                    {
                        (eventDate || eventLocation || eventTime) &&
                        <div>
                            <b>
                            {eventDate}
                            <br />
                            {eventLocation}
                            <br />
                            {eventTime}
                            </b>
                        </div>
                    }
                </div>
                <a href={cta_link} target="_blank" class="btn">{ctaButtonText}</a>
            </div>
        </div>
        )
}