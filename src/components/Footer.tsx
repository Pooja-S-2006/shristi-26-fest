import { Heart, Instagram } from "lucide-react";

const socialLinks = [
  { 
    icon: Instagram, 
    href: "https://www.instagram.com/womendevelopmentcell_kec?igsh=Y2kydWoxNThmamVj", 
    label: "Instagram" 
  }
];

export const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <h2 className="font-serif text-3xl font-bold text-gradient mb-6">
            Shristi'26
          </h2>

          {/* Social Links */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm text-muted-foreground">Follow us on Instagram</span>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-border mb-8" />

          {/* Copyright */}
          <div className="text-center">
            <p className="text-muted-foreground flex items-center justify-center gap-1">
              Made with <Heart className="w-4 h-4 text-primary fill-primary" /> by Women Development Cell
            </p>
            <p className="text-muted-foreground/60 text-sm mt-2">
              © {new Date().getFullYear()} Shristi'26. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
