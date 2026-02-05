"use client";

import { useState } from "react";

function Icon({ d }: { d: string }) {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={d} />
    </svg>
  );
}

const AGE_OPTIONS = [
  { label: "Menos de 35", icon: <Icon d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /> },
  { label: "35-40", icon: <Icon d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /> },
  { label: "Más de 40", icon: <Icon d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /> },
];

const CONDITION_OPTIONS = [
  { label: "Endometriosis", icon: <Icon d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /> },
  { label: "SOP", icon: <Icon d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /> },
  { label: "Diabetes", icon: <Icon d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /> },
  { label: "Tiroides", icon: <Icon d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /> },
  { label: "Ninguna", icon: <Icon d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /> },
];

const STEPS = [
  { title: "Edad", icon: "1" },
  { title: "Condiciones", icon: "2" },
  { title: "Historial", icon: "3" },
  { title: "Resultado", icon: "4" },
];

function getRecommendation(age: string, conditions: string[], losses: string) {
  const needsFIV = age === "Más de 40" || conditions.includes("Endometriosis") ||
                   !conditions.includes("Ninguna") || losses === "Sí";

  if (needsFIV) {
    return {
      treatment: "Fertilización In Vitro (FIV)",
      price: "$49,900 MXN",
      description: "Tu caso requiere una valoración especializada. Agenda tu consulta de $499 para recibir un diagnóstico completo y plan de tratamiento."
    };
  }
  return {
    treatment: "Consulta de fertilidad + estudios",
    price: "$499 MXN",
    description: "El primer paso es una valoración completa con seminograma y estudio endovaginal incluidos."
  };
}

function buildWhatsAppUrl(
  name: string,
  age: string,
  conditions: string[],
  losses: string
): string {
  const conditionsText = conditions.length > 0 ? conditions.join(", ") : "Ninguna";
  const recommendation = getRecommendation(age, conditions, losses);

  const message = `Hola, soy ${name} y acabo de realizar el diagnóstico en su página web.

MI PERFIL:
- Edad: ${age}
- Condiciones: ${conditionsText}
- Pérdidas previas: ${losses}

TRATAMIENTO RECOMENDADO:
${recommendation.treatment}
Precio: ${recommendation.price}

Me gustaría agendar mi consulta de valoración.`;

  return `https://wa.me/5215529887336?text=${encodeURIComponent(message)}`;
}

