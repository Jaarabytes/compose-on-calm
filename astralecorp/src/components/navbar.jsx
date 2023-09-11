// import React from "react";
import "./components.css"

function Navbar(){
    const elements = [
        {
            label: "home", 
            url : "/home"
        },
        {
            label: "projects", 
            url : "/projects"
        },
        {
            label: "explore", 
            url : "/explore"
        },
        {
            label: "why us", 
            url : "/why-us"
        }
    ];
    return(
        <nav>
            <div className="navbar-container">
                {/* insert astralecorp image */}
                <ul className="navbar-links">
                    {elements.map((elem, index) =>
                    <li key={index}>
                        <a href={elem.url}>{elem.label}</a>
                    </li>
                    )}
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;