const WHATSAPP_URL =
  "https://wa.me/5215529887336?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta.";

const specialties = [
  {
    title: "Endometriosis",
    description:
      "¿Te han diagnosticado endometriosis? Tenemos protocolos que mejoran tus probabilidades de embarazo incluso en casos severos.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Síndrome de Ovario Poliquístico",
    description:
      "El SOP es una de las causas más comunes de infertilidad. Con el tratamiento adecuado, la mayoría de pacientes logran embarazarse.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Edad Materna Avanzada",
    description:
      "¿Tienes más de 35 años? Contamos con protocolos especializados que maximizan tus probabilidades. Mientras antes consultes, mejor.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Malformaciones Uterinas",
    description:
      "Evaluamos y tratamos anomalías uterinas que pueden estar impidiendo la implantación o el desarrollo del embarazo.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Infertilidad Masculina",
    description:
      "El 40% de los casos de infertilidad incluyen factor masculino. Diagnosticamos y tratamos varicocele, azoospermia y más.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Fertilización In Vitro",
    description:
      "Altas tasas de éxito con tecnología de punta. FIV desde $49,900 con opción a meses sin intereses.",
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
    credential: "Ced. Prof. 5765441 · Ced. Esp. 8790234",
    description:
      "Certificado por el Consejo Mexicano de Ginecología con especialización en Biología de la Reproducción Humana. Más de 3,000 familias formadas bajo su dirección.",
    initials: "OL",
  },
  {
    name: "Dra. Vanessa Gómez Piquer",
    role: "Jefe de Laboratorio",
    credential: "PhD en Reproducción Asistida",
    description:
      "Doctorada en Reproducción Asistida con más de 15 años de experiencia. Especialista en cultivo embrionario y técnicas avanzadas de laboratorio.",
    initials: "VG",
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
            ¿Por qué no he podido embarazarme?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Existen múltiples causas de infertilidad. Identificar la tuya es el
            primer paso — y es justo lo que hacemos en tu consulta de $499.
          </p>
        </div>

        {/* Specialties grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
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

        {/* CTA bridge to promos */}
        <div className="text-center mb-20">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg shadow-brand-500/20"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Agendar mi consulta — $499
          </a>
          <p className="text-gray-400 text-sm mt-3">
            Incluye seminograma + estudio endovaginal
          </p>
        </div>

        {/* Doctors section */}
        <div className="bg-brand-50 rounded-3xl p-8 sm:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-brand-800 mb-3">
              Tu tratamiento en manos expertas
            </h3>
            <p className="text-gray-500 max-w-lg mx-auto">
              Conoce al equipo que ha ayudado a más de 3,000 familias a cumplir
              su sueño.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {doctors.map((d) => (
              <div
                key={d.name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-brand-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {d.initials}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-800">
                      {d.name}
                    </h4>
                    <div className="text-sm font-medium text-brand-500">
                      {d.role}
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">
                      {d.credential}
                    </div>
                  </div>
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
