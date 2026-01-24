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
  ForkKnife,
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
import posterImg from "@/assets/poster img.png";
import instrumentaluniqueImage from "@/assets/music-unique.png";
import fashionparadeImage from "@/assets/fashion-parade.png";
import carvingcookingImage from "@/assets/carving-cooking.png";
import debateImage from "@/assets/debate-img.png";

const events = [
  {
    name: "Solo Singing",
    icon: Mic,
    image: soloSingingImage,
    category: "Solo",
    imageClassName: "object-center scale-99",
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
    imageClassName: "object-center scale-100",
  },
  {
    name: "Dual Dance",
    icon: Music,
    image: dualDanceImage,
    category: "Duo",
    imageClassName: "object-center scale-100"
  },
  {
    name: "Group Dance",
    icon: Users,
    image: groupDanceImage,
    category: "Team",
    imageClassName: "object-center scale-110",
  },
  {
    name: "Instrumental &<br/>Unique Talent",
    icon: Guitar,
    image: instrumentaluniqueImage,
    category: "Solo",
    imageClassName: "object-cover scale-100"
  },
  {
    name: "Fashion Parade",
    icon: Sparkles,
    image: fashionparadeImage,
    category: "Solo",
    imageClassName: "object-center w-full h-full scale-300"
  },
  {
    name: "Rangoli",
    icon: Palette,
    image: rangoliImage,
    category: "Team",
    imageClassName: "object-cover w-full h-full scale-300",
  },
  {
    name: "Mehandi",
    icon: Hand,
    image: mehandiImage,
    category: "Solo or Duo",
    imageClassName: "object-bottom w-full h-full scale-100"
  },
  {
    name: "Photography",
    icon: Camera,
    image: photographyImage,
    category: "Solo",
    imageClassName:"object-center w-full h-full scale-100"
  },
  {
    name: "Carving &<br/>Cook without Fire",
    icon: ForkKnife,
    image: carvingcookingImage,
    category: "Team",
    imageClassName:"object-center w-full h-full scale-300"
  },
  {
    name: "Treasure Hunt",
    icon: Compass,
    image: treasurehuntImage,
    category: "Team",
    imageClassName: "object-center scale-100"
  },
  {
    name: "Craft Work",
    icon: Scissors,
    image: craftworkImage,
    category: "Duo",
    imageClassName: "object-cover scale-99"
  },
  {
    name: "Debate",
    icon: Mic,
    image: debateImage,
    category: "Solo",
    imageClassName: "object-cover scale-99"
  },
];

export const EventsSection = () => {
  return (
    <section 
      id="events" 
      className="py-24 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${posterImg})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white">
            Our <span className="text-gradient">Events</span>
          </h2>
          <p className="text-lg text-white/95 max-w-2xl mx-auto">
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