export default function CalculatorSection() {
  const [step, setStep] = useState(0);
  const [age, setAge] = useState("");
  const [conditions, setConditions] = useState<string[]>([]);
  const [losses, setLosses] = useState("");
  const [name, setName] = useState("");

  const totalSteps = 4;

  function toggleCondition(condition: string) {
    if (condition === "Ninguna") {
      setConditions(["Ninguna"]);
      return;
    }
    setConditions((prev) => {
      const without = prev.filter((c) => c !== "Ninguna");
      if (without.includes(condition)) {
        return without.filter((c) => c !== condition);
      }
      return [...without, condition];
    });
  }

  function canAdvance(): boolean {
    if (step === 0) return age !== "";
    if (step === 1) return conditions.length > 0;
    if (step === 2) return losses !== "";
    return false;
  }

  function reset() {
    setStep(0);
    setAge("");
    setConditions([]);
    setLosses("");
    setName("");
  }

  const recommendation = getRecommendation(age, conditions, losses);

  return (
    <section id="calculadora" className="py-20 bg-gradient-to-b from-brand-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-brand-100 text-brand-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Diagnóstico rápido
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-800 mb-4">
            ¿Qué probabilidad tienes de embarazarte?
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Responde 3 preguntas rápidas y recibe orientación personalizada
            de nuestros especialistas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left panel - step indicator */}
          <div className="lg:col-span-2">
            <div className="bg-brand-800 rounded-2xl p-6 sm:p-8 text-white sticky top-24">
              <h3 className="text-lg font-bold mb-6">Tu progreso</h3>

              <div className="space-y-4">
                {STEPS.map((s, i) => (
                  <div key={s.title} className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-all duration-300 ${
                        i < step
                          ? "bg-accent-400 text-white"
                          : i === step
                          ? "bg-white text-brand-800 ring-4 ring-accent-400/30"
                          : "bg-brand-700 text-brand-400"
                      }`}
                    >
                      {i < step ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        s.icon
                      )}
                    </div>
                    <div>
                      <div
                        className={`text-sm font-medium transition-colors ${
                          i <= step ? "text-white" : "text-brand-400"
                        }`}
                      >
                        {s.title}
                      </div>
                      {i === step && (
                        <div className="text-xs text-brand-300 mt-0.5">
                          En progreso
                        </div>
                      )}
                      {i < step && (
                        <div className="text-xs text-accent-300 mt-0.5">
                          Completado
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Info card */}
              <div className="mt-8 bg-brand-700/50 rounded-xl p-4 border border-brand-600">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent-400/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-accent-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-brand-200 leading-relaxed">
                      Tu información es confidencial y solo será utilizada para
                      brindarte una orientación personalizada.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel - form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg border border-brand-100 p-6 sm:p-8 min-h-[400px] flex flex-col">
              {/* Step 0: Age */}
              {step === 0 && (
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-brand-800 mb-2">
                      ¿Cuál es tu rango de edad?
                    </h3>
                    <p className="text-sm text-gray-400">
                      Selecciona la opción que aplique
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {AGE_OPTIONS.map((option) => (
                      <button
                        key={option.label}
                        onClick={() => setAge(option.label)}
                        className={`flex flex-col items-center gap-3 py-6 px-4 rounded-2xl border-2 font-medium transition-all ${
                          age === option.label
                            ? "border-brand-500 bg-brand-50 text-brand-700 shadow-md shadow-brand-100"
                            : "border-gray-100 bg-gray-50/50 text-gray-600 hover:border-brand-200 hover:bg-brand-50/50"
                        }`}
                      >
                        <span className={`${age === option.label ? "text-brand-500" : "text-gray-400"}`}>{option.icon}</span>
                        <span className="text-sm">{option.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 1: Conditions */}
              {step === 1 && (
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-brand-800 mb-2">
                      ¿Tienes alguna de estas condiciones?
                    </h3>
                    <p className="text-sm text-gray-400">
                      Puedes seleccionar varias opciones
                    </p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {CONDITION_OPTIONS.map((option) => (
                      <button
                        key={option.label}
                        onClick={() => toggleCondition(option.label)}
                        className={`flex items-center gap-3 py-4 px-4 rounded-2xl border-2 font-medium transition-all text-left ${
                          conditions.includes(option.label)
                            ? "border-brand-500 bg-brand-50 text-brand-700 shadow-md shadow-brand-100"
                            : "border-gray-100 bg-gray-50/50 text-gray-600 hover:border-brand-200 hover:bg-brand-50/50"
                        }`}
                      >
                        <span className={`shrink-0 ${conditions.includes(option.label) ? "text-brand-500" : "text-gray-400"}`}>{option.icon}</span>
                        <span className="text-sm">{option.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Previous losses */}
              {step === 2 && (
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-brand-800 mb-2">
                      ¿Has tenido pérdidas gestacionales previas?
                    </h3>
                    <p className="text-sm text-gray-400">
                      Esta información es confidencial
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        label: "Sí",
                        desc: "He tenido pérdidas",
                        icon: <Icon d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
                      },
                      {
                        label: "No",
                        desc: "Sin pérdidas previas",
                        icon: <Icon d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
                      },
                    ].map((option) => (
                      <button
                        key={option.label}
                        onClick={() => setLosses(option.label)}
                        className={`flex flex-col items-center gap-3 py-8 px-4 rounded-2xl border-2 font-medium transition-all ${
                          losses === option.label
                            ? "border-brand-500 bg-brand-50 text-brand-700 shadow-md shadow-brand-100"
                            : "border-gray-100 bg-gray-50/50 text-gray-600 hover:border-brand-200 hover:bg-brand-50/50"
                        }`}
                      >
                        <span className={`${losses === option.label ? "text-brand-500" : "text-gray-400"}`}>{option.icon}</span>
                        <span className="text-base font-semibold">{option.label}</span>
                        <span className="text-xs text-gray-400">{option.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Result */}
              {step === 3 && (
                <div className="flex-1 text-center space-y-5 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-accent-400/10 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-brand-800">
                    Tu orientación personalizada
                  </h3>

                  {/* Recommendation */}
                  <div className="w-full bg-brand-50 border border-brand-100 rounded-xl p-5 text-left">
                    <p className="text-sm font-semibold text-brand-700 mb-3">
                      Basado en tu perfil, te recomendamos:
                    </p>
                    <div className="bg-white rounded-lg p-4 mb-3">
                      <div className="font-bold text-brand-800">
                        {recommendation.treatment}
                      </div>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-2xl font-extrabold text-brand-800">
                          {recommendation.price.replace(" MXN", "")}
                        </span>
                        <span className="text-sm text-gray-400">MXN</span>
                        {recommendation.price.includes("49,900") && (
                          <span className="text-xs bg-brand-100 text-brand-600 px-2 py-0.5 rounded-full font-semibold">
                            3 MSI disponibles
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">
                      {recommendation.description}
                    </p>
                  </div>

                  {/* Summary */}
                  <div className="w-full bg-gray-50 rounded-xl p-4 text-left space-y-2">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Tu perfil</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Edad</span>
                      <span className="text-sm font-semibold text-brand-800">{age}</span>
                    </div>
                    <div className="border-t border-gray-100" />
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Condiciones</span>
                      <span className="text-sm font-semibold text-brand-800">{conditions.join(", ")}</span>
                    </div>
                    <div className="border-t border-gray-100" />
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Pérdidas previas</span>
                      <span className="text-sm font-semibold text-brand-800">{losses}</span>
                    </div>
                  </div>

                  {/* Name input */}
                  <div className="w-full">
                    <label htmlFor="client-name" className="block text-sm font-medium text-gray-700 text-left mb-2">
                      Tu nombre para agendar
                    </label>
                    <input
                      type="text"
                      id="client-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Escribe tu nombre completo"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-brand-800"
                    />
                  </div>

                  <a
                    href={name.trim() ? buildWhatsAppUrl(name, age, conditions, losses) : "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (!name.trim()) {
                        e.preventDefault();
                        alert("Por favor ingresa tu nombre para continuar");
                      }
                    }}
                    className={`inline-flex items-center gap-2 text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-lg transition-all w-full justify-center ${
                      name.trim()
                        ? "bg-green-500 hover:bg-green-600 hover:shadow-xl"
                        : "bg-gray-300 cursor-not-allowed"
                    }`}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Enviar y agendar mi consulta
                  </a>
                  <button
                    onClick={reset}
                    className="text-sm text-gray-400 hover:text-brand-600 underline underline-offset-4 transition-colors"
                  >
                    Volver a empezar
                  </button>
                </div>
              )}

              {/* Navigation */}
              {step < 3 && (
                <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
                  <button
                    onClick={() => setStep((s) => s - 1)}
                    disabled={step === 0}
                    className="px-5 py-2.5 rounded-xl font-medium text-gray-400 hover:text-brand-600 hover:bg-brand-50 disabled:opacity-0 transition-all inline-flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Atrás
                  </button>
                  <button
                    onClick={() => setStep((s) => s + 1)}
                    disabled={!canAdvance()}
                    className="bg-brand-500 hover:bg-brand-600 disabled:bg-gray-200 disabled:text-gray-400 text-white px-6 py-2.5 rounded-xl font-medium transition-all inline-flex items-center gap-2 shadow-sm hover:shadow-md disabled:shadow-none"
                  >
                    Siguiente
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
