const promotions = [
  {
    icon: "🧬",
    title: "Descuento en FIV",
    description:
      "Obtén un descuento especial en tu tratamiento de Fertilización In Vitro este mes.",
    badge: "20% OFF",
  },
  {
    icon: "🩺",
    title: "Consulta inicial bonificada",
    description:
      "Tu primera consulta de valoración con nuestros especialistas a precio preferencial.",
    badge: "50% OFF",
  },
  {
    icon: "📋",
    title: "Paquete diagnóstico",
    description:
      "Estudios completos de fertilidad para ambos: hormonales, ultrasonido y espermograma.",
    badge: "Paquete",
  },
  {
    icon: "🤝",
    title: "Programa de referidos",
    description:
      "Refiere a una amiga y ambas obtienen un beneficio en su siguiente consulta o tratamiento.",
    badge: "2x1",
  },
];

export default function PromotionsSection() {
  return (
    <section id="promociones" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-4">
            Promociones
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Aprovecha nuestras promociones especiales diseñadas para hacer tu
            camino hacia la fertilidad más accesible.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {promotions.map((promo) => (
            <div
              key={promo.title}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100 relative"
            >
              <span className="absolute top-4 right-4 bg-gold-400 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                {promo.badge}
              </span>
              <div className="text-4xl mb-4">{promo.icon}</div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                {promo.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {promo.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
