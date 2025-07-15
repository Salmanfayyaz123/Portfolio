import Navmenu from '../Components/Navmenu'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Experience from '../Components/Experience'
import Work from '../Components/Work'
import Testimonial from '../Components/Testimonial'
import Contactme from '../Components/Contactme'
import Footer from '../Components/Footer'

const Home = ({ darkMode, setDarkMode }) => {
  return (
    <div>
      <Navmenu darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="experience"><Experience /></section>

      {/* <section id="work"><Work /></section> */}

      {/* <section id="testimonials"><Testimonial /></section> */}

      <section id="contact"><Contactme /></section>
      <Footer />
    </div>
  )
}

export default Home;
