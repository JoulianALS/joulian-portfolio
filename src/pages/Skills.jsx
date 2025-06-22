import React from "react";
import BackgroundScene from "../three/BackgroundScene";

const skills = {
  "Programmiersprachen": [
    "HTML", "CSS", "JavaScript", "C#", "Python", "PHP"
  ],
  "Frameworks": [
    "React", "Next.js", "Vue.js", "Blazor", ".NET", "WPF"
  ],
  "Libraries": [
    "Bootstrap", "Three.js", "TKinter"
  ],
  "Game Engines": [
    "Unity", "Unreal Engine"
  ],
  "3D & Design": [
    "Blender", "Adobe Photoshop", "Adobe Lightroom", "Adobe Illustrator", "Adobe Premiere"
  ],
  "Datenbanken": [
    "MySQL", "SQLite", "PL/SQL"
  ],
  "Systeme & Scripting": [
    "Linux", "PowerShell", "Bash"
  ],
  "Netzwerk & Security": [
    "Nmap", "Metasploit", "Wireshark", "Cisco Packet Tracer"
  ],
  "Tools & Software": [
    "Visual Studio", "VS Code", "Node.js"
  ]
};

function Skills() {
  return (
    <div className="contact-container">
      {/* Background */}
      <BackgroundScene/>
      
      <h1>Meine Skills</h1>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <div className="skills-category" key={category}>
            <h2 className="skills-category-title">{category}</h2>
            <ul className="skills-list">
              {items.map(skill => (
                <li className="skills-list-item" key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
