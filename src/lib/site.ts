export const siteConfig = {
  name: "Shakti Gambhir",
  title: "Shakti Gambhir | Zumba Instructor, Pilates Coach & Dance Fitness | Kolkata",
  description:
    "Premium Zumba, Pilates, dance fitness, kids programs, wedding choreography, and stage performances by Shakti Gambhir — Broadway Dance Center graduate and Kolkata’s high-energy fitness coach.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://shaktigambhir.com",
  locale: "en_IN",
  city: "Kolkata",
  region: "West Bengal",
  country: "IN",
  instagram: "https://www.instagram.com/ghambir/",
  instagramHandle: "@ghambir",
  facebook: "",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "book@shaktigambhir.com",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "+919836924593",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "919836924593",
  keywords: [
    "Shakti Gambhir",
    "Shakti Ghambir",
    "Zumba Kolkata",
    "Pilates Kolkata",
    "Dance fitness Kolkata",
    "Wedding choreography Kolkata",
    "Kids dance Salt Lake",
    "YMC Studio Auckland Square",
    "The Fitling Studio",
    "Aqua Zumba The Stadel",
  ],
} as const;

export function buildWhatsAppUrl(
  rawNumber: string = siteConfig.whatsapp,
  message = "Hi Shakti! I'd like to know more about your classes.",
) {
  const digits = rawNumber.replace(/[^\d]/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
