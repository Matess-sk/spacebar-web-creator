import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { Button } from './ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: 'Adresa',
      value: 'Hvězdná 42, 110 00 Praha 1',
    },
    {
      icon: Clock,
      label: 'Otváracie hodiny',
      value: 'Št-So: 20:00 - 04:00',
    },
    {
      icon: Phone,
      label: 'Telefón',
      value: '+420 123 456 789',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@spacebar.sk',
    },
  ];

  return (
    <section id="contact" className="relative py-24 bg-space">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact info */}
          <div>
            <span className="inline-block font-display text-sm uppercase tracking-widest text-primary mb-4">
              Kontakt
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Nájdete nás <span className="text-glow-secondary">tu</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Rezervujte si miesto v našom vesmírnom bare a zažite nezabudnuteľnú noc.
            </p>

            {/* Contact items */}
            <div className="space-y-6 mb-10">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground uppercase tracking-wider">
                      {item.label}
                    </span>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Reservation form */}
          <div className="relative">
            <div className="p-8 rounded-3xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <h3 className="font-display text-2xl font-bold mb-6">Rezervácia</h3>

              <form className="space-y-5">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Meno a priezvisko
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                    placeholder="Ján Novák"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Dátum
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Čas
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all">
                      <option>20:00</option>
                      <option>21:00</option>
                      <option>22:00</option>
                      <option>23:00</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Počet osôb
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all">
                    <option>2 osoby</option>
                    <option>3-4 osoby</option>
                    <option>5-8 osôb</option>
                    <option>8+ osôb</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Poznámka
                  </label>
                  <textarea
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                    rows={3}
                    placeholder="Špeciálne požiadavky..."
                  />
                </div>

                <Button variant="hero" className="w-full" size="lg">
                  Odoslať rezerváciu
                </Button>
              </form>
            </div>

            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl -z-10 opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
