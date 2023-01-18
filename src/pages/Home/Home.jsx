import './Home.css'

import logo from './logo.png'
import lines from './lines.svg'
import underline from './underline.svg'
import pic from './Rectangle1.png'
import pic2 from './Rectangle2.png'
import box from './box.svg'
import dots from './dots.svg'

export const Home = () => {
    return (
        <div className="home-wrapper">
            <div className="header row justify-content-center">
                <div className='hidden col-lg-10'>
                    <img src={logo} alt='' />
                </div>
                <div className="content col-lg-10">
                    <span>Dream <span style={{ color: "#02A89A" }}>Code</span> Conqurer</span>
                    <span>DCC</span>
                    <span>/ˈkəʊdə/</span>
                    <span>An initiative of NIT Agartala to bring like-minded</span>
                    <span>Coders and Developers together</span>
                    <a href='https://discord.gg/58qJhGtTaa' target='_blank'><button className='btn join-btn'>Join on Discord</button></a>
                </div>
            </div>
            <div className="img-content">
                <img src={lines} alt='' />
            </div>
            <div className='underline-header'>
                <span>What Do We Do</span>
                <img src={underline} alt='' />
            </div>
            <div className='row'>
                <div className='col-lg-3 col-md-9'>
                    <span>We Increase awareness</span>
                    <span>Towards plethora of opportunities such as internships, competitions, openings for collaboration in projects, and much more!</span>
                    <span>Learn More -</span>
                </div>
                <div className='col-lg-5 col-md-12'>
                    <img src={pic} alt='' />
                    <img className='box' src={box} alt='' />
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-5 col-md-12'>
                    <img src={pic2} alt='' />
                    <img className='box' src={dots} alt='' />
                </div>
                <div className='col-lg-3 col-md-9'>
                    <span>We Provide a tech community</span>
                    <span>Forming a global tech community where developers can converse together, share information and learn from each other. Helping you accelerate your learning & bring you closer to like – minded individuals. So, there will always be a helping hand at your side.</span>
                    <span>Learn More -</span>
                </div>
            </div>
        </div>
    )
};