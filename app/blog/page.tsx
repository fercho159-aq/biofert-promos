import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog - Fertilidad y Reproducción Asistida",
  description:
    "Artículos sobre fertilidad, reproducción asistida, causas de infertilidad y tratamientos. Información confiable del equipo médico de Biofert.",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      {/* Navbar spacer */}
      <div className="h-24" />

      <section className="py-16 bg-gradient-to-b from-brand-50 to-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-brand-500 hover:text-brand-600 text-sm font-medium mb-6 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver al inicio
            </Link>
            <h1 className="text-3xl sm:text-4xl font-bold text-brand-800 mb-4">
              Blog de Fertilidad
            </h1>
            <p className="text-gray-500 max-w-lg mx-auto">
              Información confiable sobre fertilidad, tratamientos y reproducción
              asistida, escrita por nuestro equipo médico.
            </p>
          </div>

          {/* Posts grid */}
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                <article className="bg-white rounded-2xl border border-brand-100 p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-brand-200 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-brand-50 text-brand-600 text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-xs">
                      {formatDate(post.date)}
                    </span>
                    <span className="text-gray-400 text-xs">
                      {post.readTime} de lectura
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-brand-800 mb-3 group-hover:text-brand-600 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        OL
                      </div>
                      <span className="text-sm text-gray-600 font-medium">
                        {post.author}
                      </span>
                    </div>
                    <span className="text-brand-500 text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Leer artículo
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
