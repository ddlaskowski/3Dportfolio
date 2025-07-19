import { lc, jobbleder, comangle, kl } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
    title: "Junior Back-End Developer",
    company_name: "ComAngle Entertainment",
    icon: comangle, // Sett inn din egen ikonreferanse
    iconBg: "#005b96",
    date: "Mars 2014 – Juni 2014",
    points: [
      "Utviklet et RESTful API ved hjelp av Node.js, Express og MongoDB.",
      "Deployerte applikasjoner til AWS, inkludert bruk av S3 og EC2.",
      "Arbeidet i et lite team med fokus på skalérbare og pålitelige tjenester.",
    ],
  },
  {
    title: "Fullstack utvikler – Booking System",
    company_name: "Laskowscy Booking System",
    icon: kl, // Sett inn din egen ikonreferanse
    iconBg: "#fde2e4",
    date: "2018",
    points: [
      "Bygget et webapplikasjon for hotellreservasjoner med React.js, Node.js og MongoDB.",
      "Implementerte e-postvarsler ved bestilling og kansellering.",
      "Hadde ansvar for både frontend og backend-utvikling.",
    ],
  },
  {
    title: "Frilans webutvikler",
    company_name: "Selvstendig",
    icon: lc, // Replace with your actual icon reference
    iconBg: "#ADD8E6",
    date: "2021 - Nåværende",
    points: [
      "Utvikler og designer moderne nettsider og applikasjoner med React, Tailwind CSS og Three.js.",
      "Jobber tett med kunder for å forstå behov og levere skreddersydde løsninger.",
      "Ansvarlig for både frontend og backend i små og mellomstore prosjekter.",
      "Fokuserer på ytelse, tilgjengelighet og god brukeropplevelse.",
    ],
  },
  {
    title: "Grunnlegger & Utvikler",
    company_name: "Jobbleder.no",
    icon: jobbleder, // Replace with your actual icon reference
    iconBg: "#fff3cd",
    date: "2023 - Nåværende",
    points: [
      "Bygget og lanserte et webverktøy for håndverkere med funksjoner for fakturering, timelister og tilbud.",
      "Utviklet med moderne teknologier som React, Next.js, Node.js og Tailwind CSS.",
      "Implementerte PDF-generering, brukerautentisering og betalingsstruktur (freemium-modell).",
      "Håndterer alt fra produktutvikling og markedsføring til vedlikehold og GDPR-samsvar.",
    ],
  },

];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/ddlaskowski',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ddlaskowski',
    }
];
export const projects = [
  {
    iconUrl: jobbleder, // Replace with actual icon or image reference
    theme: 'btn-back-yellow',
    name: 'Jobbleder.no',
    description: 'Et webbasert verktøy for håndverkere med funksjoner for fakturering, timelister og tilbud. Bygget med React, Next.js, Tailwind og Node.js.',
    link: 'https://jobbleder.no',
},
{
    iconUrl: lc, // Replace with actual icon or image reference
    theme: 'btn-back-blue',
    name: 'Laskowscy Booking System',
    description: 'Et reservasjons- og meldingssystem for hotell med e-postvarsling. Utviklet med React, Node.js og MongoDB.',
    link: 'https://kwatery-laskowscy.pl/', // Add GitHub or demo link if available
  },
];