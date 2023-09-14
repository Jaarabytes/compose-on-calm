// import React from "react";
import "./components.css";
import { useState } from "react";

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
    const [navbarOpen, setNavbarOpen] = useState(false);
    function toggleClick(){
        setNavbarOpen(!navbarOpen);
    }
    return(
        <>
        <nav className="navbar-container">
                {/* insert astralecorp image */}
                <ul className="navbar-links">
                    {elements.map((elem, index) =>
                    <li key={index}>
                        <a href={elem.url} className="item">{elem.label}</a>
                    </li>
                    )}
                </ul>
        </nav>
        
        <button className="show-navbar"
                onClick={toggleClick}
                ><i className={`fas ${navbarOpen ? "fa-times" : "fa-bars"}`} ></i></button>
        
        <nav className={`${navbarOpen ? "hidden-navbar" : "non-hidden-navbar"}`}>
                <div className="list">
                    {elements.map((elem, index) =>
                    <li key={index}>
                        <a href={elem.url} className="item">{elem.label}</a>
                    </li>
                    )}
                </div>
        </nav>
        </>
    )
}
export default Navbar;