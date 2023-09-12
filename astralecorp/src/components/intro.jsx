import "./components.css"

function Intro(){
return(

    // FIX THE IMAGE MAKE SURE THE SIZE HAS INCREASED
    <div className="words-container">
    <div className="intro-words">
        <h1 className="intro-header">Astral Ecorp.</h1>
        <h5>TOWARDS A DISTANT FUTURE.</h5>
        <p>We bring global and futuristic technology to your screen</p>
        <div className="sign-up-buttons">
        <button className="getting-started">Free trial</button>
        <button className="compare-plans">Compare plans</button>
        </div>
    </div>
    <div className="image-container">
        <img className="intro-image" src="../../pexels-markus-spiske-1089440.jpg" alt="code"></img>
    </div>
    </div>
)
}
export default Intro;