import PageHero from "../components/pageHero/PageHero";
import ContactDetail from "../components/contactDetail/ContactDetail";
import ContactForm from "../components/contactForm/ContactForm";
import NewContact from "../components/newContact/NewContact";
import CompanyLocationMap from "../components/companyLocationMap/CompanyLocationMap";

function Contact() {
  return (
    <main className="contact">
      <PageHero imgSrc="/images/contact-banner-01.png" pageName="contact" />
      <NewContact />
      <CompanyLocationMap />
    </main>
  );
}

export default Contact;
