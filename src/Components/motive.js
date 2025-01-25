import trophy from "./images/icons8-trophy-96.png"
import shield from "./images/icons8-knight-shield-64.png"
import flag from "./images/icons8-flag-80.png"

const Motive = () => {
    return (
        <div className="motive">
            <div className="motive-cards">
                <img src={trophy} alt="" className = "motive-icons"/>
                <p className="motive-info">Motivate students at IITG
                to indulge in nation building activities</p>
            </div>
            <div className="motive-cards">
                <img src={shield} alt="" className = "motive-icons"/>
                <p className="motive-info">Uphold the need of selfless service</p>
            </div>
            <div className="motive-cards">
                <img src={flag} alt="" className = "motive-icons"/>
                <p className="motive-info">Help and work for the benefit
                of people in and around IIT Guwahati</p>
            </div>
        </div>
    );
}

export default Motive;