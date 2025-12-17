import { Heart, Star, Users, Sparkles } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Empowerment",
    description: "Celebrating the strength and resilience of women",
  },
  {
    icon: Star,
    title: "Creativity",
    description: "Showcasing artistic talents and cultural expressions",
  },
  {
    icon: Users,
    title: "Unity",
    description: "Bringing together women from all walks of life",
  },
  {
    icon: Sparkles,
    title: "Talent",
    description: "A platform to shine and inspire others",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About <span className="text-gradient">Shristi'26</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Shristi'26 is a vibrant celebration of International Women's Day, organized by the 
            Women Development Cell. This cultural extravaganza brings together talented women 
            to showcase their creativity, express their artistry, and celebrate the spirit of 
            womanhood through various competitions and performances.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Decorative floral accent */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <Sparkles className="w-5 h-5 text-primary animate-pulse-soft" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </div>
      </div>
    </section>
  );
};
