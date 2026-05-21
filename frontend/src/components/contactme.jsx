import { Icon } from '@iconify/react'

export default function Contact() {
  const pixelStyle = { fontFamily: '"Press Start 2P", cursive' };

  // DATA TETAP SAMA
  const contacts = [
    { title: "WHATSAPP", value: "Direct Link", desc: "Respon cepat untuk diskusi proyek.", icon: "mdi:whatsapp", link: "https://wa.me/6282134945973", color: "hover:border-green-500", iconColor: "text-green-500" },
    { title: "EMAIL", value: "Click to Compose", desc: "Kirim email penawaran formal.", icon: "lucide:mail", link: "mailto:aldenchristianttw@gmail.com", color: "hover:border-blue-500", iconColor: "text-blue-500" },
    { title: "BASE", value: "Purwodadi, Central Java", desc: "Tersedia untuk on-site maupun remote.", icon: "lucide:map-pin", link: "https://www.google.com/maps", color: "hover:border-teal-500", iconColor: "text-teal-500" }
  ]

  return (
    <section id="contact" className="py-24 relative w-full bg-backgroundPrimary border-t-2 border-border transition-colors duration-300">
      <div className="relative z-10 w-full max-w-[1000px] mx-auto px-6">
        
        <div className="mb-16">
          <h2 style={pixelStyle} className="text-xl md:text-2xl text-content1 flex items-center gap-4">
            <span className="w-3 h-3 bg-primary animate-pulse"></span> GET IN TOUCH
          </h2>
          <p className="text-content2 mt-4 text-sm max-w-2xl font-light">Hubungi saya untuk berdiskusi mengenai arsitektur jaringan maupun rekayasa aplikasi web.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contacts.map((item, idx) => (
            <a
              key={idx} href={item.link} target="_blank" rel="noreferrer"
              className={`bg-backgroundSecondary border-2 border-border p-6 flex flex-col justify-between h-full min-h-[160px] transition-all duration-300 group ${item.color}`}
            >
              <div className="w-12 h-12 bg-backgroundPrimary border-2 border-border flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Icon icon={item.icon} className={`w-6 h-6 ${item.iconColor}`} />
              </div>
              <div>
                <h4 style={pixelStyle} className="text-[8px] text-content3 mb-2">{item.title}</h4>
                <p className="text-sm font-bold text-content1 group-hover:text-primary transition-colors">{item.value}</p>
                <p className="text-[11px] text-content2 font-light mt-2">{item.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}