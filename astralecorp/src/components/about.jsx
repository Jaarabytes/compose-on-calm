import "./components.css";

function About(){
    return(
        <>
        <h1 style={{textAlign:"center"}}>CONTACTS</h1>
        <div className="about">
            <div className="contact-info">
                <h3>Reliability</h3>
                <p>Follow our accounts below:</p>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-reddit"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-whatsapp"></i>
                <i className="fab fa-linkedin"></i>
            </div>
            <div className="corp-info">
                <h3>About</h3>
                <p>Discover</p>
                <p>Developers</p>
                <p>Explore</p>
                <p>Cyberghosts</p>
                <p>Anonymous</p>
                <p>Our Team</p>
                <p>Join us</p>
            </div>
            <div>
                <h3>Visit Us</h3>
                <p>Malindi, Kilifi, Kenya</p>
                <p>My way restaurant, along Coral Key road</p>
            </div>
        </div>
        </>
    )
}

export default About;