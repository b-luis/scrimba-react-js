
import './styles.css';
import img from '../assets/kimgaeul.jpg'
import { ImLinkedin } from "react-icons/im"
import { MdEmail } from "react-icons/md"

function Info(){
    return ( 
        <header className='info--section'>
            <img className="info--img" src={img} alt="kim gaeul picture" />
            <div className='info--details'>
                <h1 className='info--name'>Kim Ga Eul (김가을)</h1>
                <p>K-pop Idol</p>
                <small><a href="https://kprofiles.com/gaeul-ive-profile-facts/" target="_blank">kimgaeul.website</a></small>
            </div>
            <div className="info--buttons">
                <button className="btn email">
                    <MdEmail className='info--icon'/>
                    Email
                    </button>
                <button className="btn linkedin">
                   <ImLinkedin className='info--icon' />
                    LinkedIn
                </button>
            </div>
        </header>
    )
}

export default Info;