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
import soloDanceImage from "@/assets/solo-dance.png";
import dualDanceImage from "@/assets/dual-dance.png";
import groupDanceImage from "@/assets/group-dance.png";
import rangoliImage from "@/assets/rangoli-img.png";
import mehandiImage from "@/assets/mehandi-img.png";
import cookwithoutfireImage from "@/assets/cwf-img3.png";
import treasurehuntImage from "@/assets/treasure-hunting.png";
import craftworkImage from "@/assets/craft-work.png";
import instrumentalImage from "@/assets/instrumental-img.png";
import uniquetalentImage from "@/assets/unique-talent2.png";
import photographyImage from "@/assets/photography-img.png";
import carvingImage from "@/assets/carving-img.png";

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
    category: "Team",
  },
  {
    name: "Solo Dance",
    icon: Sparkles,
    image: soloDanceImage,
    category: "Solo",
    imageClassName: "object-top",
  },
  {
    name: "Dual Dance",
    icon: Music,
    image: dualDanceImage,
    category: "Duo",
    imageClassName: "object-top"
  },
  {
    name: "Group Dance",
    icon: Users,
    image: groupDanceImage,
    category: "Team",
    imageClassName: "object-top",
  },
  {
    name: "Instrumental",
    icon: Guitar,
    image: instrumentalImage,
    category: "Solo",
    imageClassName: "object-cover scale-100"
  },
  {
    name: "Unique Talent",
    icon: Trophy,
    image: uniquetalentImage,
    category: "Solo",
    imageClassName: "object-top w-full h-full scale-300"
  },
  {
    name: "Rangoli",
    icon: Palette,
    image: rangoliImage,
    category: "Team",
    imageClassName: "object-cover w-full h-full scale-99",
  },
  {
    name: "Mehandi",
    icon: Hand,
    image: mehandiImage,
    category: "Solo or Duo",
    imageClassName: "object-cover w-full h-full scale-99"
  },
  {
    name: "Photography",
    icon: Camera,
    image: photographyImage,
    category: "Solo",
    imageClassName:"object-top w-full h-full scale-110"
  },
  {
    name: "Carving",
    icon: Scissors,
    image: carvingImage,
    category: "Solo",
    imageClassName:"object-cover w-full h-full scale-300"
  },
  {
    name: "Cook Without Fire",
    icon: Utensils,
    image: cookwithoutfireImage,
    category: "Team",
    imageClassName: "object-top scale-100"
  },
  {
    name: "Treasure Hunt",
    icon: Compass,
    image: treasurehuntImage,
    category: "Team",
    imageClassName: "object-top scale-100"
  },
  {
    name: "Craft Work",
    icon: Scissors,
    image: craftworkImage,
    category: "Team",
    imageClassName: "object-cover scale-99"
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