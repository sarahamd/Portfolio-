import { ArrowRight, ExternalLink, Github } from "lucide-react";
import RecipeImage from "../assets/RecipeImage.png";
import ChatAppImage from "../assets/chatImage.png";
import CaraImage from "../assets/caraImage.png";
import RealstateImage from "../assets/RealstateImage.png";
import HospitalImage from "../assets/HospitalImage.png";
const projects = [
  {
    id: 1,
    title: "Recipe App",
    description:
      "A web application where users can explore, search, and save recipes with authentication.",
    image: RecipeImage,
    tags: ["React", "Node.js", "MongoDB"],
    demoUrl: "https://recipe-app-react-five.vercel.app/", // Add real demo link if available
    githubUrl: "https://github.com/sarahamd/recipe-app-Reactjs", // Add your repo link
  },
  {
    id: 2,
    title: "Real Estate App",
    description:
      "A real estate platform for listing, filtering, and managing properties with user dashboards.",
    image: RealstateImage,
    tags: ["Angular", "Nest.js", "PostgreSQL"],
    demoUrl: "https://angular17-real-state-project.vercel.app/home",
    githubUrl: "https://github.com/sarahamd/RealState-Angular-17",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce app with product catalog, authentication, and payment integration.",
    image: CaraImage,
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "https://cara-front-end.vercel.app/",
    githubUrl: "https://github.com/sarahamd/Full-stack-E-commerce-React-Nest-",
  },
  {
    id: 4,
    title: "Chat Application",
    description:
      "Real-time chat app with socket-based messaging and secure authentication.",
    image: ChatAppImage,
    tags: ["React", "Express", "Socket.io"],
    demoUrl: "https://chat-appwithsocket-io-odn8.onrender.com/",
    githubUrl: "https://github.com/sarahamd/chat-app",
  },
  {
    id: 5,
    title: "Healthcare System",
    description:
      "A healthcare management system with patient records, scheduling, and secure authentication.",
    image: HospitalImage,
    tags: ["React", "Node.js", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I built during my full stack development journey. 
          Each one reflects my focus on performance, usability, and modern web technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group border-3  bg-card rounded-xl overflow-hidden shadow-xs card-hover"
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full transition-transform duration-500 group-hover:scale-110 object-fill"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-center items-center w-full overflow-x-auto gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/sarahamd"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
