import Window from "../UI/Window";
import { aboutMe } from "../../assets/projects";

import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaLinux,
  FaGithub,
  FaPython,
} from "react-icons/fa";

import { SiAngular, SiMysql } from "react-icons/si";

function AboutWindow({ onClose }) {
  const toolset = [
    { name: "JavaScript", icon: FaJs },
    { name: "React", icon: FaReact },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Python", icon: FaPython },
    { name: "SQL", icon: SiMysql },
    { name: "GitHub", icon: FaGithub },
    { name: "Linux", icon: FaLinux },
    { name: "Angular", icon: SiAngular },
  ];

  return (
    <Window title="About Me" onClose={onClose} style={{ width: 580 }}>
      <p>{aboutMe.info}</p>

      <h2 className="mt-6 mb-3 text-xl font-semibold border-b border-gray-300 pb-2">
        My Toolset
      </h2>

      <div className="toolset">
        {toolset.map((tool) => {
          const Icon = tool.icon;

          return (
            <div key={tool.name} className="tool">
              <Icon size={28} />
              <span>{tool.name}</span>
            </div>
          );
        })}
      </div>
    </Window>
  );
}

export default AboutWindow;
