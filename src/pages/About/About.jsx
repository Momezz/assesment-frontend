import Information from '../../components/Information/Information';
import NavBar from '../../components/NavBar/NavBar';
import './styles.css';

const About = () => (
  <>
    <header>
      <NavBar />
    </header>
    <section className="about__information">
      <Information />
    </section>
  </>
);

export default About;
