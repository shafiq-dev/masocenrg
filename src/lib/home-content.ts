export const company = {
  name: "MASCO Energy",
  tagline: "Building for Better Life",
  website: "https://www.masco.com.sa/",
  email: "info@masco.com.sa",
  phone: "+966 13 000 0000",
  headquarters: "Alfardan Tower, Prince Turki Bin Abdulaziz Street",
  city: "Al Khobar, Eastern Province",
  country: "Kingdom of Saudi Arabia",
  founded: "2023",
  employees: "1,001–5,000",
  industry: "EPC & Integrated Contracting",
} as const;

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
  { label: "FAQ", href: "#faq" },
] as const;

export const visionMission = {
  vision:
    "To be a trusted Saudi partner in delivering resilient and sustainable energy infrastructure that supports national development and economic growth.",
  mission:
    "To execute high-quality energy and industrial projects through professionalism, innovation, and operational excellence.",
} as const;

export const aboutParagraphs = [
  "MASCO Energy is a Saudi-based EPC and integrated contracting company delivering services across the energy, oil & gas, petrochemical, and industrial infrastructure sectors.",
  "Headquartered in Al Khobar, the company builds on a strong legacy in the Saudi market while advancing a focused strategy aligned with the Kingdom's evolving energy landscape.",
  "Formerly operating under MASCO General Contracting, MASCO Energy reflects a strategic evolution toward specialized energy-sector solutions, supporting complex projects through disciplined execution, strong governance, and a commitment to quality, safety, and reliability.",
  "MASCO Energy executes projects under EPC, EPCM, and hybrid delivery models, combining technical expertise and operational excellence to deliver long-term value in alignment with Saudi Vision 2030.",
] as const;

export const services = [
  {
    name: "EPC Contracting",
    description:
      "Full engineering, procurement, and construction delivery for complex energy and industrial projects across the Kingdom, with disciplined execution and strong governance.",
    metric: "EPC · EPCM · Hybrid",
  },
  {
    name: "Oil & Gas",
    description:
      "Integrated contracting solutions for upstream and downstream oil & gas facilities, supporting Saudi Arabia's energy sector with quality, safety, and reliability.",
    metric: "AMIRAL PKG-6",
  },
  {
    name: "Petrochemical",
    description:
      "Engineering and construction services for petrochemical plants and process facilities, aligned with national industrial development priorities.",
    metric: "Process Excellence",
  },
  {
    name: "Industrial Infrastructure",
    description:
      "Large-scale industrial infrastructure development supporting energy transition, manufacturing, and critical national sector requirements.",
    metric: "Vision 2030",
  },
  {
    name: "Digital Infrastructure",
    description:
      "Integrated engineering, project management, and EPC solutions for hyperscale data center developments and the Kingdom's digital transformation agenda.",
    metric: "PDC Partnership",
  },
  {
    name: "EPCM Delivery",
    description:
      "Flexible EPCM and hybrid delivery models combining technical expertise with operational excellence for long-term client value.",
    metric: "Global Partners",
  },
] as const;

export const projects = [
  {
    id: "amiral",
    title: "AMIRAL Project — Package 6",
    category: "EPC · Oil & Gas",
    location: "Kingdom of Saudi Arabia",
    year: "2025–2026",
    partner: "Worley",
    description:
      "Main EPC organization for Package 6, celebrating engineering completion and recognized for Best Quality Management System with a high Project Quality Index maintained throughout 2025.",
    image: "/images/gallery-4.jpg",
    featured: true,
  },
  {
    id: "pdc-data-centers",
    title: "PDC Hyperscale Data Centers",
    category: "Digital Infrastructure",
    location: "Saudi Arabia",
    year: "2026",
    partner: "PDC Saudi Electricity Projects Development",
    description:
      "Framework Agreement signed at DataCloud Global Congress for integrated engineering, project management, and EPC solutions supporting hyperscale data center developments.",
    image: "/images/gallery-2.jpg",
    featured: true,
  },
  {
    id: "bunyan",
    title: "Bunyan Digital Transformation",
    category: "Digital · ERP",
    location: "Al Khobar, KSA",
    year: "2026",
    partner: "Oracle · Lumeron",
    description:
      "Strategic Oracle Fusion Cloud ERP and PMIS implementation establishing a unified digital ecosystem for business operations, project management, and enterprise analytics.",
    image: "/images/service-corporate.jpg",
    featured: false,
  },
  {
    id: "mssd",
    title: "MSSD Project — SPARK",
    category: "Safety · EPC",
    location: "Jeddah, KSA",
    year: "2025",
    partner: "ASSP Recognized",
    description:
      "Achieved half a million safe man-hours without incident, recognized by the American Society of Safety Professionals for safety, quality, and operational excellence.",
    image: "/images/gallery-3.jpg",
    featured: false,
  },
  {
    id: "energytech",
    title: "EnergyTech Workforce Program",
    category: "Talent · Energy",
    location: "Dammam, KSA",
    year: "2026",
    partner: "Ministry of Energy · Aramco",
    description:
      "Supporting national talent development through EnergyTech graduation initiatives, empowering the next generation of Saudi professionals in the energy sector.",
    image: "/images/gallery-1.jpg",
    featured: false,
  },
  {
    id: "tarmeem",
    title: "Tarmeem Sustainability Partnership",
    category: "CSR · Community",
    location: "Eastern Province, KSA",
    year: "2026",
    partner: "Tarmeem Charity",
    description:
      "Sustainability and strategic partnership supporting community initiatives and long-term social impact aligned with Saudi Vision 2030.",
    image: "/images/about.jpg",
    featured: false,
  },
] as const;

