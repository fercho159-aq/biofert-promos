"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Ana y Carlos M.",
    initials: "AC",
    treatment: "Fertilización In Vitro",
    text: "Después de 4 años intentando, Biofert nos dio la esperanza que necesitábamos. El Dr. Oliver y su equipo nos acompañaron en cada paso. Hoy tenemos a nuestra hija Sofía.",
    highlight: "4 años buscando, hoy tenemos a Sofía",
  },
  {
    name: "María Fernanda R.",
    initials: "MF",
    treatment: "Ovodonación",
    text: "Llegué a Biofert después de varios intentos en otras clínicas. Desde la primera consulta sentí confianza. El trato fue humano y profesional.",
    highlight: "Después de varios intentos, lo logramos",
  },
  {
    name: "Laura y Javier S.",
    initials: "LJ",
    treatment: "Inseminación Artificial",
    text: "Nos explicaron todo de forma clara y transparente, sin presiones. Los precios fueron justos y el resultado fue el mejor regalo de nuestras vidas.",
    highlight: "Precios justos y transparentes",
  },
  {
    name: "Daniela y Roberto P.",
    initials: "DR",
    treatment: "Fertilización In Vitro",
    text: "Teníamos miedo de los costos. En Biofert nos dieron un plan claro con precio desde la primera consulta. Sin sorpresas. Nuestro bebé Mateo nació en noviembre.",
    highlight: "Sin sorpresas, hoy tenemos a Mateo",
  },
  {
    name: "Paola G.",
    initials: "PG",
    treatment: "Edad Materna Avanzada",
    text: "A mis 39 años pensé que era tarde. La Dra. Vanessa me explicó las opciones con mucha paciencia. Quedé embarazada al primer intento.",
    highlight: "A los 39, embarazada al primer intento",
  },
  {
    name: "Fernanda y Luis T.",
    initials: "FL",
    treatment: "Ovodonación",
    text: "El Dr. Oliver nos dio un diagnóstico honesto y un camino claro. Nunca nos sentimos como un número más. Nuestra hija Valentina es la prueba.",
    highlight: "Nunca nos sentimos como un número más",
  },
];

function StarIcon() {
  return (
    <svg className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = testimonials.length - visibleCount;

  const next = () => setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prev = () => setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section className="py-14 bg-brand-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white border border-brand-100 text-brand-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 shadow-sm">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="flex gap-0.5">
              <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
            </div>
            <span>4.9 — 200+ reseñas</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-brand-800 mb-2">
            Miles de familias confían en nosotros
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-brand-600 hover:bg-brand-50 transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-brand-600 hover:bg-brand-50 transition-colors"
            aria-label="Siguiente"
          >
            <ChevronRight />
          </button>

          {/* Cards container */}
          <div className="overflow-hidden mx-6">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * (100 / visibleCount)}%)` }}
            >
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-brand-100 h-full flex flex-col">
                    {/* Stars */}
                    <div className="flex gap-0.5 mb-2">
                      <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                    </div>

                    {/* Highlight */}
                    <p className="text-brand-700 font-semibold text-sm mb-2">
                      &ldquo;{t.highlight}&rdquo;
                    </p>

                    {/* Quote */}
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                      {t.text}
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-3 border-t border-brand-50">
                      <div className="w-9 h-9 bg-brand-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {t.initials}
                      </div>
                      <div>
                        <div className="font-semibold text-brand-800 text-sm">
                          {t.name}
                        </div>
                        <div className="text-xs text-gray-400">{t.treatment}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-5">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === current ? "bg-brand-500" : "bg-brand-200"
                }`}
                aria-label={`Ir a testimonio ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Video Testimonials */}
        <div className="mt-10">
          <h3 className="text-xl font-bold text-brand-800 text-center mb-6">
            Testimonios en video
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl overflow-hidden shadow-md bg-black">
              <video
                className="w-full aspect-[9/16] object-contain"
                controls
                preload="auto"
                playsInline
                src="/videos/testimonio1.mp4#t=0.1"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md bg-black">
              <video
                className="w-full aspect-[9/16] object-contain"
                controls
                preload="auto"
                playsInline
                src="/videos/testimonio2.mp4#t=0.1"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md bg-black">
              <video
                className="w-full aspect-[9/16] object-contain"
                controls
                preload="auto"
                playsInline
                src="/videos/testimonio3.mp4#t=0.1"
              />
            </div>
          </div>
        </div>

        {/* Social proof counters */}
        <div className="bg-brand-500 rounded-xl py-6 px-6 mt-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center text-white">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold">7,000+</div>
              <div className="text-brand-100 text-xs">familias formadas</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold">18</div>
              <div className="text-brand-100 text-xs">años de experiencia</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold">4.9</div>
              <div className="text-brand-100 text-xs flex items-center justify-center gap-1">
                <svg className="w-3 h-3 text-gold-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                en Google
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold">200+</div>
              <div className="text-brand-100 text-xs">reseñas verificadas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
