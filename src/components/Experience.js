import React, { useRef } from "react";
import {motion, useScroll} from "framer-motion"
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <LiIcon />
          <div>
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>{" "}
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </div>
    </li>
  );
};

const Experience = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
          <div ref={ref} className="w-[75%] mx-auto relative">
              <motion.div style={{scaleY: scrollYProgress}} className="absolute left-8 top-0 w-[4px] h-full bg-dark origin-top"/>
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Software Engineer"
            company="Decagon"
            time="2022-Present"
            companyLink="https://decagonhq.com/"
            address="Ajah-Lekki, Lagos, NG"
            work="As a Software Engineer at Decagon, I assumed responsibilities in both frontend and backend capacities across a range of projects, encompassing web and mobile applications. Leveraging my proficiencies in TypeScript, JavaScript, React, and diverse technologies, I diligently engineered robust solutions. Working in close collaboration with multidisciplinary teams, I orchestrated the design, implementation, and integration of efficient databases. My adaptability, technical prowess, and unwavering commitment to code quality enabled the seamless delivery of projects, consistently meeting high standards of functionality and performance."
          />
          <Details
            position="Frontend web developer"
            company="Bridgewaters Foundation"
            time="April,2023-June,2023"
            companyLink="https://bgwfoundation.org/"
            address="Idi Mangoro 101233, Lagos, NG"
            work="Volunteered in this Non Profit Organization to provide an excellent user friendly experience * Collaborated with cross-functional teams to develop and maintain user-facing components of a web application. * Built responsive web pages using NextJS, ReactJS, TailwindCSS, and JavaScript, ensuring visual appeal and accessibility.
          * Worked with the backend team to integrate APIs and improve the user experience."
          />
          <Details
            position="Junior Backend Engineer"
            company="IGate"
            time="April,2023-Present"
            companyLink="https://www.linkedin.com/company/igate-technologies/"
            address="Bridgewater, New Jersey, United States."
            work="Collaborated closely with designers to ensure design implementation met design standards, resulting in a 90% increase in design accuracy and client satisfaction. Identified design and development challenges and implemented solutions by writing clean, hand-coded React, Typescript and NodeJS codes to create visually appealing, interactive user interfaces, leading to a 20% increase in user engagement."
          />
          <Details
            position="Associate Control Systems Engineer"
            company="Chaad Engineering and Technical Services LTD"
            time="March,2021-May,2022"
            companyLink="https://www.linkedin.com/company/chaad-engineering-and-technical-services/"
            address="PortHarcourt, Rivers State, NG"
            work="In my role as an Automation and Control Systems Engineer I collaborated closely with multidisciplinary teams, I spearheaded the optimization of network infrastructure to ensure seamless communication and data transmission across diverse operational sites.  By optimizing networks, integrating hardware and software, and adeptly troubleshooting, I improved productivity, safety, and operational efficiency. My unwavering attention to detail and adept problem-solving capabilities enabled the successful execution of projects within stringent timelines."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
