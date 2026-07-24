export const locations = [
  {
    id: "fitling",
    name: "The Fitling Studio",
    area: "Salt Lake, Kolkata",
    schedule: [
      { day: "Monday–Thursday", time: "9:30 AM – 10:30 AM", note: "Zumba / Dance Fitness" },
    ],
    mapQuery: "The Fitling Studio CF-64 Sector 1 Salt Lake Kolkata",
    mapEmbed:
      "https://www.google.com/maps?q=The+Fitling+Studio+Salt+Lake+Kolkata&output=embed",
  },
  {
    id: "ymc",
    name: "YMC Studio",
    area: "Auckland Square, Kolkata",
    schedule: [
      { day: "Friday", time: "8:30 AM – 9:30 AM", note: "Adult fitness session" },
      { day: "Wednesday", time: "Kids Groove Classes", note: "Ages 4–8 · Freestyle dance" },
    ],
    mapQuery: "Auckland Square Kolkata",
    mapEmbed: "https://www.google.com/maps?q=Auckland+Square+Kolkata&output=embed",
  },
] as const;

export const collaborations = [
  "The Stadel (Aqua Zumba)",
  "Kolkata wellness events",
  "Community fitness festivals",
  "Bless VIP Events",
  "Bop & Blink",
] as const;

export const whyChoose = [
  { title: "Certified Instructor", detail: "BDC New York graduate with a decade of Zumba coaching" },
  { title: "Years of Experience", detail: "10+ years inspiring Kolkata’s fitness community" },
  { title: "Thousands of Participants", detail: "Packed studio floors, open-air sessions & festivals" },
  { title: "Kids & Adults", detail: "Programs designed for every age and energy level" },
  { title: "Corporate Programs", detail: "Team wellness that actually gets people moving" },
  { title: "Wedding Specialist", detail: "Sangeet and bridal choreography with stage polish" },
  { title: "High Energy Sessions", detail: "Music-led classes that feel like celebration" },
  { title: "Personalized Coaching", detail: "Individual attention that builds lasting confidence" },
] as const;
