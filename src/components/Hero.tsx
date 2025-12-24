import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-space overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border mb-8 animate-float">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Vitajte v novej dimenzii zábavy
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight">
            <span className="gradient-text">SPACE</span>
            <br />
            <span className="text-glow">BAR</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Kde sa stretáva kozmická atmosféra s prvotriednou zábavou. 
            Pripravte sa na cestu medzi hviezdami s našimi signature kokteilmi.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Objavte menu
            </Button>
            <Button variant="glass" size="xl">
              Virtuálna prehliadka
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              <ChevronDown size={32} />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-star rounded-full animate-twinkle opacity-60" />
      <div className="absolute top-40 left-32 w-2 h-2 bg-star rounded-full animate-twinkle opacity-40" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-40 right-40 w-3 h-3 bg-star rounded-full animate-twinkle opacity-50" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-60 left-20 w-2 h-2 bg-star rounded-full animate-twinkle opacity-70" style={{ animationDelay: '1.5s' }} />
    </section>
  );
};

export default Hero;
