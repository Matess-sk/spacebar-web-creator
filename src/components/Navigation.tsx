import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Domov', href: '#home' },
    { label: 'O nás', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="font-display font-bold text-primary-foreground text-lg">S</span>
            </div>
            <span className="font-display text-xl font-bold text-glow">SPACEBAR</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-display text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <Button variant="outline" size="sm">
              Rezervácia
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-display text-lg uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="outline" className="mt-2">
                Rezervácia
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
