import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function Terminal({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { cmd: '', res: 'HEIACHRIS_OS v2.0.26 (tty1)' },
    { cmd: '', res: 'SYSTEM READY. Select a quick command or type manually.' }
  ]);
  
  const inputRef = useRef(null);
  const terminalRef = useRef(null);
  
  const monoStyle = { fontFamily: '"JetBrains Mono", monospace' };

  const quickCommands = [
    { label: "whoami", desc: "Identity" },
    { label: "about", desc: "Profile" },
    { label: "skills", desc: "Tech Stack" },
    { label: "sudo hire alden", desc: "Recruit" },
    { label: "clear", desc: "Clean" }
  ];

  // Auto-scroll ke bawah tiap ada output baru
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history, isOpen]);

  // Fungsi eksekusi perintah utama
  const executeCommand = (cmdText) => {
    const cmd = cmdText.trim().toLowerCase();
    let response = '';

    switch (cmd) {
      case 'help':
        response = 'Click the quick action buttons below or type available commands: whoami, about, skills, sudo hire alden, clear.';
        break;
      case 'whoami':
        response = 'guest_recruiter_01 // You are a recruiter looking for the best Engineer.';
        break;
      case 'about':
        response = 'Alden Christian. 23yo. Network Architect & MERN Stack Developer based in Purwodadi, ID. Currently operating at RS Sekar Laras.';
        break;
      case 'skills':
        response = '[NETWORK]: Mikrotik, Cisco, BGP, Firewall, QoS. [DEV]: React.js, Node.js, Express, MongoDB, Tailwind.';
        break;
      case 'sudo hire alden':
        response = 'EXCELLENT_CHOICE. Initiating secure communication protocol...';
        // Easter Egg: Langsung buka WA setelah delay 1 detik
        setTimeout(() => {
          window.open('https://wa.me/6282134945973', '_blank');
        }, 1000);
        break;
      case 'clear':
        setHistory([]);
        return;
      case '':
        response = '';
        break;
      default:
        response = `bash: ${cmd}: command not found`;
    }

    setHistory(prev => [...prev, { cmd: `guest@heiachris:~$ ${cmdText}`, res: response }]);
  };

  // Handler buat input manual
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(input);
      setInput('');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999999] flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            // CRT Expand Animation
            initial={{ scaleY: 0.002, scaleX: 0, opacity: 0 }}
            animate={{ scaleY: [0.002, 0.002, 1], scaleX: [0, 1, 1], opacity: [0, 1, 1] }}
            exit={{ scaleY: [1, 0.002, 0.002], scaleX: [1, 1, 0], opacity: [1, 1, 0] }}
            transition={{ duration: 0.45, times: [0, 0.35, 1], ease: [0.19, 1, 0.22, 1] }}
            onClick={(e) => e.stopPropagation()} 
            className="w-full max-w-3xl bg-[#0a0a0c] border border-cyan-500/40 shadow-[0_0_40px_rgba(34,211,238,0.1)] flex flex-col rounded-sm overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="flex justify-between items-center px-4 py-3 bg-[#0e1015] border-b border-[#334155]/40">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ef4444] border border-black/20 opacity-80"></div>
                <div className="w-3 h-3 rounded-full bg-[#eab308] border border-black/20 opacity-80"></div>
                <div className="w-3 h-3 rounded-full bg-[#22c55e] border border-black/20 opacity-80"></div>
              </div>
              <div style={monoStyle} className="text-[9px] md:text-[10px] text-[#64748b] tracking-widest flex items-center gap-2">
                root@heiachris-server:~
              </div>
              <button onClick={onClose} className="text-[#64748b] hover:text-rose-500 transition-colors">
                <Icon icon="lucide:x" className="w-4 h-4" />
              </button>
            </div>

            {/* Terminal Body */}
            <div 
              className="p-4 h-[350px] md:h-[400px] flex flex-col relative"
              style={monoStyle}
            >
              <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-0" />

              <div 
                ref={terminalRef}
                className="flex-grow overflow-y-auto cursor-text relative z-10 pb-4 pr-2 custom-scrollbar"
                onClick={() => inputRef.current?.focus()}
              >
                <div className="flex flex-col gap-3 text-[10px] md:text-xs">
                  {history.map((line, index) => (
                    <div key={index} className="flex flex-col gap-1">
                      {line.cmd && (
                        <div className="text-[#f8fafc]">
                          <span className="text-cyan-400 font-bold pr-2">{line.cmd.split(' ')[0]}</span>
                          {line.cmd.substring(line.cmd.indexOf(' ') + 1)}
                        </div>
                      )}
                      {line.res && <div className="text-[#94a3b8] whitespace-pre-wrap">{line.res}</div>}
                    </div>
                  ))}
                  
                  <div className="flex items-center text-[#f8fafc] mt-2">
                    <span className="text-cyan-400 font-bold pr-2 whitespace-nowrap">guest@heiachris:~$</span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="bg-transparent border-none outline-none flex-grow text-[#f8fafc] w-full caret-cyan-400"
                      autoComplete="off"
                      spellCheck="false"
                    />
                  </div>
                </div>
              </div>

              {/* QUICK COMMAND BUTTONS */}
              <div className="mt-4 pt-4 border-t border-dashed border-[#334155]/40 relative z-10 flex flex-col gap-2">
                <span className="text-[8px] text-[#475569] tracking-widest">// MACRO_COMMANDS_READY</span>
                <div className="flex flex-wrap gap-2">
                  {quickCommands.map((cmd, idx) => (
                    <button
                      key={idx}
                      onClick={() => executeCommand(cmd.label)}
                      className={`flex items-center gap-2 px-3 py-1.5 border transition-colors ${
                        cmd.label === 'sudo hire alden' 
                        ? 'border-emerald-500/50 text-emerald-400 bg-emerald-500/10 hover:bg-emerald-400 hover:text-black' 
                        : 'border-cyan-500/30 text-cyan-400 bg-cyan-950/20 hover:bg-cyan-400 hover:text-black'
                      }`}
                    >
                      <span className="text-[9px] font-bold">{cmd.label}</span>
                      <span className="text-[7px] opacity-70 hidden sm:inline">[{cmd.desc}]</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}