import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Projects from '@/components/Projects/Projects';
import TechStack from '@/components/TechStack/TechStack';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
