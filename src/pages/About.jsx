import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { skills, experiences } from "../constants";
import CTA from '../components/CTA';

const About = () => {
    return ( 
    <section className="max-container">
        <h1 className="head-text">
            Hei, jeg er <span className="blue-gradient_text font-semibold drop-shadow-2xl">Damian</span>
        </h1>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>
                Hei! Jeg heter Damian og er en engasjert programvareutvikler fra Polen, bosatt i Norge. Med en sterk interesse for moderne webteknologier bygger jeg dynamiske og brukervennlige løsninger ved hjelp av React, Three.js og Tailwind CSS. Jeg er skaperen av Jobbleder.no, et digitalt verktøy for håndverkere som gjør det enkelt å lage fakturaer, timelister og tilbud.
            </p>
            <p>
                Som frilanser kombinerer jeg teknisk presisjon med kreativ design for å levere prosjekter som både ser bra ut og fungerer sømløst. Jeg liker å lære nye ting og utvikle meg kontinuerlig – og jeg elsker å se ideer bli til virkelighet gjennom kode.
            </p>
        </div>
        <div className="py-10 flex flex-col">
            <h3 className="subhead-text">
                My skills
            </h3>
            <div className="mt-16 flex flex-wrap gap-12">
                {
                    skills.map((skill) => (
                        <div className="block-container w-20 h-20">
                            <div className="btn-back rounded-xl"/>
                            <div className="btn-front rounded-xl flex justify-center items-center">
                                <img 
                                    src={skill.imageUrl}
                                    alt={skill.name}
                                    className="w-1/2 h-1/2 object-contain"
                                />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className="py-16">
            <h3 className="subhead-text"></h3>
            <div className="mt-5 flex flex-col gap-3 text-slate-500">
                <p>
                    Gjennom årene har jeg opparbeidet meg verdifull erfaring både som frilanser og som utvikler i egne prosjekter. Jeg har jobbet med alt fra enkle nettsider til mer komplekse webapplikasjoner, og har fått praktisk innsikt i hele utviklingsprosessen – fra idé og design til ferdig løsning.
                </p>
                <p>
                    I prosjektene mine har jeg brukt teknologier som React, Next.js, Node.js og Three.js, og jeg er vant til å jobbe både selvstendig og i samarbeid med andre. Denne erfaringen har lært meg å finne effektive løsninger, tenke brukervennlig og holde høy kvalitet i arbeidet mitt.
                </p>
            </div>
            <div className="mt-12 flex">
                <VerticalTimeline>
                    {experiences.map((experience) => (
                        <VerticalTimelineElement
                            key={experience.company_name}
                            date={experience.date}
                            icon={
                                <div className='flex justify-center items-center w-full h-full'>
                                    <img 
                                    src={experience.icon}
                                    alt={experience.company_name}
                                    className='w-[60%] h-[60%] object-contain'
                                     />
                                </div>
                            }
                            iconStyle={{background: '#FFF'}}
                            contentStyle={{
                                borderBottom: '8px',
                                borderStyle: 'solid',
                                borderBottomColor: experience.iconBg,
                                boxShadow: 'none'
                            }}
                        >
                            <div>
                                <h3 className='text-black text-xl font-poppins font-semibold'>{experience.title}</h3>
                                <p className='text-black-500 font-medium font-base' style={{margin: 0}}>{experience.company_name}</p>
                                <ul className='my-5 list-disc ml-5 space-y-2'>
                                    {
                                        experience.points.map((point, index) => (
                                            <li key={'experience-point-'+index} className='text-blac-500/50 font-normal pl-1'>{point}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </div>
        <CTA/>
    </section> 
    );
}
 
export default About;