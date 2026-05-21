import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { HashLink as Link } from "react-router-hash-link";

export default function About() {
  const pixelStyle = { fontFamily: '"Press Start 2P", cursive' };

  const interests = [
    { name: "MOTORSPORT", icon: "cbi:f1", iconColor: "text-rose-500" },
    { name: "JDM CULTURE", icon: "fluent-emoji-high-contrast:japanese-symbol-for-beginner", iconColor: "text-blue-500" },
    { name: "NETWORKING", icon: "lucide:network", iconColor: "text-teal-500" },
    { name: "MUSIC", icon: "lucide:music", iconColor: "text-violet-500" },
    { name: "TRAVELING", icon: "lucide:plane", iconColor: "text-sky-500" },
    { name: "HIKING", icon: "lucide:mountain", iconColor: "text-emerald-500" },
  ];

  return (
    <section id="about" className="relative py-24 bg-backgroundPrimary overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(currentColor 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>

      {/* DISINI KUNCI KERAPIANNYA: max-w-[1200px] px-6 md:px-12 */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Teks Profil */}
          <div className="text-left">
            <h2 style={pixelStyle} className="text-xl md:text-2xl mb-8 text-content1 flex items-center gap-4">
              <span className="w-3 h-3 bg-primary animate-pulse"></span> ABOUT ME
            </h2>
            <div className="space-y-6 text-content2 font-light leading-relaxed">
              <p>Halo! Saya <strong className="text-content1">Alden Christian Totonafo Waruwu</strong>. Lulusan Teknik Informatika dari <strong className="text-content1">Universitas Semarang (USM).</strong> Saya berfokus pada IT Support, pengembangan sistem, serta memiliki passion yang kuat di bidang arsitektur jaringan <strong className="text-content1">(Networking).</strong></p>
              <p>Di luar dunia IT, saya adalah seorang car enthusiastyang menyukai kultur JDM. Saya juga menikmati dunia musik serta sering meluangkan waktu untuk traveling dan hiking.</p>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1 border-2 border-border bg-backgroundSecondary p-6 hover:border-primary transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <Icon icon="lucide:briefcase" className="w-5 h-5 text-primary" />
                <h4 style={pixelStyle} className="text-[7px] text-content3">ROLE</h4>
              </div>
              <p className="text-sm font-bold text-content1">IT Support & Dev</p>
            </div>

            <div className="col-span-1 border-2 border-border bg-backgroundSecondary p-6 hover:border-primary transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <Icon icon="lucide:graduation-cap" className="w-5 h-5 text-primary" />
                <h4 style={pixelStyle} className="text-[7px] text-content3">EDUCATION</h4>
              </div>
              <p className="text-sm font-bold text-content1">Informatics ENG.</p>
            </div>

            <Link smooth to="/#certifications" className="col-span-2 border-2 border-border bg-backgroundSecondary p-6 flex justify-between items-center hover:border-primary transition-all group">
              <div className="flex items-center gap-3">
                <Icon icon="lucide:award" className="w-5 h-5 text-content1" />
                <span className="text-sm font-bold text-content1 group-hover:translate-x-2 transition-transform">VIEW CREDENTIALS</span>
              </div>
              <Icon icon="lucide:arrow-right" className="text-content3 group-hover:text-primary transition-colors" />
            </Link>

            <div className="col-span-2 border-2 border-border bg-backgroundSecondary p-6">
              <h4 style={pixelStyle} className="text-[7px] text-content3 mb-6">INTERESTS</h4>
              <div className="flex flex-wrap gap-3">
                {interests.map((i, idx) => (
                  <div key={idx} className="flex items-center gap-2 border border-border px-3 py-2 hover:bg-backgroundPrimary transition-colors">
                    <Icon icon={i.icon} className={`w-4 h-4 ${i.iconColor}`} />
                    <span style={pixelStyle} className="text-[6px] md:text-[7px] text-content1 pt-1">{i.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}