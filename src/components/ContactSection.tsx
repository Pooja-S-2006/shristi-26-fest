import { Phone, MapPin, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import posterImg from "@/assets/poster img.png";

const contactDetails = [
  {
    icon: User,
    label: "Secretary",
    label2: "Gayathri M",
    value: "+91 94874 57825",
    href: "tel:+919487457825",
  },
  {
    icon: User,
    label: "Additional Secretary",
    label2: "Pooja S",
    value: "+91 73581 15685",
    href: "tel:+917358115685",
  },
  {
    icon: User,
    label: "Joint Treasurer",
    label2: "Jayasree P",
    value: "+91 99424 02340",
    href: "tel:+919942402340",
  },
];

export const ContactSection = () => {
  return (
    <section 
      id="contact" 
      className="py-24 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${posterImg})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white">
            Contact <span className="text-gradient">Us</span>
          </h2>
          <p className="text-lg text-white/95 max-w-2xl mx-auto">
            Have questions? Reach out to the Women Development Cell
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-white/20 bg-white/10 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-3">
                {contactDetails.map((contact, index) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className={`p-8 flex flex-col items-center text-center hover:bg-white/20 transition-colors ${
                      index !== contactDetails.length - 1
                        ? "md:border-r border-b md:border-b-0 border-white/20"
                        : ""
                    }`}
                  >
                    <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-4">
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-medium text-white">
                      {contact.label}
                    </h3>
                    {contact.label2 && (
                      <p className="font-medium text-pink-300 mb-1">{contact.label2}</p>
                    )}
                    <p className="text-white/80">{contact.value}</p>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Organized by */}
          <div className="text-center mt-12">
            <p className="text-white/80 mb-2">Organized by</p>
            <h3 className="font-serif text-2xl font-semibold text-white">
              Women Development Cell
            </h3>
            <p className="text-white/80 mt-1">Kongu Engineering College</p>
          </div>
        </div>
      </div>
    </section>
  );
};
