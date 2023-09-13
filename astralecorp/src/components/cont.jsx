import { useInView } from "react-intersection-observer";
import "./components.css";
function Cont() {
  const {ref , inView} = useInView({
    triggerOnce:false,
    rootMargin:"50px 0px"
  })
const devs = [
  {
    name: "Jaarabytes",
    url: "https://wa.me/+254703605398",
    role: "Security analyst",
    profilePic: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fd1%2F4e%2F98%2Fd14e983a7054bc051740c8d2bea85472.jpg&tbnid=2_qwdM7hQOfkiM&vet=12ahUKEwji1Nqqw6iBAxVcnCcCHdDRCBUQMygDegQIARB6..i&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F617485798902005796%2F&docid=k2WctJUuE4CIfM&w=768&h=1365&q=zoro&ved=2ahUKEwji1Nqqw6iBAxVcnCcCHdDRCBUQMygDegQIARB6"
  },
  {
    name: "Thee eclipse",
    url: "https://wa.me/+254703605398",
    role: "Bug bounty hunter",
    profilePic: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fonepiece%2Fimages%2F6%2F66%2FShanks_Anime_Infobox.png%2Frevision%2Flatest%2Fscale-to-width-down%2F1200%3Fcb%3D20230201001138&tbnid=yqdpTCeXzr5LwM&vet=12ahUKEwjW8IL5w6iBAxU7vycCHW5ZBK0QMygAegQIARB0..i&imgrefurl=https%3A%2F%2Fonepiece.fandom.com%2Fwiki%2FShanks&docid=rr9weg3nRxOVMM&w=1200&h=957&q=shanks&ved=2ahUKEwjW8IL5w6iBAxU7vycCHW5ZBK0QMygAegQIARB0"
  },
  {
    name: "En Kine",
    url: "https://wa.me/+254703605398",
    role: "UI/UX designer",
    profilePic: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F78473e74-db74-4dea-99e2-126f30e136bf%2Fdefjbh5-9638335d-8c37-4983-b315-66ca74c3e54a.png%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc4NDczZTc0LWRiNzQtNGRlYS05OWUyLTEyNmYzMGUxMzZiZlwvZGVmamJoNS05NjM4MzM1ZC04YzM3LTQ5ODMtYjMxNS02NmNhNzRjM2U1NGEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6E0sNmofp4vL77aZnW3puoagp76dDdr_VBz188jvXjg&tbnid=RsvvuAWFqD4FyM&vet=12ahUKEwiomsKFxKiBAxVNpicCHSh_DZUQMygLegUIARCKAQ..i&imgrefurl=https%3A%2F%2Fwww.deviantart.com%2Fnewgate-arts%2Fart%2FKizaru-872622041&docid=gUu1vr9iGlyQyM&w=2160&h=3840&q=kizaru&ved=2ahUKEwiomsKFxKiBAxVNpicCHSh_DZUQMygLegUIARCKAQ"
  }
]
  return (
    <>
    <h3>OUR TEAM</h3>
    <div className="team">
      {devs.map((elem, index) => (
        <div className="team-member" key={index}>
          <img src={elem.url} alt={`profile picture of ${elem.name}`} />
          <h3>{elem.name}</h3>
          <div className="qualities">{elem.role}</div>
          <hr />
          <button className="contact">
            <a href={elem.url}>Contact</a>
          </button>
        </div>
      ))}
    </div>

      <div className="features">
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
