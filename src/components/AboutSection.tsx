import { Heart, Star, Users, Sparkles } from "lucide-react";
import posterImg from "@/assets/poster img.png";

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
    <section 
      id="about" 
      className="py-24 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${posterImg})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white">
            About <span className="text-gradient">Shristi'26</span>
          </h2>
          <p className="text-lg text-white/95 leading-relaxed">
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
              className="group p-6 rounded-2xl bg-black/30 backdrop-blur-sm border border-white/10 hover:bg-black/40 hover:border-white/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-white/90">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Decorative floral accent */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-white/40" />
            <Sparkles className="w-5 h-5 text-white/80 animate-pulse-soft" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-white/40" />
          </div>
        </div>
      </div>
    </section>
  );
};
