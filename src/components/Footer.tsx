const Footer = () => {
  return (
    <footer className="relative py-12 bg-background border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground text-sm">S</span>
            </div>
            <span className="font-display text-lg font-bold">SPACEBAR</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Ochrana súkromia
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Obchodné podmienky
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2024 SPACEBAR. Všetky práva vyhradené.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
