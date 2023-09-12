import "./components.css";
import { useEffect, useState } from "react";

function Cont() {
  const [blurred, setBlurred] = useState(true);

  useEffect(() => {
    const features = document.querySelector(".features");
    const handleScroll = () => {
      const rect = features.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setBlurred(false);
      } else {
        setBlurred(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`features ${blurred ? "blurred" : ""}`}>
        <div className="box"><i className="fas fa-globe"></i><p className="feature-words">Global</p></div>
        <div className="box"><i className="fas fa-shield-alt"></i><p className="feature-words">Secure</p></div>
        <div className="box"><i className="fas fa-robot"></i><p className="feature-words">Advance Tech</p></div>
        <div className="box"><i className="fas fa-code"></i><p className="feature-words">Efficient</p></div>
        <div className="box"><i className="fas fa-heart"></i><p className="feature-words">Appealing</p></div>
      </div>
      <hr />
    </>
  );
}

export default Cont;
