import React from "react";
import { Github, X } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/brand/logo-abstract-minus.png"
            alt="Logo"
            className="w-7 h-7 object-contain"
          />
          <span className="text-sm font-medium opacity-80">
            Metadata Generator
          </span>
        </div>

        {/* Right: Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 transition"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 transition"
            aria-label="X (Twitter)"
          >
            <X className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
