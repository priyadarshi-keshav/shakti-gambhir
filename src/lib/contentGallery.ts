import { u } from "@/lib/unsplash";

export const galleryItems = [
  { src: u("photo-1571019614242-c5c5dee9f50b"), alt: "High-energy Zumba class atmosphere", category: "Zumba" },
  { src: u("photo-1518310383802-640c2de311b2"), alt: "Group dance fitness session", category: "Zumba" },
  { src: u("photo-1599901860904-17e6ed7083a0"), alt: "Pilates strength and core training", category: "Pilates" },
  { src: u("photo-1518611012118-696072aa579a"), alt: "Mobility-focused Pilates practice", category: "Pilates" },
  { src: u("photo-1508700929628-666bc8bd84ea"), alt: "Contemporary dance fitness movement", category: "Dance" },
  { src: u("photo-1504609813442-a8924e83f76e"), alt: "Expressive dance performance energy", category: "Dance" },
  { src: u("photo-1503454537195-1dcabb73ffb9"), alt: "Kids creative movement workshop", category: "Kids Workshops" },
  { src: u("photo-1472162072942-cd5147eb3902"), alt: "Children dancing with confidence", category: "Kids Workshops" },
  { src: u("photo-1552664730-d307ca884978"), alt: "Corporate team wellness session", category: "Corporate Events" },
  { src: u("photo-1519741497674-611481863552"), alt: "Wedding choreography celebration", category: "Wedding Choreography" },
  { src: u("photo-1492684223066-81342ee5ff30"), alt: "Stage show lighting and performance", category: "Stage Shows" },
  { src: u("photo-1470229722913-7c0e2dbbafd3"), alt: "Live stage performance and audience energy", category: "Stage Shows" },
] as const;

export const galleryCategories = [
  "All",
  "Zumba",
  "Pilates",
  "Dance",
  "Kids Workshops",
  "Corporate Events",
  "Wedding Choreography",
  "Stage Shows",
] as const;
