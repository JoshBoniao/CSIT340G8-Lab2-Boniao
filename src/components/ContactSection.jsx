import SectionHeading from "./SectionHeading";
import ContactLink from "./ContactLink";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading title="Contact" subtitle="Say hi." />

      <ul className="mt-8 space-y-3">
        <ContactLink
          label="Email"
          href="mailto:your@email.com"
          text="joshboniaoxd@gmail.com"
        />

        <ContactLink
          label="GitHub"
          href="https://github.com/JoshBoniao"
          text="github.com/JoshBoniao"
        />

        <ContactLink
          label="Instagramn"
          href="#"
          text="https://www.instagram.com/dejoshvu/"
        />
      </ul>
    </section>
  );
}

export default ContactSection
