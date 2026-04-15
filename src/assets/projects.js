import finalQuestionImg from "../assets/screenshot_the_final_question.jpg";
import kuarctechImg from "../assets/screenshot_map_kuarc.jpg";
import cometecImg from "../assets/screenshot_cometec.jpg";

export const projects = [
  {
    id: 1,
    title: "The Final Question",
    description: "Interactive narrative game with branching choices, exploring the fate of a civilization.",
    tech: ["React", "JavaScript"],
    demo: "https://final-question-interactive-text-gam.vercel.app/",
    image: finalQuestionImg
  },
  {
    id: 2,
    title: "ComeTec",
    description: "Website for math competitions for elementary and secondary school students.",
    tech: ["Angular", "Node.js", "MySQL"],
    demo: "https://www.cometec.cr/",
    image: cometecImg
  },
  {
    id: 3,
    title: "Kuarc",
    description: "Interactive map module using the Google Maps API for data visualization and analysis.",
    tech: ["Angular", "Node.js", "MySQL", "Neo4j"],
    demo: "https://kuarctech.com/kuarc/",
    image: kuarctechImg
  }
];

export const aboutMe = {
    info: `I am a full-stack developer living in Costa Rica.
    I enjoy solving problems and transforming design concepts into flawless websites.
    I am interested in cybersecurity, automation, and DevOps.
    When I am not coding, I am an avid reader.`
};