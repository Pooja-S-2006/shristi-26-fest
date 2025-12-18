import { EventCard } from "./EventCard";
import {
  Mic,
  Music,
  Palette,
  Camera,
  Utensils,
  Compass,
  Scissors,
  Hand,
  Guitar,
  Sparkles,
  Users,
  Trophy,
} from "lucide-react";
import soloSingingImage from "@/assets/solo-singing.png";
import groupSingingImage from "@/assets/group-singing.png";

const events = [
  {
    name: "Solo Singing",
    icon: Mic,
    image: soloSingingImage,
    category: "Solo",
    imageClassName: "object-top",
  },
  {
    name: "Group Singing",
    icon: Users,
    image: groupSingingImage,
    category: "Group",
  },
  {
    name: "Solo Dance",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=400&h=300&fit=crop",
    category: "Solo",
  },
  {
    name: "Dual Dance",
    icon: Music,
    image: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=400&h=300&fit=crop",
    category: "Duo",
  },
  {
    name: "Group Dance",
    icon: Users,
    image: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=400&h=300&fit=crop",
    category: "Group",
  },
  {
    name: "Instrumental",
    icon: Guitar,
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop",
    category: "Solo",
  },
  {
    name: "Unique Talent",
    icon: Trophy,
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400&h=300&fit=crop",
    category: "Solo",
  },
  {
    name: "Rangoli",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1605882174146-a464ce2fdfab?w=400&h=300&fit=crop",
    category: "Solo",
  },
  {
    name: "Mehandi",
    icon: Hand,
    image: "https://images.unsplash.com/photo-1595859703065-2259982784bb?w=400&h=300&fit=crop",
    category: "Solo",
  },
  {
    name: "Photography",
    icon: Camera,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop",
    category: "Solo",
  },
  {
    name: "Carving",
    icon: Scissors,
    image: "https://images.unsplash.com/photo-1559304787-e7b4a1c5c7a2?w=400&h=300&fit=crop",
    category: "Solo",
  },
  {
    name: "Cook Without Fire",
    icon: Utensils,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    category: "Solo",
  },
  {
    name: "Treasure Hunt",
    icon: Compass,
    image: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=400&h=300&fit=crop",
    category: "Team",
  },
  {
    name: "Craft Work",
    icon: Scissors,
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400&h=300&fit=crop",
    category: "Solo",
  },
];

export const EventsSection = () => {
  return (
    <section id="events" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-gradient">Events</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of competitions and showcase your talents. 
            From performing arts to creative crafts, there's something for everyone.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <div
              key={event.name}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <EventCard {...event} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
