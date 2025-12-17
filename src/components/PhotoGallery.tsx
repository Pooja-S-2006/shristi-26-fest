import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop",
    alt: "Cultural celebration",
  },
  {
    url: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=500&fit=crop",
    alt: "Dance performance",
  },
  {
    url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=500&fit=crop",
    alt: "Event celebration",
  },
  {
    url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=500&fit=crop",
    alt: "Stage performance",
  },
  {
    url: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&h=500&fit=crop",
    alt: "Concert lights",
  },
];

export const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="gallery" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Photo <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Glimpses of past celebrations and memorable moments
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={galleryImages[currentIndex].url}
              alt={galleryImages[currentIndex].alt}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm hover:bg-card border-primary/20 rounded-full"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm hover:bg-card border-primary/20 rounded-full"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="flex justify-center gap-4 mt-8 overflow-x-auto pb-4">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                index === currentIndex
                  ? "border-primary scale-110"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
