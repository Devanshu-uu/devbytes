import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function SocialLinks({ socials, className, ...props }) {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  return (
    <div
      className={cn("flex items-center justify-center flex-wrap gap-2", className)}
      {...props}
    >
      {socials.map((social, index) => (
        <a
          href={social.href}
          target="_blank"
          rel="noreferrer"
          className={cn(
            "relative cursor-pointer px-3 py-2 transition-all duration-200 flex flex-col items-center group",
            hoveredSocial && hoveredSocial !== social.name ? "opacity-40" : "opacity-100"
          )}
          key={index}
          onMouseEnter={() => setHoveredSocial(social.name)}
          onMouseLeave={() => setHoveredSocial(null)}
        >
          <div className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center mb-1 overflow-hidden bg-white/5 group-hover:bg-white/10 group-hover:border-red-400/50 group-hover:shadow-[0_0_18px_rgba(239,68,68,0.25)] transition-all duration-300">
            <AnimatePresence mode="wait">
              {hoveredSocial === social.name ? (
                <motion.img
                  key="hover"
                  src={social.hoverIconUrl}
                  alt={social.name}
                  className="w-5 h-5 object-contain"
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.15 }}
                />
              ) : (
                <motion.img
                  key="default"
                  src={social.iconUrl}
                  alt={social.name}
                  className="w-5 h-5 object-contain"
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.15 }}
                />
              )}
            </AnimatePresence>
          </div>

          <span className="text-[10px] text-gray-600 group-hover:text-gray-300 transition-colors font-medium">
            {social.name}
          </span>
        </a>
      ))}
    </div>
  );
}