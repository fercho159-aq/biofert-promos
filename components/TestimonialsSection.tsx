const testimonials = [
  {
    name: "Ana y Carlos M.",
    initials: "AC",
    treatment: "Fertilización In Vitro",
    text: "Después de 4 años intentando, Biofert nos dio la esperanza que necesitábamos. El Dr. Oliver y su equipo nos acompañaron en cada paso. Hoy tenemos a nuestra hija Sofía y no podemos estar más agradecidos.",
    highlight: "4 años buscando, hoy tenemos a Sofía",
  },
  {
    name: "María Fernanda R.",
    initials: "MF",
    treatment: "Ovodonación",
    text: "Llegué a Biofert después de varios intentos en otras clínicas. Desde la primera consulta sentí confianza. El trato fue humano y profesional. Mi bebé nació sano y fuerte, es un milagro.",
    highlight: "Después de varios intentos en otras clínicas, lo logramos",
  },
  {
    name: "Laura y Javier S.",
    initials: "LJ",
    treatment: "Inseminación Artificial",
    text: "Nos explicaron todo de forma clara y transparente, sin presiones. Los precios fueron justos y el resultado fue el mejor regalo de nuestras vidas. 100% recomendados.",
    highlight: "Precios justos y transparentes desde el inicio",
  },
  {
    name: "Daniela y Roberto P.",
    initials: "DR",
    treatment: "Fertilización In Vitro",
    text: "Teníamos miedo de los costos. En Biofert nos dieron un plan claro con precio desde la primera consulta. Sin sorpresas. Nuestro bebé Mateo nació en noviembre y es lo mejor que nos ha pasado.",
    highlight: "Sin sorpresas en costos, hoy tenemos a Mateo",
  },
  {
    name: "Paola G.",
    initials: "PG",
    treatment: "Edad Materna Avanzada",
    text: "A mis 39 años pensé que era tarde. La Dra. Vanessa me explicó las opciones con mucha paciencia. Después de un tratamiento de FIV, quedé embarazada al primer intento. Estoy eternamente agradecida.",
    highlight: "A los 39, embarazada al primer intento",
  },
  {
    name: "Fernanda y Luis T.",
    initials: "FL",
    treatment: "Ovodonación",
    text: "El Dr. Oliver nos dio un diagnóstico honesto y un camino claro. Nunca nos sentimos como un número más. La clínica es cálida y el equipo es increíble. Nuestra hija Valentina es la prueba.",
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

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Google rating + header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white border border-brand-100 text-brand-700 text-sm font-semibold px-5 py-2 rounded-full mb-6 shadow-sm">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="flex gap-0.5">
              <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
            </div>
            <span>4.9 en Google — 200+ reseñas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-brand-800 mb-4">
            Miles de familias confían en nosotros
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Cada historia es única, pero todas comparten el mismo sueño hecho realidad.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-7 shadow-sm border border-brand-100 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
              </div>

              {/* Highlight */}
              <p className="text-brand-700 font-semibold text-sm mb-3">
                &ldquo;{t.highlight}&rdquo;
              </p>

              {/* Quote */}
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                {t.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-brand-50">
                <div className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
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
          ))}
        </div>

        {/* Social proof counters */}
        <div className="bg-brand-500 rounded-2xl py-8 px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center text-white">
            <div>
              <div className="text-4xl sm:text-5xl font-extrabold mb-1">3,000+</div>
              <div className="text-brand-100 text-sm">familias formadas</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-extrabold mb-1">9+</div>
              <div className="text-brand-100 text-sm">años de experiencia</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-extrabold mb-1">4.9</div>
              <div className="text-brand-100 text-sm flex items-center justify-center gap-1">
                <svg className="w-3.5 h-3.5 text-gold-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                estrellas en Google
              </div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-extrabold mb-1">200+</div>
              <div className="text-brand-100 text-sm">reseñas verificadas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
