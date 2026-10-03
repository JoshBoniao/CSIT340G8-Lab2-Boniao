import SectionHeading from "./SectionHeading";
import SkillTag from "./SkillTag";

const SkillSection = () => {
  return (
    <section
      id="skills"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading title="Skills" subtitle="What I work with." />

      <div className="mt-8 grid gap-8 sm:grid-cols-3">
        <div>
          <h3 className="text-sm font-medium text-stone-500">Languages</h3>

          <div className="mt-3 flex flex-wrap gap-2">
            <SkillTag name="HTML" />
            <SkillTag name="CSS" />
            <SkillTag name="JavaScript" />
            <SkillTag name="Java" />
            <SkillTag name="C" />
            <SkillTag name="Kotlin" />
            <SkillTag name="Python" />
            <SkillTag name="SQL" />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-stone-500">Frameworks</h3>

          <div className="mt-3 flex flex-wrap gap-2">
            <SkillTag name="React" />
            <SkillTag name="Tailwind CSS" />
            <SkillTag name="Bootstrap" />
            <SkillTag name="SpringBoot" />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-stone-500">Tools</h3>

          <div className="mt-3 flex flex-wrap gap-2">
            <SkillTag name="Git" />
            <SkillTag name="GitHub" />
            <SkillTag name="IntelliJ" />
            <SkillTag name="VS Code" />
            <SkillTag name="Android Studio" />
            <SkillTag name="Geany" />
            <SkillTag name="Sublime text" />
            <SkillTag name="MySQL" />
            <SkillTag name="PostgreSQL" />
            <SkillTag name="Figma" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillSection
