// import React from "react";
import "./components.css"

function Navbar(){
    const elements = [
        {
            label: "Home", 
            url : "/home"
        },
        {
            label: "Products", 
            url : "/projects"
        },
        {
            label: "Explore", 
            url : "/explore"
        },
        {
            label: "Why us", 
            url : "/why-us"
        }
    ];
    return(
        <nav className="navbar-container">
                {/* insert astralecorp image */}
                <ul className="navbar-links">
                    {elements.map((elem, index) =>
                    <li key={index}>
                        <a href={elem.url}>{elem.label}</a>
                    </li>
                    )}
                </ul>
        </nav>
    )
}
export default Navbar;