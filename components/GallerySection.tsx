"use client";

import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  { id: 1, src: "/images/gallery/1.jpg", alt: "Familia feliz con bebé en Biofert" },
  { id: 2, src: "/images/gallery/2.jpg", alt: "Padres con su recién nacido" },
  { id: 3, src: "/images/gallery/3.jpg", alt: "Momento especial en la clínica" },
  { id: 4, src: "/images/gallery/4.jpg", alt: "Bebé nacido gracias a tratamiento de fertilidad" },
  { id: 5, src: "/images/gallery/5.jpg", alt: "Familia celebrando su nuevo bebé" },
  { id: 6, src: "/images/gallery/6.jpg", alt: "Padres orgullosos con su hijo" },
  { id: 7, src: "/images/gallery/7.jpg", alt: "Historia de éxito de fertilidad" },
  { id: 10, src: "/images/gallery/10.jpg", alt: "Doctor con gemelas bebés" },
  { id: 11, src: "/images/gallery/11.jpg", alt: "Doctor con niños en la clínica" },
  { id: 12, src: "/images/gallery/12.jpg", alt: "Familia con gemelos recién nacidos" },
  { id: 13, src: "/images/gallery/13.jpg", alt: "Doctor con niños visitando la clínica" },
  { id: 14, src: "/images/gallery/14.jpg", alt: "Familia con hijos en consultorio" },
  { id: 15, src: "/images/gallery/15.jpg", alt: "Familia con gemelos en Biofert" },
  { id: 16, src: "/images/gallery/16.jpg", alt: "Doctor con bebés gemelos" },
  { id: 17, src: "/images/gallery/17.jpg", alt: "Familia con gemelas bebés" },
  { id: 18, src: "/images/gallery/18.jpg", alt: "Doctor con gemelos en brazos" },
  { id: 19, src: "/images/gallery/19.jpg", alt: "Doctor sosteniendo recién nacida" },
  { id: 20, src: "/images/gallery/20.jpg", alt: "Doctor con gemelos pequeños" },
  { id: 21, src: "/images/gallery/21.jpg", alt: "Niños visitando al doctor" },
  { id: 22, src: "/images/gallery/22.jpg", alt: "Niña con su hermanito recién nacido" },
  { id: 23, src: "/images/gallery/23.jpg", alt: "Padres con gemelas bebés" },
  { id: 24, src: "/images/gallery/24.jpg", alt: "Doctor con bebés en recepción" },
  { id: 25, src: "/images/gallery/25.jpg", alt: "Familia con gemelas en consulta" },
  { id: 26, src: "/images/gallery/26.jpg", alt: "Doctor con gemelos en su regazo" },
  { id: 27, src: "/images/gallery/27.jpg", alt: "Niños visitando Biofert" },
  { id: 28, src: "/images/gallery/28.jpg", alt: "Mamá con su bebé y el doctor" },
  { id: 29, src: "/images/gallery/29.jpg", alt: "Doctor con gemelos bebés" },
  { id: 30, src: "/images/gallery/30.jpg", alt: "Gemelas bebés con sus padres" },
  { id: 31, src: "/images/gallery/31.jpg", alt: "Doctor con bebés recién nacidos" },
  { id: 32, src: "/images/gallery/32.jpg", alt: "Familia feliz con bebé Biofert" },
  { id: 33, src: "/images/gallery/33.jpg", alt: "Padres con su bebé en consulta" },
  { id: 34, src: "/images/gallery/34.jpg", alt: "Doctor con gemelos sonriendo" },
  { id: 35, src: "/images/gallery/35.jpg", alt: "Niños en la clínica de fertilidad" },
  { id: 36, src: "/images/gallery/36.jpg", alt: "Mamá feliz con su bebé" },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleImages = showAll ? galleryImages : galleryImages.slice(0, 12);

  return (
    <section id="galeria" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-800 mb-4">
            Historias de Éxito
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Más de 7,000 familias han cumplido su sueño de ser padres con nosotros
          </p>
        </div>

        {/* Mosaic Grid - Columns layout for true masonry */}
        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-3">
          {visibleImages.map((image, index) => (
            <div
              key={image.id}
              className="relative mb-3 rounded-xl overflow-hidden cursor-pointer group break-inside-avoid"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={500}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {galleryImages.length > 12 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-800 text-white rounded-full hover:bg-brand-700 transition-colors min-h-[44px]"
            >
              {showAll ? (
                <>
                  Ver menos
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </>
              ) : (
                <>
                  Ver más fotos ({galleryImages.length - 12} más)
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
            aria-label="Cerrar imagen"
          >
            &times;
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center bg-black/30 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              const currentArray = showAll ? galleryImages : visibleImages;
              setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : currentArray.length - 1));
            }}
            aria-label="Imagen anterior"
          >
            &#8249;
          </button>

          <div className="relative max-w-4xl max-h-[80vh] w-full h-full">
            <Image
              src={visibleImages[selectedImage]?.src || galleryImages[selectedImage].src}
              alt={visibleImages[selectedImage]?.alt || galleryImages[selectedImage].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center bg-black/30 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              const currentArray = showAll ? galleryImages : visibleImages;
              setSelectedImage((prev) => (prev! < currentArray.length - 1 ? prev! + 1 : 0));
            }}
            aria-label="Imagen siguiente"
          >
            &#8250;
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
            {selectedImage + 1} / {showAll ? galleryImages.length : visibleImages.length}
          </div>
        </div>
      )}
    </section>
  );
}
