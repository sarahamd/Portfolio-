import { Briefcase, Code, User } from "lucide-react";
import React from "react";

const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Frontend & MERN Stack Developer
            </h3>

            <p className="text-muted-foreground  ">
              With 1.5 years of hands-on experience in web development, I
              specialize in building responsive, user-friendly, and scalable web
              applications using React.js, Next.js, and modern tools.
            </p>

            <p className="text-muted-foreground ">
              Currently expanding my expertise into the full MERN stack, I’ve
              worked on dashboards, e-commerce platforms, and interactive
              features that blend performance with clean UI/UX design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center items-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1_bz6ss9PlN7bVhO1CidTL4vSu4Sn6o6G/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blend-color-burn flex justify-center items-center rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground ">
                    Building dynamic websites and dashboards with React.js,
                    Next.js, and modern frontend practices.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend & APIs</h4>
                  <p className="text-muted-foreground">
                    Developing RESTful APIs and handling databases with Node.js
                    ,express js , MongoDB and Nestjs.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Practical Projects</h4>
                  <p className="text-muted-foreground ">
                    Experience working on e-commerce, dashboards, and real-world
                    web apps, following agile and collaborative workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
