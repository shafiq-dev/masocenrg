export const images = {
  hero: {
    classic: "/images/hero-classic.jpg",
    minimal: "/images/hero-minimal.jpg",
    services: "/images/hero-services.jpg",
    split: "/images/hero-split.jpg",
    editorial: "/images/hero-editorial.jpg",
  },
  about: "/images/about.jpg",
  process: "/images/process.jpg",
  services: {
    "EPC Contracting": "/images/service-industrial.jpg",
    "Oil & Gas": "/images/service-power.jpg",
    Petrochemical: "/images/service-energy.jpg",
    "Industrial Infrastructure": "/images/service-infrastructure.jpg",
    "Digital Infrastructure": "/images/gallery-2.jpg",
    "EPCM Delivery": "/images/service-partnerships.jpg",
  },
  testimonials: [
    "/images/testimonial-1.jpg",
    "/images/testimonial-2.jpg",
    "/images/testimonial-3.jpg",
  ],
} as const;

export type ServiceName = keyof typeof images.services;
