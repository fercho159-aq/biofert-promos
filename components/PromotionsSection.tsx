const WHATSAPP_URL =
  "https://wa.me/5215529887336?text=Hola%2C%20me%20interesa%20una%20promoci%C3%B3n";

export default function PromotionsSection() {
  return (
    <section id="promociones" className="py-20 bg-gradient-to-b from-brand-800 to-brand-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-accent-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-gold-400 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            Precios especiales
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Promociones del mes
          </h2>
          <p className="text-brand-200 max-w-2xl mx-auto text-lg">
            Precios claros y transparentes. Sin sorpresas, sin costos ocultos.
          </p>
        </div>

        {/* Featured: Consulta */}
        <div className="max-w-3xl mx-auto mb-14">
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-accent-500"></div>
            <span className="absolute top-6 right-6 bg-green-500 text-white text-sm font-bold px-4 py-1.5 rounded-full animate-pulse">
              Oferta especial
            </span>
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="flex-1 text-center sm:text-left">
                <p className="text-sm font-semibold text-green-600 uppercase tracking-wider mb-2">
                  Consulta de fertilidad
                </p>
                <div className="flex items-baseline justify-center sm:justify-start gap-3 mb-3">
                  <span className="text-2xl text-gray-400 font-semibold line-through">
                    $1,200
                  </span>
                  <span className="text-6xl sm:text-7xl font-extrabold text-brand-800">
                    $499
                  </span>
                  <span className="text-xl text-gray-400 font-medium">MXN</span>
                </div>
                <p className="text-gray-500 text-base mb-1">
                  Incluye seminograma y estudio endovaginal
                </p>
                <p className="text-gray-400 text-sm">
                  Valoración completa con nuestros especialistas
                </p>
              </div>
              <div className="flex-shrink-0">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors shadow-lg shadow-green-500/30"
                >
                  Agendar mi consulta — $499
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Treatment pricing cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* FIV x2 — Most popular */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-accent-400/50 hover:bg-white/15 transition-colors group relative ring-1 ring-accent-400/20">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-400 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
              Más popular
            </div>
            <span className="absolute top-4 right-4 bg-brand-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
              3 MSI
            </span>
            <p className="text-accent-300 text-xs font-semibold uppercase tracking-wider mb-3 mt-2">
              Fertilización In Vitro
            </p>
            <h3 className="text-white font-bold text-lg mb-4">FIV x 2 intentos</h3>
            <div className="mb-4">
              <span className="text-lg text-brand-400 font-semibold line-through mr-2">
                $79,900
              </span>
              <br />
              <span className="text-4xl sm:text-5xl font-extrabold text-white">
                $59,900
              </span>
              <span className="text-sm text-brand-300 ml-1">MXN</span>
            </div>
            <p className="text-brand-200 text-sm mb-4">
              Dos intentos de Fertilización In Vitro
            </p>
            <div className="flex items-center gap-2 mb-5">
              <span className="bg-brand-500/30 text-brand-200 text-xs font-semibold px-3 py-1.5 rounded-full border border-brand-400/30">
                3 Meses Sin Intereses
              </span>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-accent-400 hover:bg-accent-500 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              Agendar mi consulta
            </a>
          </div>

          {/* FIV x1 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors group relative">
            <span className="absolute top-4 right-4 bg-gold-400 text-white text-xs font-bold px-2.5 py-1 rounded-full">
              Precio especial
            </span>
            <p className="text-accent-300 text-xs font-semibold uppercase tracking-wider mb-3">
              Fertilización In Vitro
            </p>
            <h3 className="text-white font-bold text-lg mb-4">FIV x 1 intento</h3>
            <div className="mb-4">
              <span className="text-lg text-brand-400 font-semibold line-through mr-2">
                $65,000
              </span>
              <br />
              <span className="text-4xl sm:text-5xl font-extrabold text-white">
                $49,900
              </span>
              <span className="text-sm text-brand-300 ml-1">MXN</span>
            </div>
            <p className="text-brand-200 text-sm mb-4">
              Un intento de Fertilización In Vitro
            </p>
            <div className="flex items-center gap-2 mb-5">
              <span className="bg-gray-500/30 text-brand-200 text-xs font-semibold px-3 py-1.5 rounded-full border border-gray-400/30">
                Pago de contado
              </span>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-xl transition-colors border border-white/20"
            >
              Agendar mi consulta
            </a>
          </div>

          {/* OVODON x2 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors group relative">
            <span className="absolute top-4 right-4 bg-brand-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
              3 MSI
            </span>
            <p className="text-accent-300 text-xs font-semibold uppercase tracking-wider mb-3">
              Ovodonación
            </p>
            <h3 className="text-white font-bold text-lg mb-4">Ovodonación x 2 intentos</h3>
            <div className="mb-4">
              <span className="text-lg text-brand-400 font-semibold line-through mr-2">
                $110,000
              </span>
              <br />
              <span className="text-4xl sm:text-5xl font-extrabold text-white">
                $82,500
              </span>
              <span className="text-sm text-brand-300 ml-1">MXN</span>
            </div>
            <p className="text-brand-200 text-sm mb-4">
              Dos intentos de ovodonación incluidos
            </p>
            <div className="flex items-center gap-2 mb-5">
              <span className="bg-brand-500/30 text-brand-200 text-xs font-semibold px-3 py-1.5 rounded-full border border-brand-400/30">
                3 Meses Sin Intereses
              </span>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-xl transition-colors border border-white/20"
            >
              Agendar mi consulta
            </a>
          </div>

          {/* OVODON x1 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors group relative">
            <span className="absolute top-4 right-4 bg-gold-400 text-white text-xs font-bold px-2.5 py-1 rounded-full">
              Precio especial
            </span>
            <p className="text-accent-300 text-xs font-semibold uppercase tracking-wider mb-3">
              Ovodonación
            </p>
            <h3 className="text-white font-bold text-lg mb-4">Ovodonación x 1 intento</h3>
            <div className="mb-4">
              <span className="text-lg text-brand-400 font-semibold line-through mr-2">
                $80,000
              </span>
              <br />
              <span className="text-4xl sm:text-5xl font-extrabold text-white">
                $60,000
              </span>
              <span className="text-sm text-brand-300 ml-1">MXN</span>
            </div>
            <p className="text-brand-200 text-sm mb-4">
              Un intento de ovodonación
            </p>
            <div className="flex items-center gap-2 mb-5">
              <span className="bg-gray-500/30 text-brand-200 text-xs font-semibold px-3 py-1.5 rounded-full border border-gray-400/30">
                Pago de contado
              </span>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-xl transition-colors border border-white/20"
            >
              Agendar mi consulta
            </a>
          </div>
        </div>

        {/* Urgency + scarcity bar */}
        <div className="mt-10 bg-gold-400/10 border border-gold-400/30 rounded-2xl py-5 px-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center">
          <div className="flex items-center gap-2 text-gold-300 font-semibold text-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Válido hasta el 28 de febrero 2026
          </div>
          <div className="hidden sm:block w-px h-5 bg-gold-400/30" />
          <div className="flex items-center gap-2 text-gold-300 font-semibold text-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Solo 15 lugares disponibles este mes
          </div>
        </div>

        {/* Trust message */}
        <div className="text-center mt-8">
          <p className="text-brand-300 text-sm">
            Sin sorpresas &middot; Sin costos ocultos &middot; Precio claro desde el inicio
          </p>
        </div>
      </div>
    </section>
  );
}
