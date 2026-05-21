import { Icon } from '@iconify/react';
import { HashLink as Link } from "react-router-hash-link";

export default function Footer() {
  const quickLinks = [
    { label: "About", to: "/#about" },
    { label: "Works", to: "/#experience" },
    { label: "Credentials", to: "/#certifications" }
  ];

  const socialFooter = [
    { icon: "mdi:instagram", link: "https://www.instagram.com/heiachris/" },
    { icon: "mdi:linkedin", link: "https://linkedin.com" },
    { icon: "mdi:github", link: "https://github.com/Irukandjie" }
  ];

  return (
    <footer className="bg-backgroundSecondary/50 border-t border-border/40 pt-16 pb-8 text-content3 relative overflow-hidden w-full">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 w-full flex flex-col gap-12 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          <div className="text-center md:text-left max-w-sm">
            <Link smooth to="/#home" className="text-2xl font-black text-content1 tracking-tighter group">
              Heiachris<span className="text-primary group-hover:text-cyan-400 transition-colors">!</span>
            </Link>
            <p className="text-xs sm:text-sm mt-3 font-light leading-relaxed">
              Ordinary isn't in my vocabulary. Membangun infrastruktur jaringan maut serta ekosistem software berskala enterprise.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <h4 className="text-xs font-mono tracking-widest font-bold text-content1 uppercase">Navigation</h4>
            <div className="flex gap-6 text-xs sm:text-sm font-medium">
              {quickLinks.map((link, idx) => (
                <Link key={idx} smooth to={link.to} className="hover:text-primary transition-colors duration-300">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-5 text-center sm:text-left text-[11px] sm:text-xs">
          <div className="flex flex-col gap-1">
            <p>&copy; {new Date().getFullYear()} Alden Christian T.W. All rights reserved.</p>
            <p className="font-light opacity-60">IT Support & Network Engineer at RS Sekar Laras</p>
          </div>

          {/* Icons Grid */}
          <div className="flex gap-4">
            {socialFooter.map((soc, idx) => (
              <a 
                key={idx} href={soc.link} target="_blank" rel="noreferrer"
                className="w-8 h-8 rounded-full bg-backgroundPrimary border border-border flex items-center justify-center text-content2 hover:text-primary hover:border-primary/40 transition-all duration-300 shadow-sm"
              >
                <Icon icon={soc.icon} className="w-4 h-4" />
              </a>
            ))}
          </div>

          <p className="font-mono text-[10px] sm:text-xs opacity-80 tracking-tight">
            Built with Vite React & Tailwind
          </p>
        </div>

      </div>
    </footer>
  );
}