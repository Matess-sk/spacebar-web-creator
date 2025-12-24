import { Button } from './ui/button';

const Menu = () => {
  const drinks = [
    {
      name: 'Nebula Negroni',
      description: 'Gin, Campari, sladký vermut, kouřový efekt',
      price: '12€',
      tag: 'Bestseller',
    },
    {
      name: 'Galactic Margarita',
      description: 'Tequila, triple sec, limetka, modrý curaçao',
      price: '11€',
      tag: 'Nové',
    },
    {
      name: 'Black Hole',
      description: 'Vodka, Kahlúa, espresso, aktivní uhlí',
      price: '13€',
      tag: 'Signature',
    },
    {
      name: 'Stellar Spritz',
      description: 'Prosecco, Aperol, sodovka, hvězdný prach',
      price: '10€',
      tag: null,
    },
    {
      name: 'Cosmic Colada',
      description: 'Rum, kokosový krém, ananas, svítící LED kostka',
      price: '14€',
      tag: 'Populární',
    },
    {
      name: 'Supernova Sour',
      description: 'Bourbon, citrón, vaječný bílek, třpytivý sirup',
      price: '12€',
      tag: null,
    },
  ];

  return (
    <section id="menu" className="relative py-24 bg-space">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-secondary/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block font-display text-sm uppercase tracking-widest text-primary mb-4">
            Menu
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Signature <span className="text-glow">koktaily</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Každý nápoj je umeleckým dielom, vytvorený našimi barmamni s láskou k detailom.
          </p>
        </div>

        {/* Drinks grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {drinks.map((drink, index) => (
            <div
              key={drink.name}
              className="group relative p-6 rounded-2xl bg-card/30 border border-border/30 backdrop-blur-sm hover:bg-card/50 hover:border-primary/30 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Tag */}
              {drink.tag && (
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-display uppercase tracking-wider bg-primary/20 text-primary border border-primary/30">
                  {drink.tag}
                </span>
              )}

              {/* Content */}
              <div className="mb-4">
                <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {drink.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {drink.description}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl font-bold text-primary">
                  {drink.price}
                </span>
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="text-primary text-lg">+</span>
                </div>
              </div>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Zobraziť celé menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
