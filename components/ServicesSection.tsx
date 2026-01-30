const specialties = [
  {
    title: "Endometriosis",
    description:
      "Diagnóstico y tratamiento especializado para mejorar la fertilidad.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Síndrome de Ovario Poliquístico",
    description:
      "Abordaje integral del SOP con enfoque en reproducción asistida.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Edad Materna Avanzada",
    description:
      "Protocolos especializados para mujeres mayores de 35 años.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Malformaciones Uterinas",
    description:
      "Evaluación y manejo de anomalías uterinas que afectan la fertilidad.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Varicocele y Azoospermia",
    description:
      "Diagnóstico y tratamiento de infertilidad masculina por causas comunes.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Fertilización In Vitro",
    description:
      "Tecnología de punta y altas tasas de éxito en tratamientos FIV.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
];

const doctors = [
  {
    name: "Dr. Oliver Lara Kferman",
    role: "Director Médico y Fundador",
    description:
      "Certificado por el Consejo Mexicano de Ginecología con especialización en Biología de la Reproducción Humana.",
  },
  {
    name: "Dra. Vanessa Gómez Piquer",
    role: "Jefe de Laboratorio",
    description:
      "Doctorada en Reproducción Asistida con más de 15 años de experiencia en el área.",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-block bg-brand-50 text-brand-500 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Especialidades
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-800 mb-4">
            Diagnóstico y tratamiento de infertilidad
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Abordamos múltiples causas de infertilidad femenina y masculina con
            tecnología de punta y un equipo médico altamente capacitado.
          </p>
        </div>

        {/* Specialties grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {specialties.map((s) => (
            <div
              key={s.title}
              className="group bg-brand-50/50 hover:bg-brand-500 rounded-2xl p-6 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-brand-100 group-hover:bg-white/20 rounded-xl flex items-center justify-center text-brand-500 group-hover:text-white mb-4 transition-colors duration-300">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold text-brand-800 group-hover:text-white mb-2 transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-gray-500 group-hover:text-brand-100 text-sm leading-relaxed transition-colors duration-300">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        {/* Doctors section */}
        <div className="bg-brand-50 rounded-3xl p-8 sm:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-brand-800 mb-3">
              Equipo Médico
            </h3>
            <p className="text-gray-500 max-w-lg mx-auto">
              Profesionales certificados comprometidos con hacer realidad tu
              sueño de formar una familia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {doctors.map((d) => (
              <div
                key={d.name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-brand-100"
              >
                <div className="w-14 h-14 bg-brand-500 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                  {d.name.charAt(0)}
                </div>
                <h4 className="text-lg font-bold text-brand-800 mb-1">
                  {d.name}
                </h4>
                <div className="text-sm font-medium text-brand-500 mb-3">
                  {d.role}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {d.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
