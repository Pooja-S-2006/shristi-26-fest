import { Heart, Instagram } from "lucide-react";
import shristiBgImage from "@/assets/SHRISTI-26-2.png";

const socialLinks = [
  { 
    icon: Instagram, 
    href: "https://www.instagram.com/womendevelopmentcell_kec?igsh=Y2kydWoxNThmamVj", 
    label: "Instagram" 
  }
];

export const Footer = () => {
  return (
    <footer 
      className="py-12 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${shristiBgImage})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <h2 className="font-serif text-3xl font-bold text-white mb-6">
            Shristi'26
          </h2>

          {/* Social Links */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm text-white/80">Follow us on Instagram</span>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 hover:text-white transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-white/30 mb-8" />

          {/* Copyright */}
          <div className="text-center">
            <p className="text-white/90 flex items-center justify-center gap-1">
              Made with <Heart className="w-4 h-4 text-pink-400 fill-pink-400" /> by Women Development Cell
            </p>
            <p className="text-white/70 text-sm mt-2">
              © {new Date().getFullYear()} Shristi'26. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
