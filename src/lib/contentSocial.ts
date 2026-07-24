import { u } from "@/lib/unsplash";

export const testimonials = [
  {
    quote:
      "You’ll smile for the first two minutes — then wonder if breathing is optional. Somehow you’ll still have the best time… and book the next class.",
    name: "Community member",
    role: "Shared publicly about @ghambir sessions",
  },
  {
    quote:
      "Open-air Zumba with Shakti Gambhir raised the spirit of self-love — high energy, city personalities, and a celebration of healthy living.",
    name: "IndulgExpress",
    role: "SteppinOut · Love is in the Air coverage",
  },
  {
    quote:
      "Through Zumba, Shakti communicates love and respect for all — making dance an extension of people, not just another routine.",
    name: "Muskan Agarwal",
    role: "Medium feature · Move like it’s your dream",
  },
] as const;

export const instagramHighlights = [
  {
    title: "Kids Dance · YMC",
    caption: "Every Wednesday · Ages 4–8 · Auckland Square",
    href: "https://www.instagram.com/ghambir/",
    image: u("photo-1503454537195-1dcabb73ffb9"),
  },
  {
    title: "Zumba Energy",
    caption: "Miss half the steps. Still have the best time.",
    href: "https://www.instagram.com/ghambir/",
    image: u("photo-1518310383802-640c2de311b2"),
  },
  {
    title: "Bloom with Beats",
    caption: "Music, movement & friendships for little stars",
    href: "https://www.instagram.com/ghambir/",
    image: u("photo-1533174072545-7a4b6ad7a6c3"),
  },
  {
    title: "Stage Moments",
    caption: "Large-stage performances across Kolkata",
    href: "https://www.instagram.com/ghambir/",
    image: u("photo-1492684223066-81342ee5ff30"),
  },
  {
    title: "Dance Fitness",
    caption: "Cardio that feels like celebration",
    href: "https://www.instagram.com/ghambir/",
    image: u("photo-1508700929628-666bc8bd84ea"),
  },
  {
    title: "Pilates Focus",
    caption: "Strength · Core · Mobility",
    href: "https://www.instagram.com/ghambir/",
    image: u("photo-1599901860904-17e6ed7083a0"),
  },
] as const;

export const serviceOptions = [
  "Zumba Classes",
  "Pilates",
  "Dance Fitness",
  "Kids Dance Programs",
  "Wedding Choreography",
  "Corporate Wellness",
  "Stage Shows",
  "Workshops",
  "Other",
] as const;
