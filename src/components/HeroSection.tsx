import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Sparkles } from "lucide-react";
import shristiBgImage from "@/assets/SHRISTI-26-1.png";

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
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background with image */}
      <div 
        className="absolute inset-0 w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${shristiBgImage})` }}
      />
      <div className="absolute inset-0 w-full bg-gradient-to-br from-black/60 via-black/70 to-black/60" />
      
      {/* Decorative elements */}
      {/* Decorative floating elements */}
      <div className="absolute top-20 left-4 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-4 sm:right-10 w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-lavender/20 blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="hidden sm:block absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-peach/30 blur-2xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 w-full max-w-full px-4 py-16 sm:py-24 lg:py-32 text-center">
        {/* Date */}
        <div className="mb-4 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/20 backdrop-blur-sm border border-pink-300/30">
            <Calendar className="w-4 h-4 text-pink-300" />
            <span className="text-sm font-medium text-pink-200">March 7, 2026</span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-3 sm:mb-6">
          <span className="text-pink-300">Shristi'26</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-pink-200 mb-2 sm:mb-3">
          Celebrating the Spirit of Womanhood
        </p>
        <p className="text-sm sm:text-base md:text-lg text-pink-200/80 mb-8 sm:mb-12 max-w-3xl mx-auto">
          A Women's Day Cultural Extravaganza by Women Development Cell
        </p>

        {/* Countdown Timer */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-2xl mx-auto mb-8 sm:mb-12">
          {[
            { value: timeLeft.days, label: "Days" },
            { value: timeLeft.hours, label: "Hours" },
            { value: timeLeft.minutes, label: "Minutes" },
            { value: timeLeft.seconds, label: "Seconds" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl bg-pink-500/10 backdrop-blur-sm border border-pink-300/20"
            >
              <span className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-pink-300">
                {item.value.toString().padStart(2, "0")}
              </span>
              <span className="text-xs sm:text-sm text-pink-200/70 mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          onClick={scrollToEvents}
          size="lg"
          className="group px-8 py-6 text-lg bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
          Register Now
        </Button>
      </div>
    </section>
  );
};
