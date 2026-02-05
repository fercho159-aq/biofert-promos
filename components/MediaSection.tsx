"use client";

import { useState } from "react";

const videos = [
  {
    id: "_XxYIcBiwDw",
    title: "Conoce Biofert",
  },
  {
    id: "vziGB3KWicc",
    title: "Historias de Fertilidad",
  },
];

function VideoCard({ video }: { video: { id: string; title: string } }) {
  const [isLoaded, setIsLoaded] = useState(false);

  if (isLoaded) {
    return (
      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg bg-gray-900">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setIsLoaded(true)}
      className="relative aspect-video rounded-2xl overflow-hidden shadow-lg bg-gray-900 group cursor-pointer w-full"
      aria-label={`Reproducir video: ${video.title}`}
    >
      {/* Thumbnail */}
      <img
        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
        alt={video.title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        width={480}
        height={360}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <p className="text-white font-medium text-sm sm:text-base">{video.title}</p>
      </div>
    </button>
  );
}

export default function MediaSection() {
  return (
    <section className="py-16 bg-white" aria-labelledby="media-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            YouTube
          </div>
          <h2 id="media-heading" className="text-2xl sm:text-3xl font-bold text-brand-800 mb-3">
            Conoce más sobre nosotros
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Descubre historias reales y conoce a nuestro equipo de especialistas en fertilidad.
          </p>
        </div>

        {/* Videos grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        {/* CTA to YouTube channel */}
        <div className="text-center mt-8">
          <a
            href="https://www.youtube.com/@biofert"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium transition-colors py-2"
          >
            <span>Ver más videos en nuestro canal</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
