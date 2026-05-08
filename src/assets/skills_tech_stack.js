import { FaProjectDiagram, FaUnity, FaRandom, FaTasks, FaUserFriends, FaJs, FaPython, FaJava, FaHtml5, FaAngular, FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt, FaGithub, FaGitlab, FaVial } from "react-icons/fa";
import { FaCss3Alt, FaPuzzlePiece, FaComments } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BsTypescript } from "react-icons/bs";
import { PiFileCSharpFill } from "react-icons/pi";
import { SiDotnet, SiExpress, SiAndroidstudio, SiNeo4J, SiPostman, SiBlender } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { BiLogoPostgresql, BiCodeAlt } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import RestApiIcon from "./rest-api-icon.svg?react";
import MicroIcon from "./microservice-icon.svg?react";
import CICD from "./ci-cd.svg?react";
import X from "./xunit.svg?react";

export const mySkills = {
  en:[
        /*{
            id: 1,
            name: "Languages",
            items: [
                { label: "JavaScript", icon: FaJs },
                { label: "TypeScript", icon: BsTypescript },
                { label: "C#", icon: PiFileCSharpFill },
                { label: "Python", icon: FaPython },
                { label: "Java", icon: FaJava  }
            ]
        },*/
        {
            id: 2,
            name: "Front End",
            items: [
                { label: "HTML5", icon: FaHtml5 },
                { label: "CSS3", icon: FaCss3Alt },
                { label: "JavaScript", icon: FaJs },
                { label: "TypeScript", icon: BsTypescript },
                { label: "Tailwind", icon: RiTailwindCssFill },
                { label: "React", icon: FaReact },
                { label: "Next.js", icon: RiNextjsFill },
                { label: "Angular", icon: FaAngular }
            ]
        },
        {
            id: 3,
            name: "Back End & Database",
            items: [
                { label: "C#", icon: PiFileCSharpFill },
                { label: ".NET", icon: SiDotnet },
                { label: "Node.js", icon: FaNodeJs },
                { label: "REST APIs", icon: RestApiIcon},
                { label: "SQL Server", icon: DiMsqlServer },
                { label: "MySQL", icon: GrMysql },
                { label: "PostgreSQL", icon: BiLogoPostgresql },
                { label: "Neo4j", icon: SiNeo4J}
            ]
        },
        {
            id: 4,
            name: "Mobile",
            items: [
                { label: "Android", icon: SiAndroidstudio },
                { label: "Java", icon: FaJava  }
            ]
        },
        {
            id: 5,
            //name: "DevOps & Cloud",
            name: "DevOps",
            items: [
                { label: "Docker", icon: FaDocker },
                //{ label: "AWS", icon: FaAws },
                { label: "CI/CD", icon: CICD },
                { label: "Git", icon: FaGitAlt},
                { label: "GitHub", icon: FaGithub},
                { label: "GitLab", icon: FaGitlab}
            ]
        },
        {
            id: 7,
            name: "Testing",
            items: [
                /*{ label: "Postman", icon: SiPostman },*/
                { label: "API Testing", icon: BiCodeAlt },
                //{ label: "xUnit", icon: X },
                { label: "Unit Testing", icon: FaVial },
                { label: "Integration Testing", icon: FaProjectDiagram }
            ]
        },
        {
            id: 8,
            name: "Soft Skills",
            items: [
                { label: "Problem solving", icon: FaPuzzlePiece },
                { label: "Team collaboration", icon: FaUserFriends },
                { label: "Agile / Scrum", icon: FaTasks },
                /*{ label: "Communication", icon: FaComments},*/
                { label: "Adaptability", icon: FaRandom}
            ]
        },
        /*{
            id: 9,
            name: "Other tools",
            items: [
                { label: "Blender", icon: SiBlender },
                { label: "Unity", icon: FaUnity }
            ]
        },*/
    ],
    es: [
        
        /*{
            id: 1,
            name: "Languages",
            items: [
                { label: "JavaScript", icon: FaJs },
                { label: "TypeScript", icon: BsTypescript },
                { label: "C#", icon: PiFileCSharpFill },
                { label: "Python", icon: FaPython },
                { label: "Java", icon: FaJava  }
            ]
        },*/
        {
            id: 2,
            name: "Front End",
            items: [
                { label: "HTML5", icon: FaHtml5 },
                { label: "CSS3", icon: FaCss3Alt },
                { label: "JavaScript", icon: FaJs },
                { label: "TypeScript", icon: BsTypescript },
                { label: "Tailwind", icon: RiTailwindCssFill },
                { label: "React", icon: FaReact },
                { label: "Next.js", icon: RiNextjsFill },
                { label: "Angular", icon: FaAngular }
            ]
        },
        {
            id: 3,
            name: "Back End & Bases de Datos",
            items: [
                { label: "C#", icon: PiFileCSharpFill },
                { label: ".NET", icon: SiDotnet },
                { label: "Node.js", icon: FaNodeJs },
                { label: "REST APIs", icon: RestApiIcon},
                { label: "SQL Server", icon: DiMsqlServer },
                { label: "MySQL", icon: GrMysql },
                { label: "PostgreSQL", icon: BiLogoPostgresql },
                { label: "Neo4j", icon: SiNeo4J}
            ]
        },
        {
            id: 4,
            name: "Móvil",
            items: [
                { label: "Android", icon: SiAndroidstudio },
                { label: "Java", icon: FaJava  }
            ]
        },
        {
            id: 5,
            //name: "DevOps & Cloud",
            name: "DevOps",
            items: [
                { label: "Docker", icon: FaDocker },
                //{ label: "AWS", icon: FaAws },
                { label: "CI/CD", icon: CICD },
                { label: "Git", icon: FaGitAlt},
                { label: "GitHub", icon: FaGithub},
                { label: "GitLab", icon: FaGitlab}
            ]
        },
        {
            id: 7,
            name: "Testing",
            items: [
                /*{ label: "Postman", icon: SiPostman },*/
                { label: "API Testing", icon: BiCodeAlt },
                //{ label: "xUnit", icon: X },
                { label: "Unit Testing", icon: FaVial },
                { label: "Integration Testing", icon: FaProjectDiagram }
            ]
        },
        {
            id: 8,
            name: "Habilidades Blandas",
            items: [
                { label: "Problem solving", icon: FaPuzzlePiece },
                { label: "Team collaboration", icon: FaUserFriends },
                { label: "Agile / Scrum", icon: FaTasks },
                /*{ label: "Communication", icon: FaComments},*/
                { label: "Adaptability", icon: FaRandom}
            ]
        },
        /*{
            id: 9,
            name: "Other tools",
            items: [
                { label: "Blender", icon: SiBlender },
                { label: "Unity", icon: FaUnity }
            ]
        },*/
    ]
};