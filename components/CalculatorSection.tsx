"use client";

import { useState } from "react";

const AGE_OPTIONS = ["Menos de 35", "35-40", "Más de 40"];
const CONDITION_OPTIONS = [
  "Endometriosis",
  "SOP",
  "Diabetes",
  "Tiroides",
  "Ninguna",
];

function buildWhatsAppUrl(
  age: string,
  conditions: string[],
  losses: string
): string {
  const conditionsText =
    conditions.length > 0 ? conditions.join(", ") : "Ninguna";
  const message = `Hola, me gustaría conocer mi diagnóstico personalizado.\nMis datos: Edad: ${age}, Condiciones: ${conditionsText}, Pérdidas previas: ${losses}.`;
  return `https://wa.me/525526401234?text=${encodeURIComponent(message)}`;
}

export default function CalculatorSection() {
  const [step, setStep] = useState(0);
  const [age, setAge] = useState("");
  const [conditions, setConditions] = useState<string[]>([]);
  const [losses, setLosses] = useState("");

  const totalSteps = 4;
  const progress = ((step + 1) / totalSteps) * 100;

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
  }

  return (
    <section id="calculadora" className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-4">
            Calculadora de Probabilidad
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Responde unas preguntas rápidas y recibe orientación personalizada
            de nuestros especialistas.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 sm:p-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>
                Paso {Math.min(step + 1, totalSteps)} de {totalSteps}
              </span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Step 0: Age */}
          {step === 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-700">
                ¿Cuál es tu rango de edad?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {AGE_OPTIONS.map((option) => (
                  <button
                    key={option}
                    onClick={() => setAge(option)}
                    className={`py-3 px-4 rounded-xl border-2 font-medium transition-all ${
                      age === option
                        ? "border-green-500 bg-green-50 text-green-700"
                        : "border-gray-200 bg-white text-gray-700 hover:border-green-300"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 1: Conditions */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-700">
                ¿Tienes alguna de estas condiciones?
              </h3>
              <p className="text-sm text-gray-500">
                Puedes seleccionar varias opciones.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {CONDITION_OPTIONS.map((option) => (
                  <button
                    key={option}
                    onClick={() => toggleCondition(option)}
                    className={`py-3 px-4 rounded-xl border-2 font-medium transition-all ${
                      conditions.includes(option)
                        ? "border-green-500 bg-green-50 text-green-700"
                        : "border-gray-200 bg-white text-gray-700 hover:border-green-300"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Previous losses */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-700">
                ¿Has tenido pérdidas gestacionales previas?
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {["Sí", "No"].map((option) => (
                  <button
                    key={option}
                    onClick={() => setLosses(option)}
                    className={`py-3 px-4 rounded-xl border-2 font-medium transition-all ${
                      losses === option
                        ? "border-green-500 bg-green-50 text-green-700"
                        : "border-gray-200 bg-white text-gray-700 hover:border-green-300"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Result */}
          {step === 3 && (
            <div className="text-center space-y-6">
              <div className="text-5xl">🎉</div>
              <h3 className="text-xl font-semibold text-gray-700">
                ¡Listo! Tenemos tu información
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Con base en tus respuestas, nuestros especialistas pueden
                brindarte un diagnóstico personalizado. Haz clic en el botón
                para enviarnos tus datos por WhatsApp y recibir orientación.
              </p>
              <div className="bg-white rounded-xl border border-gray-200 p-4 text-left text-sm space-y-1">
                <p>
                  <span className="font-semibold text-gray-700">Edad:</span>{" "}
                  {age}
                </p>
                <p>
                  <span className="font-semibold text-gray-700">
                    Condiciones:
                  </span>{" "}
                  {conditions.join(", ")}
                </p>
                <p>
                  <span className="font-semibold text-gray-700">
                    Pérdidas previas:
                  </span>{" "}
                  {losses}
                </p>
              </div>
              <a
                href={buildWhatsAppUrl(age, conditions, losses)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Enviar por WhatsApp
              </a>
              <button
                onClick={reset}
                className="block mx-auto text-sm text-gray-500 hover:text-gray-700 underline"
              >
                Volver a empezar
              </button>
            </div>
          )}

          {/* Navigation */}
          {step < 3 && (
            <div className="flex justify-between mt-8">
              <button
                onClick={() => setStep((s) => s - 1)}
                disabled={step === 0}
                className="px-5 py-2.5 rounded-lg font-medium text-gray-500 hover:text-gray-700 disabled:opacity-0 transition-all"
              >
                Atrás
              </button>
              <button
                onClick={() => setStep((s) => s + 1)}
                disabled={!canAdvance()}
                className="bg-green-500 hover:bg-green-600 disabled:bg-gray-300 text-white px-6 py-2.5 rounded-lg font-medium transition-all"
              >
                Siguiente
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
