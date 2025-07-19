import { Link } from "react-router-dom";
import arrow from '../assets/icons/arrow.svg';


const InfoBox = ({text, link, btnText}) => (
    <div className="info-box neo-brutalism-blue">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hei, Jeg er <span className="font-semibold">Damian</span><br/>Software Engineer fra Polen.
        </h1>
    ),
    2: (
        <InfoBox 
        text='Frilanser, webdesigner og utvikler av Joobleder, et faktureringsprogram for håndverkere med funksjoner for dokumentoppretting med timelister og tilbud.'
        link='/about'
        btnText={'Les mer'}
        />
    ),
    3: (
        <InfoBox 
        text="Utforsk mine tidligere prosjekter og få et innblikk i hva jeg har bygget med moderne webteknologier."
        link="/projects"
        btnText="Se mitt portefølje"
        />
    ),
    4: (
        <InfoBox 
        text="Har du spørsmål eller ønsker å samarbeide? Ta gjerne kontakt med meg!"
        link="/contact"
        btnText="Skriv til meg"
        />
    ),
}



const HomeInfo = ({currentStage}) => {
    return renderContent[currentStage] || null;
}
 
export default HomeInfo;