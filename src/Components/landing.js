import Navbar from "./navbar";


const Landing = () => {
    return (
        <div className="landing">
            <Navbar />
            <div className="landing-data">
                <h1 className="hope">BRING THE CHANGE TOGETHER</h1>
                <p className="text">The Indian Institutes of Technology (IITs) were created to engineer technological innovations that would improve the living standards of the society at large. NSS IIT Guwahati constantly works towards this goal through regular donation drives, cleanliness drives and by taking up teaching projects at various locations.</p>
                <p className="new">We invite all interested Faculty Members, Officers, Staff Members and Students to join NSS Cell as a Volunteer. Join <a href="https://forms.office.com/r/3MQnb4Vdsx">here</a> !</p>
            </div>
        </div>
    );
}

export default Landing;