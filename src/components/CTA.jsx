import { Link } from "react-router-dom";

const CTA = () => {
    return ( 
        <section className="cta">
            <p className="cta-text">Har du et prosjekt i bakhodet? <br className="sm:block hidden" />
                La oss bygge noe sammen!
            </p>
            <Link to="/contact" className="btn">
                Kontakt
            </Link>
        </section>
     );
}
 
export default CTA;