export const pillars = [
  {
    title: "Vision 2030 Alignment",
    text: "Delivering resilient and sustainable energy infrastructure that supports national development, economic growth, and the Kingdom's strategic energy transition.",
  },
  {
    title: "Quality & Safety",
    text: "Disciplined execution with strong governance, recognized quality management systems, and an unwavering commitment to safety across every project phase.",
  },
  {
    title: "Saudi Expertise",
    text: "A trusted Saudi EPC partner headquartered in Al Khobar, building on deep market legacy while advancing specialized energy-sector solutions.",
  },
  {
    title: "Innovation & Digital",
    text: "Accelerating operational excellence through digital transformation, enterprise systems, and partnerships that enable future-ready EPC capabilities.",
  },
] as const;

export const stats = [
  { value: "1,000+", label: "Employees in KSA" },
  { value: "2023", label: "Founded as MASCO Energy" },
  { value: "EPC", label: "EPCM · Hybrid Models" },
  { value: "Vision 2030", label: "Kingdom Aligned" },
] as const;

export const faqs = [
  {
    question: "What does MASCO Energy do?",
    answer:
      "MASCO Energy is a Saudi-based EPC and integrated contracting company delivering services across energy, oil & gas, petrochemical, and industrial infrastructure sectors under EPC, EPCM, and hybrid delivery models.",
  },
  {
    question: "Where is MASCO Energy headquartered?",
    answer:
      "MASCO Energy is headquartered in Al Khobar, Eastern Province, Kingdom of Saudi Arabia, at Alfardan Tower on Prince Turki Bin Abdulaziz Street.",
  },
  {
    question: "How is MASCO Energy aligned with Vision 2030?",
    answer:
      "The company executes high-quality energy and industrial projects that support the Kingdom's evolving energy landscape, digital infrastructure growth, workforce development, and sustainable national development.",
  },
  {
    question: "What delivery models does MASCO Energy offer?",
    answer:
      "MASCO Energy executes projects under EPC, EPCM, and hybrid delivery models, combining engineering expertise, procurement capability, and construction excellence for complex energy-sector projects.",
  },
  {
    question: "How can I partner or work with MASCO Energy?",
    answer:
      "Contact our team through the form on this page or visit masco.com.sa. We welcome inquiries from clients, partners, and professionals seeking to contribute to the Kingdom's energy and industrial future.",
  },
] as const;

export const highlights = [
  {
    quote:
      "This strategic collaboration reinforces our commitment to supporting the Kingdom's rapidly growing digital infrastructure sector through integrated EPC solutions for hyperscale data center developments.",
    author: "PDC Framework Agreement",
    company: "DataCloud Global Congress · 2026",
  },
  {
    quote:
      "This recognition reflects the project team's disciplined execution and consistent adherence to quality standards across Engineering, Procurement, and Construction activities.",
    author: "AMIRAL EPC Package 6",
    company: "Best Quality Management System · 2025",
  },
  {
    quote:
      "This milestone reflects MASCO Energy's long-term vision to accelerate operational excellence and position the organization among the leading digitally enabled EPC enterprises in the region.",
    author: "Bunyan Program Launch",
    company: "Oracle Fusion Cloud ERP · 2026",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Engineering",
    text: "Multidisciplinary engineering design and technical submissions aligned with client specifications, Saudi standards, and project quality frameworks.",
  },
  {
    step: "02",
    title: "Procurement",
    text: "Global supply chain management and vendor alignment — from machine shops in Germany and Prague to leading technology partners worldwide.",
  },
  {
    step: "03",
    title: "Construction",
    text: "Disciplined site execution with rigorous quality management, safety protocols, and transparent reporting throughout the project lifecycle.",
  },
  {
    step: "04",
    title: "Commissioning & Handover",
    text: "Structured completion, operational readiness, and long-term support ensuring projects deliver sustained value for clients and the Kingdom.",
  },
] as const;

// Backward-compatible alias used by testimonials component
export const testimonials = highlights;
