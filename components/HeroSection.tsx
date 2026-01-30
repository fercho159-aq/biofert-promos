const WHATSAPP_URL =
  "https://wa.me/525526401234?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta.";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-50 pt-16"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block bg-green-50 text-green-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-green-200">
          + 3,000 familias formadas
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-700 leading-tight mb-6">
          Tu sueño de formar una familia{" "}
          <span className="text-green-600">empieza aquí</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          En Biofert contamos con más de 3,000 casos de éxito. Nuestro equipo de
          especialistas en fertilidad te acompaña en cada paso del camino hacia
          la maternidad y paternidad.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            Agenda tu consulta por WhatsApp
          </a>
          <a
            href="#calculadora"
            className="text-green-600 hover:text-green-700 font-semibold text-lg underline underline-offset-4"
          >
            Calcula tu probabilidad
          </a>
        </div>
      </div>
    </section>
  );
}
