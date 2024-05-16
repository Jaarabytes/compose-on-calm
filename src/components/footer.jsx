import "./components.css";

function Footer(){
    return(
        <footer className="contact-info">
            
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
        </footer>
    )
}
export default Footer;