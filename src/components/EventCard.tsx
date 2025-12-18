import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface EventCardProps {
  name: string;
  icon: LucideIcon;
  image: string;
  category: string;
  imageClassName?: string;
}

export const EventCard = ({
  name,
  icon: Icon,
  image,
  category,
  imageClassName,
}: EventCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-secondary/30">
        <img
          src={image}
          alt={name}
          className={cn(
            "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
            imageClassName
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          </div>
          <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground line-clamp-1">{name}</h3>
        </div>

        <Button
          className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/20 hover:border-primary transition-all duration-300 text-sm sm:text-base"
          variant="outline"
        >
          Register
        </Button>
      </div>
    </div>
  );
};

