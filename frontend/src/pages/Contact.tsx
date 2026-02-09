import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";
import ContactSidebar from "../components/contact/ContactSidebar";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <ContactHero />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
        <div className="lg:col-span-5">
          <ContactSidebar />
        </div>
      </div>
    </div>
  );
}
