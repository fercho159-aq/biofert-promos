export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  content: BlogSection[];
}

export interface BlogSection {
  type: "paragraph" | "heading" | "list" | "cta";
  text?: string;
  items?: { title: string; description: string }[];
  ctaText?: string;
  ctaDescription?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "por-que-no-logro-embarazarme",
    title: "¿Por qué no logro embarazarme? Descubriendo las causas principales en mujeres y hombres",
    subtitle: "La infertilidad es un tema de dos. Conoce los factores que podrían estar afectando tu sueño de ser mamá y papá.",
    excerpt:
      "Lograr un embarazo parece algo natural, pero para muchas parejas es un camino lleno de desafíos. Conoce las causas principales de infertilidad en mujeres y hombres.",
    date: "2026-02-10",
    readTime: "5 min",
    author: "Dr. Oliver Lara Kferman",
    category: "Infertilidad",
    content: [
      {
        type: "paragraph",
        text: "Lograr un embarazo parece algo natural, pero para muchas parejas es un camino lleno de desafíos. Si llevas más de 12 meses intentándolo (o 6 meses si eres mayor de 35 años) sin éxito, es momento de evaluar las causas. Es vital recordar que la infertilidad no es culpa de nadie y que las causas se distribuyen casi equitativamente entre hombres y mujeres.",
      },
      {
        type: "heading",
        text: "Principales causas de infertilidad en la mujer",
      },
      {
        type: "paragraph",
        text: "El cuerpo femenino requiere una sincronía perfecta de hormonas y salud anatómica para concebir. Cuando algo interfiere en este proceso, estas son las causas más comunes:",
      },
      {
        type: "list",
        items: [
          {
            title: "Trastornos de la ovulación",
            description:
              "Condiciones como el Síndrome de Ovario Poliquístico (SOP) o problemas hormonales que impiden que el ovario libere un óvulo regularmente.",
          },
          {
            title: "Obstrucción de las trompas de Falopio",
            description:
              'Si las "carreteras" por donde viaja el óvulo están bloqueadas (a menudo por infecciones previas o cirugías), el espermatozoide no puede llegar a fecundar.',
          },
          {
            title: "Endometriosis",
            description:
              "Cuando el tejido que recubre el útero crece fuera de él, puede causar dolor y afectar la función de los ovarios y las trompas.",
          },
          {
            title: "Factor edad",
            description:
              "La calidad y cantidad de los óvulos disminuye naturalmente con el tiempo, especialmente después de los 35 años.",
          },
        ],
      },
      {
        type: "heading",
        text: "Principales causas de infertilidad en el hombre",
      },
      {
        type: "paragraph",
        text: "A menudo se pasa por alto, pero el factor masculino es responsable de cerca del 40-50% de los casos de infertilidad. La evaluación del hombre es igual de importante y mucho más sencilla de realizar inicialmente.",
      },
      {
        type: "list",
        items: [
          {
            title: "Baja calidad espermática",
            description:
              "Esto incluye un bajo recuento de espermatozoides (cantidad), baja movilidad (no nadan bien) o morfología alterada (forma anormal).",
          },
          {
            title: "Varicocele",
            description:
              "Es una hinchazón de las venas que drenan el testículo, lo cual aumenta la temperatura y afecta la producción de esperma.",
          },
          {
            title: "Problemas de eyaculación",
            description:
              "Como la eyaculación retrógrada o disfunción eréctil.",
          },
          {
            title: "Estilo de vida y factores ambientales",
            description:
              "El tabaquismo, el consumo excesivo de alcohol y la exposición a ciertos químicos pueden reducir drásticamente la fertilidad masculina.",
          },
        ],
      },
      {
        type: "heading",
        text: "El diagnóstico es el primer paso",
      },
      {
        type: "paragraph",
        text: "Identificar la causa exacta es la llave para elegir el tratamiento adecuado, ya sea Inseminación Artificial, Fecundación In Vitro (FIV) o simplemente ajustes hormonales. El tiempo es un factor valioso, y contar con especialistas en Biología de la Reproducción es fundamental.",
      },
      {
        type: "cta",
        ctaText: "Agendar mi valoración diagnóstica",
        ctaDescription:
          "¿Llevas tiempo intentándolo? No dejes pasar más tiempo. En nuestra clínica en la Ciudad de México, contamos con la tecnología para diagnosticar y tratar tanto factores femeninos como masculinos en una sola visita.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
