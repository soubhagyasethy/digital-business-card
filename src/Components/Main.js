import Email from "../Images/Mail.png"
import Linkedin from "../Images/linkedin.png"

export default function Main() {
    return(
        <main className="main">
            <h1>Soubhagya Sethy</h1>
            <h3>Frontend Developer</h3>
            <a className="website" href="https://soubhagyasethy.netlify.app/" style={{display:"block"}}>
                soubhagyasethy.website
            </a>

            <div className="contact-button">
            <div className="email">
                <img className="email-img" src={Email} alt="Email"/>
                <a style={{textDecoration:"none", color:"black"}} href="/">Email</a>
            </div>

            <div className="linkedin">
               <img className="linkedin-img" src={Linkedin} alt="Linkedin"/>
               <a style={{textDecoration:"none", color:"white"}} href="/">Linkedin</a>
            </div>   
            </div>
            

            <h2 className="about">About</h2>
            <p className="paragraph">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <h2 className="intrests">Intrests</h2>
            <p className="paragraph">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </main>
    )
};