import { Rocket, Star, Sparkles, Music } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Rocket,
      title: 'Kozmická atmosféra',
      description: 'Ponorte sa do jedinečného interiéru inšpirovaného vesmírom a galaxiami.',
    },
    {
      icon: Star,
      title: 'Signature koktaily',
      description: 'Vyskúšajte naše autorské miešané nápoje s kozmickými názvami.',
    },
    {
      icon: Sparkles,
      title: 'LED show',
      description: 'Zažite svetelné predstavenia synchronizované s hudbou.',
    },
    {
      icon: Music,
      title: 'Live DJ',
      description: 'Každý víkend vystúpenie top DJov s electronica a house hudbou.',
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-space">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block font-display text-sm uppercase tracking-widest text-primary mb-4">
            O nás
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Viac než len <span className="text-glow-secondary">bar</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            SPACEBAR je miesto, kde sa stretáva futuristický dizajn s nezabudnuteľnou atmosférou. 
            Od roku 2023 prinášame do mesta novú dimenziu nočného života.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '50+', label: 'Koktailov' },
            { value: '2k+', label: 'Spokojných hostí' },
            { value: '100+', label: 'Eventov' },
            { value: '24/7', label: 'Rezervácie' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
