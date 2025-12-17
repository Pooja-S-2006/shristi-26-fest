import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "wdc@college.edu.in",
    href: "mailto:wdc@college.edu.in",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "College Campus, City",
    href: "#",
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Contact <span className="text-gradient">Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? Reach out to the Women Development Cell
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-3">
                {contactDetails.map((contact, index) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className={`p-8 flex flex-col items-center text-center hover:bg-primary/5 transition-colors ${
                      index !== contactDetails.length - 1
                        ? "md:border-r border-b md:border-b-0 border-border"
                        : ""
                    }`}
                  >
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <contact.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-medium text-foreground mb-2">
                      {contact.label}
                    </h3>
                    <p className="text-muted-foreground">{contact.value}</p>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Organized by */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-2">Organized by</p>
            <h3 className="font-serif text-2xl font-semibold text-foreground">
              Women Development Cell
            </h3>
            <p className="text-muted-foreground mt-1">Your College Name</p>
          </div>
        </div>
      </div>
    </section>
  );
};
