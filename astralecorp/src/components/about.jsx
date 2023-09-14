import "./components.css";

function About(){
    return(
        <div className="last-last">
        <div className="about">
            <div className="corp-info">
                <h3>About</h3>
                <a href=""><p>Discover</p></a>
                <a href=""><p>Developers</p></a>
                <a href=""><p>Explore</p></a>
                <a href=""><p>Cyberghosts</p></a>
                <a href=""><p>Anonymous</p></a>
                <a href=""><p>Our Team</p></a>
                <a href=""><p>Join us</p></a>
            </div>
            <div className="corp-info">
                <h3>Support</h3>
                <a href=""><p>API docs</p></a>
                <a href=""><p>Community forum</p></a>
                <a href=""><p>Skills</p></a>
                <a href=""><p>Developer services</p></a>
                <a href=""><p>Status</p></a>
            </div>
            <div>
                <h3>Visit Us</h3>
                <p>Malindi, Kilifi, Kenya</p>
                <p>My way restaurant, along Coral Key road</p>
            </div>
        </div>

        <div className="contact-info">
            
            <div className="icons">
                <div>
                <a href="https://instagram.com/astralecorp" className="links"><i className="fab fa-instagram"></i></a>
                </div>
                <div>
                <a href="https://youtube.com/astralecorp" className="links"><i className="fab fa-youtube"></i></a>
                </div>
                <div>
                <a href="https://x.com/astralecorp" className="links"><i className="fab fa-twitter"></i></a>
                </div>
                <div>
                <a href="https://disocrd.com/astralecorp" className="links"><i className="fab fa-discord"></i></a>
                </div>
                <div>
                <a href="https://linked.com/in/astralecorp" className="links"><i className="fab fa-linkedin"></i></a>
                </div>
                <div>
                <a href="https://github.com/astralecorp" className="links"><i className="fab fa-github"></i></a>
                </div>
                </div>
            </div>
        </div>
    )
}

export default About;