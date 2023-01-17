import Email from "../Images/Mail.png"
import Linkedin from "../Images/linkedin.png"

export default function Main() {
    return(
        <main className="main">
            <h1>Soubhagya Sethy</h1>
            <h3>Front-End Developer</h3>
            <a className="website" href="https://soubhagyasethy.netlify.app/" target="_blank" style={{display:"block"}}>
                soubhagyasethy.website
            </a>

            <div style={{display:"block"}}>
                <a href="mailto:ssethy017@gmail.com" target="_blank">
                    <img className="contact-img" src={Email} alt="Email"/>
                    Email
                </a>
                <a href="https://www.linkedin.com/in/soubhagya-sethy-3b5404182/" target="_blank">
                    <img className="contact-img" src={Linkedin} alt="Linkedin"/>
                    Linkedin
                </a>
            </div>

            <h2>About</h2>
            <p>About section paragraph</p>
            <h2>Intrests</h2>
            <p>Intrests section paragraph</p>
        </main>
    )
};