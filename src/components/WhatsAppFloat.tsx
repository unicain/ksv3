import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Show the button after scrolling down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    
    // Show premium initial tooltip after 4 seconds to catch attention elegantly
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      clearTimeout(tooltipTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
          id="whatsapp-floating-action"
        >
          {/* Elegant Tooltip Dialog */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.95 }}
                className="mb-3 bg-white border border-brand-gold/25 p-3.5 shadow-2xl max-w-xs relative rounded-none flex flex-col space-y-1"
              >
                {/* Close Tooltip Button */}
                <button 
                  onClick={() => setShowTooltip(false)}
                  className="absolute top-1.5 right-1.5 text-gray-400 hover:text-brand-dark transition-colors"
                  aria-label="Fechar"
                >
                  <X size={12} />
                </button>

                <span className="text-[9px] tracking-widest font-bold text-brand-gold-dark uppercase">
                  CONEXÃO DIRETA
                </span>
                <p className="text-xs text-brand-dark leading-relaxed pr-3">
                  Olá! Como posso ajudar na estratégia ou inteligência artificial do seu negócio?
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Interactive Floating Button */}
          <a
            href="https://wa.me/5511976869042"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setShowTooltip(true)}
            className="relative group bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-all duration-300 flex items-center justify-center focus:outline-none"
            aria-label="Fale conosco no WhatsApp"
          >
            {/* Elegant pulse wave rings */}
            <span className="absolute -inset-1 border border-[#25D366]/40 rounded-full animate-ping pointer-events-none" />
            <span className="absolute -inset-2 border-2 border-[#25D366]/20 rounded-full pointer-events-none" />

            {/* Standard React Icon from lucide-react */}
            <MessageCircle size={26} className="transition-transform group-hover:scale-110" />

            {/* Active Green Dot indicator */}
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
