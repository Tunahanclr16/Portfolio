import Hero from "../components/Hero.jsx/Hero";
import Projects from "../components/ProjectShow/Projects";
import ContactForm from "../components/contact/ContactForm";
import Skills from "../components/skiils/Skiils";

export default function Home() {
  return (
    <div>
        <Hero/>
        <Skills/>
        <Projects/>
        <ContactForm/>
    </div>
  )
}
