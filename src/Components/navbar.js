const Navbar = () => {
    return (
        <nav>
            <div className="title">
                <img src="https://iitg.ac.in/nss/images/logo.png" alt="nss-logo" className = "logo"/>
                <h2>NSS , IIT GUWAHATI</h2>
            </div>
            <div className="nav-links-div">
                <ul>
                    <li className = "nav-links-text">OBJECTIVES</li>
                    <li className = "nav-links-text">ACTIVITES</li>
                    <li className = "nav-links-text">OUR TEAM</li>
                    <li className = "nav-links-text">ABOUT</li>
                    <li className = "nav-links-text">CONTACT</li>
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;