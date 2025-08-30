import { useState } from "react";
import { cn } from "@/lib/utils";

import { FileCode, Database, Server, GitBranch, Globe } from "lucide-react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiSass,
  SiBootstrap,
  SiTailwindcss,
  SiMui,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiGithub,
  SiRedux,
  SiPostman,
  SiSwagger,
} from "react-icons/si";

export const skills = [
  // Frontend
  { name: "HTML/CSS", category: "frontend", icon: <SiHtml5 /> },
  { name: "JavaScript", category: "frontend", icon: <SiJavascript /> },
  { name: "TypeScript", category: "frontend", icon: <SiTypescript /> },
  { name: "React.js", category: "frontend", icon: <SiReact /> },
  { name: "Next.js", category: "frontend", icon: <SiNextdotjs /> },
  { name: "SCSS", category: "frontend", icon: <SiSass /> },
  { name: "Bootstrap", category: "frontend", icon: <SiBootstrap /> },
  { name: "Tailwind CSS", category: "frontend", icon: <SiTailwindcss /> },
  { name: "MUI (Material UI)", category: "frontend", icon: <SiMui /> },

  // Backend
  { name: "Node.js", category: "backend", icon: <SiNodedotjs /> },
  { name: "Express.js", category: "backend", icon: <SiExpress /> },
  { name: "NestJS", category: "backend", icon: <SiNestjs /> },
  { name: "MongoDB", category: "backend", icon: <SiMongodb /> },

  // Tools
  { name: "Git/GitHub", category: "tools", icon: <SiGithub /> },
  {
    name: "Redux / Redux-Saga / Redux Toolkit",
    category: "tools",
    icon: <SiRedux />,
  },
  { name: "RESTful APIs", category: "tools", icon: <Globe /> },
  { name: "Postman", category: "tools", icon: <SiPostman /> },
  { name: "Swagger", category: "tools", icon: <SiSwagger /> },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex items-center justify-center overflow-x-auto w-full gap-5 mb-15 scrollbar-hide">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="border-1 border-pink-200 px-2 pt-10 sm:px-1 backdrop-blur-md pb-8 flex flex-col justify-center items-center gap-4 rounded-4xl  shadow-xs card-hover"
            >
              <div className="flex items-center justify-center mb-4">
                <span className="text-4xl text-primary mb-4">{skill.icon}</span>
              </div>
              <div className="text-left mb-4">
                <h3 className="font-semibold px-2 text-lg text-center">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
