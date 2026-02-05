"use client";

import { useState } from "react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Promociones", href: "#promociones" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

const WHATSAPP_URL = "https://wa.me/5215529887336?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta.";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-brand-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs">
            {/* Left - Phone */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+5215529887336"
                className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors min-h-[44px] min-w-[44px] justify-center"
                aria-label="Llamar al 55 2988 7336"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="hidden sm:inline font-medium">55 2988 7336</span>
              </a>
              <span className="hidden md:inline text-gray-400">|</span>
              <span className="hidden md:inline text-gray-300">CDMX, Roma Sur</span>
            </div>

            {/* Right - Social */}
            <div className="flex items-center gap-1">
              <span className="hidden sm:inline text-gray-400 mr-2">Síguenos:</span>
              <a
                href="https://www.facebook.com/biofert.com.mx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar Facebook de Biofert"
                className="hover:text-cyan-300 transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </a>
              <a
                href="https://www.instagram.com/biofert_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar Instagram de Biofert"
                className="hover:text-cyan-300 transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a
                href="https://x.com/Biofert_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar X de Biofert"
                className="hover:text-cyan-300 transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a
                href="https://www.tiktok.com/@biofert.reproduccion"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar TikTok de Biofert"
                className="hover:text-cyan-300 transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.53.02C13.84 0 15.14.01 16.44.02c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.96-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
              </a>
              <a
                href="https://www.youtube.com/@biofert"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar YouTube de Biofert"
                className="hover:text-red-400 transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white/95 backdrop-blur shadow-sm" aria-label="Navegación principal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <a href="#inicio" aria-label="Biofert - Ir al inicio">
              <img
                src="/biofert.svg"
                alt="Biofert"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-brand-500 transition-colors font-medium text-sm py-2"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#calculadora"
                className="text-pink-600 hover:text-pink-700 font-medium text-sm transition-colors py-2 px-3"
              >
                Test de fertilidad
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-500 hover:bg-brand-600 text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm"
              >
                Agendar consulta $499
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-3 rounded-md text-gray-700 hover:bg-gray-100 min-h-[44px] min-w-[44px]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-gray-700 hover:text-brand-500 font-medium py-3 min-h-[44px]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#calculadora"
                onClick={() => setMenuOpen(false)}
                className="block text-pink-600 font-medium py-3 min-h-[44px]"
              >
                Test de fertilidad
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-brand-500 hover:bg-brand-600 text-white text-center px-4 py-3 rounded-lg font-medium transition-colors min-h-[44px]"
              >
                Agendar consulta $499
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
