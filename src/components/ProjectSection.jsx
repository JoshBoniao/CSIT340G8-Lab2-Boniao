import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading title="Projects" subtitle="Things I have built or contributed." />

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="Portfolio Website - Solo"
          description="A personal portfolio website built with React."
          tech="React · Tailwind CSS"
          link="https://github.com/JoshBoniao/CSIT340G8-Lab2-Boniao.git"
        />

        <ProjectCard
          year="2025"
          title="Eternal Quest - Group"
          description="A game project centered around OOP Concepts"
          tech="Java"
          link="https://github.com/eiftaboada/OopConcept"
        />

        <ProjectCard
          year="2024"
          title="Web Development Portfolio Project - Solo"
          description="An Html, CSS, and  JavaScript portfolio project"
          tech="HTML · CSS · JavaScript"
          link="https://github.com/JoshBoniao/Web-Development-Portfolio-Project"
        />

        <ProjectCard
          year="2026"
          title="grasp - Solo"
          description="A flashcard mobile application that's free from paywall."
          tech="Kotlin"
          link="#"
        />
      </div>
    </section>
  );
}

export default ProjectSection
