import Starfield from '@/components/Starfield';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Starfield />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Menu />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
