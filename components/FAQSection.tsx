"use client";

import { useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/5215529887336?text=Hola%2C%20tengo%20una%20duda%20sobre%20los%20tratamientos";

const faqs = [
  {
    question: "¿Qué incluye la consulta de $499?",
    answer:
      "Incluye valoración completa con un especialista en reproducción asistida, seminograma (estudio de fertilidad masculina) y ultrasonido endovaginal (evaluación del útero y ovarios). Con estos estudios el doctor puede darte un diagnóstico claro y un plan de tratamiento con costos desde la primera visita. Normalmente estos estudios cuestan más de $1,200 por separado.",
  },
  {
    question: "¿Duele el tratamiento de FIV?",
    answer:
      "No. La mayor parte del proceso es indolora. La estimulación ovárica consiste en inyecciones subcutáneas (como las de insulina) que puedes aplicarte en casa. La recuperación de óvulos se hace bajo sedación ligera, dura unos 15 minutos y no sentirás nada. La transferencia embrionaria es similar a un ultrasonido y no requiere anestesia. La mayoría de nuestras pacientes continúan sus actividades normales durante el tratamiento.",
  },
  {
    question: "¿Cuál es la tasa de éxito?",
    answer:
      "Nuestras tasas varían según el tratamiento y la edad de la paciente. En FIV, las tasas de embarazo por transferencia están entre 40-60% en mujeres menores de 35 años, lo cual es competitivo a nivel internacional. En ovodonación las tasas son aún más altas. Durante tu consulta, el especialista te dará un estimado personalizado basado en tu historial y estudios.",
  },
  {
    question: "¿Cuánto dura un tratamiento de FIV?",
    answer:
      "Un ciclo completo dura entre 4 y 6 semanas: aproximadamente 10-12 días de estimulación ovárica, la recuperación de óvulos, 3-5 días de desarrollo embrionario en laboratorio y la transferencia. La prueba de embarazo se hace unos 12 días después de la transferencia. El proceso no requiere hospitalización y la mayoría de pacientes continúan trabajando normalmente.",
  },
  {
    question: "¿Aceptan pagos con tarjeta o meses sin intereses?",
    answer:
      "Sí. Aceptamos todas las tarjetas de crédito y débito. Los tratamientos de FIV x2 intentos ($59,900) y ovodonación x2 ($82,500) incluyen 3 meses sin intereses. También manejamos precios especiales de contado. No hay costos ocultos — el precio que ves incluye todo lo necesario para el tratamiento.",
  },
  {
    question: "Es mi primera vez, ¿qué debo esperar?",
    answer:
      "En tu primera consulta, el doctor revisará tu historial médico, te realizará los estudios incluidos (seminograma y ultrasonido) y te explicará todas las opciones con precios claros. No hay presión para tomar una decisión el mismo día. Puedes acudir solo/a o con tu pareja. La consulta dura aproximadamente 45 minutos.",
  },
  {
    question: "¿Tengo que ir con mi pareja?",
    answer:
      "No es obligatorio. Puedes asistir solo/a a la primera consulta. Si hay un factor masculino por evaluar, el seminograma que incluye la consulta de $499 permite analizar la muestra sin necesidad de que tu pareja esté presente durante la cita. El doctor te indicará si se requiere una visita conjunta más adelante.",
  },
  {
    question: "¿Dónde están ubicados?",
    answer:
      "Biofert se ubica en Tlacotalpan 36, Colonia Roma Sur, Alcaldía Cuauhtémoc, Ciudad de México, C.P. 06760. Estamos cerca del Metro Hospital General (Línea 3). Contáctanos por WhatsApp y te enviamos la ubicación exacta en Google Maps para que llegues fácilmente.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-block bg-brand-50 text-brand-500 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Preguntas frecuentes
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-800 mb-4">
            Resolvemos tus dudas
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestros tratamientos y servicios.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-brand-100 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-brand-50/50 transition-colors"
              >
                <span className="font-semibold text-brand-800 text-sm sm:text-base pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-brand-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA after FAQs */}
        <div className="mt-10 text-center bg-brand-50 rounded-2xl p-8">
          <p className="text-brand-800 font-semibold mb-1">
            ¿Tienes otra pregunta?
          </p>
          <p className="text-gray-500 text-sm mb-5">
            Escríbenos por WhatsApp y te respondemos en minutos.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Pregúntanos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
