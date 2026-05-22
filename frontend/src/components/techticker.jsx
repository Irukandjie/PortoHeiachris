import { Icon } from '@iconify/react';

export default function TechTicker() {
  const monoStyle = { fontFamily: '"JetBrains Mono", monospace' };
  
  // Kata-kata maut ala System Architect & MERN Developer
  const tickerItems = [
    "SYS.ADMIN_ONLINE",  
    "ZERO_PACKET_LOSS", 
    "BGP_ROUTING_ACTIVE",
    "END_TO_END_ENCRYPTED",
    "LATENCY: <1ms",
    "FIREWALL_DEFENSE: UP",
    "INFRASTRUCTURE_SECURED"
  ];

  return (
    // Border atas bawah tipis, background dibikin lebih pekat
    <div className="w-full bg-[#050507] border-y border-[#334155]/30 py-3 relative overflow-hidden flex z-20">
      
      {/* Efek Fade Out di Ujung Kiri dan Kanan (Vignette Edge) */}
      <div className="absolute inset-0 z-10 pointer-events-none" 
           style={{ background: 'linear-gradient(90deg, #050507 0%, transparent 10%, transparent 90%, #050507 100%)' }}>
      </div>

      {/* Kontainer Animasi Marquee CSS Murni (Sangat Ringan, 100% PageSpeed Friendly) */}
      <div className="flex animate-[marquee_25s_linear_infinite] whitespace-nowrap w-max">
        
        {/* Di-map 2 kali (didownload ganda) biar looping-nya kaga pernah putus */}
        {[...Array(2)].map((_, loopIndex) => (
          <div key={loopIndex} className="flex items-center">
            {tickerItems.map((item, idx) => (
              <div key={idx} className="flex items-center px-4 md:px-8">
                <span style={monoStyle} className="text-[9px] md:text-[10px] text-cyan-400/80 tracking-[0.2em]">
                  {item}
                </span>
                {/* Ikon pemisah antar kata */}
                <Icon icon="mdi:asterisk" className="w-3 h-3 text-[#334155] ml-8 md:ml-16 animate-[spin_4s_linear_infinite]" />
              </div>
            ))}
          </div>
        ))}

      </div>

      {/* Keyframes disisipin langsung biar kaga usah edit index.css lagi */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
}