import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface EventCardProps {
  name: string;
  icon: LucideIcon;
  image: string;
  category: string;
}

export const EventCard = ({ name, icon: Icon, image, category }: EventCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-serif text-xl font-semibold text-foreground">
            {name}
          </h3>
        </div>

        <Button
          className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/20 hover:border-primary transition-all duration-300"
          variant="outline"
        >
          Register
        </Button>
      </div>
    </div>
  );
};
