import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Sparkles } from "lucide-react";

const targetDate = new Date("2026-03-07T00:00:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToEvents = () => {
    document.querySelector("#events")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-lavender/20 blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-peach/30 blur-2xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Date Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-primary/20 mb-8 animate-fade-in-up">
          <Calendar className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">March 7, 2026</span>
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <span className="text-gradient">Shristi'26</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto mb-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Celebrating the Spirit of Womanhood
        </p>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          A Women's Day Cultural Extravaganza by Women Development Cell
        </p>

        {/* Countdown Timer */}
        <div className="flex justify-center gap-4 md:gap-8 mb-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          {[
            { value: timeLeft.days, label: "Days" },
            { value: timeLeft.hours, label: "Hours" },
            { value: timeLeft.minutes, label: "Minutes" },
            { value: timeLeft.seconds, label: "Seconds" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center p-4 md:p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-primary/10 min-w-[70px] md:min-w-[100px]"
            >
              <span className="font-serif text-3xl md:text-5xl font-bold text-primary">
                {item.value.toString().padStart(2, "0")}
              </span>
              <span className="text-xs md:text-sm text-muted-foreground mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          onClick={scrollToEvents}
          size="lg"
          className="group px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
          Register Now
        </Button>
      </div>
    </section>
  );
};
