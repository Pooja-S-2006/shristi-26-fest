import { CheckCircle, AlertCircle, Clock, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import posterImg from "@/assets/poster img.png";

const guidelines = [
  {
    icon: CheckCircle,
    title: "Eligibility",
    items: [
      "Open to all female students of the college",
      "Valid details are required for registration.",
      "Participants must be present on the event day",
    ],
  },
  {
    icon: Users,
    title: "Participation Rules",
    items: [
      "Solo events: 1 participant only",
      "Duo events: Exactly 2 participants",
      "Group events: Minimum 4, Maximum 6 participants",
    ],
  },
  {
    icon: Clock,
    title: "Time Limits",
    items: [
      "Solo performances: 3-5 minutes",
      "Group performances: 5-8 minutes",
      "Craft/Art events: Time will be specified on-site",
    ],
  },
  {
    icon: AlertCircle,
    title: "Important Notes",
    items: [
      "On-spot registrations allowed ",
      "Decision of judges is final",
      "Photography is an online event"
    ],
  },
];

export const InstructionsSection = () => {
  return (
    <section 
      id="guidelines" 
      className="py-24 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${posterImg})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white">
            Event <span className="text-gradient">Guidelines</span>
          </h2>
          <p className="text-lg text-white/95 max-w-2xl mx-auto">
            Please read the following instructions carefully before registering
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {guidelines.map((section, index) => (
            <Card
              key={section.title}
              className="border-white/20 bg-white/10 backdrop-blur-sm hover:border-white/30 hover:bg-white/20 transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-serif">{section.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
