import { u } from "@/lib/unsplash";

export const services = [
  {
    id: "zumba",
    title: "Zumba Classes",
    description:
      "High-energy Latin-inspired dance fitness for every level — from first-timers to advanced movers.",
    points: ["Group sessions", "Corporate wellness", "Beginner friendly", "Advanced choreography"],
    image: u("photo-1571019614242-c5c5dee9f50b"),
  },
  {
    id: "pilates",
    title: "Pilates",
    description:
      "Strength, core control, and mobility training that builds long, powerful movement patterns.",
    points: ["Strength", "Core", "Mobility"],
    image: u("photo-1599901860904-17e6ed7083a0"),
  },
  {
    id: "dance-fitness",
    title: "Dance Fitness",
    description:
      "Cardio dance workouts that feel like a night out — and deliver serious results.",
    points: ["Dance workouts", "Cardio sessions"],
    image: u("photo-1508700929628-666bc8bd84ea"),
  },
  {
    id: "kids",
    title: "Kids Dance Programs",
    description:
      "Creative movement and freestyle confidence for ages 4–8 at YMC Studio, Auckland Square.",
    points: ["Creative movement", "Dance workshops", "Wednesday kids groove"],
    image: u("photo-1503454537195-1dcabb73ffb9"),
  },
  {
    id: "wedding",
    title: "Wedding Choreography",
    description:
      "Show-stopping sangeet, couple dances, family routines, and bridal entries designed for your story.",
    points: ["Couple dance", "Family dance", "Sangeet choreography", "Bridal entries"],
    image: u("photo-1519741497674-611481863552"),
  },
  {
    id: "corporate",
    title: "Corporate Wellness",
    description:
      "Team fitness experiences that boost energy, culture, and connection at the workplace.",
    points: ["Team fitness", "Office wellness"],
    image: u("photo-1552664730-d307ca884978"),
  },
  {
    id: "stage-shows",
    title: "Stage Shows",
    description:
      "Large-stage performances and community celebrations choreographed for unforgettable energy.",
    points: ["Stage performances", "Community events", "Premium fitness events"],
    image: u("photo-1492684223066-81342ee5ff30"),
  },
  {
    id: "workshops",
    title: "Workshops",
    description:
      "Fitness workshops, wellness festivals, and community engagements that leave people glowing.",
    points: ["Fitness workshops", "Community engagement", "Wellness festivals"],
    image: u("photo-1517836357463-d25dfeac3438"),
  },
] as const;
