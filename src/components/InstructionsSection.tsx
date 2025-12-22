import { CheckCircle, AlertCircle, Clock, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const guidelines = [
  {
    icon: CheckCircle,
    title: "Eligibility",
    items: [
      "Open to all female students of the college",
      "Valid college ID required for registration",
      "Participants must be present on the event day",
    ],
  },
  {
    icon: Users,
    title: "Participation Rules",
    items: [
      "Solo events: 1 participant only",
      "Duo events: Exactly 2 participants",
      "Group events: Minimum 4, Maximum 10 participants",
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
      "Registration closes 3 days before the event",
      "On-spot registrations allowed ",
      "Decision of judges is final",
    ],
  },
];

export const InstructionsSection = () => {
  return (
    <section id="guidelines" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Event <span className="text-gradient">Guidelines</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Please read the following instructions carefully before registering
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {guidelines.map((section, index) => (
            <Card
              key={section.title}
              className="border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-serif">{section.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
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
