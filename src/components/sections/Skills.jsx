import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaTools,
} from "react-icons/fa";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaGithub,
  FaPython,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiSupabase,
  SiVercel,
  SiFigma,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend",
    icon: <FaLaptopCode />,
    skills: [
  { icon: <FaReact color="#61DAFB" />, name: "React" },
  { icon: <SiJavascript color="#F7DF1E" />, name: "JavaScript" },
  { icon: <SiTailwindcss color="#06B6D4" />, name: "Tailwind CSS" },
  { icon: <FaHtml5 color="#E34F26" />, name: "HTML5" },
  { icon: <FaCss3Alt color="#1572B6" />, name: "CSS3" },
],
  },

  {
    title: "Backend",
    icon: <FaServer />,
    skills: [
  { icon: <FaNodeJs color="#339933" />, name: "Node.js" },
  { icon: <SiExpress color="#ffffff" />, name: "Express.js" },
  { icon: <FaPython color="#3776AB" />, name: "Python" },
],
  },

  {
    title: "Database",
    icon: <FaDatabase />,
    skills: [
  { icon: <SiMongodb color="#47A248" />, name: "MongoDB" },
  { icon: <SiMysql color="#4479A1" />, name: "MySQL" },
  { icon: <SiSupabase color="#3ECF8E" />, name: "Supabase" },
],
  },

  {
    title: "Tools",
    icon: <FaTools />,
    skills: [
  { icon: <FaGitAlt color="#F05032" />, name: "Git" },
  { icon: <FaGithub color="#ffffff" />, name: "GitHub" },
  { icon: <FaDocker color="#2496ED" />, name: "Docker" },
  { icon: <SiPostman color="#FF6C37" />, name: "Postman" },
  { icon: <SiVercel color="#ffffff" />, name: "Vercel" },
  { icon: <SiFigma color="#F24E1E" />, name: "Figma" },
],
  },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">

      <div className="section-title">
        <p>MY SKILLS</p>
        <h2>{"02 / SKILLS"}</h2>
        <p className="section-subtitle">
          Technologies I use to build modern software.
        </p>
      </div>

      <div className="skills-grid">

        {skillGroups.map((group) => (

          <div className="skill-card" key={group.title}>

            <div className="skill-header">
              <span>{group.icon}</span>
              <h3>{group.title}</h3>
            </div>

            <div className="skill-list">

              {group.skills.map((skill) => (

                <div className="skill-item" key={skill.name}>
                  <span className="skill-icon">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}