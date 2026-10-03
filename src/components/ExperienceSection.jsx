import SectionHeading from "./SectionHeading";
import TimelineItem from "./TimelineItem";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading
        title="Experience"
        subtitle="Where I have learned and worked."
      />

      <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem
          period="2024 – Present"
          title="BS Information Technology"
          place="Cebu Institute of Technology – University"
          description="Taking up programming, web development, databases, and software development."
        />

        <TimelineItem
          period="2025"
          title="Student Developer"
          place="School Projects"
          description="Worked on programming and web development projects as part of my studies."
        />

        <TimelineItem
          period="2022 – 2024"
          title="Senior High School, STEM Strand"
          place="MSU-IIT Integrated Developmental School"
          description="First tackled programming and coded in C which sparked my interest
          in coding and solidified my logical thinking skills. Built an octal-binary-hexadecimal-decimal 
          converter project."
        />
      </ol>
    </section>
  );
}

export default ExperienceSection
