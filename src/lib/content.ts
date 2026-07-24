export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#locations", label: "Locations" },
  { href: "#gallery", label: "Gallery" },
  { href: "#events", label: "Events" },
  { href: "#contact", label: "Contact" },
] as const;

export const aboutHighlights = [
  "Broadway Dance Center (New York) graduate",
  "10+ years as a Zumba fitness instructor",
  "Featured in Times of India & IndulgExpress",
  "Aqua Zumba collaborations at The Stadel",
  "VIP & community event hosting",
  "Kids freestyle programs at YMC Studio",
] as const;

export const services = [
  {
    id: "zumba",
    title: "Zumba Classes",
    description:
      "High-energy Latin-inspired dance fitness for every level — from first-timers to advanced movers.",
    points: ["Group sessions", "Corporate wellness", "Beginner friendly", "Advanced choreography"],
    image: "/images/gallery/zumba-1.jpg",
  },
  {
    id: "pilates",
    title: "Pilates",
    description:
      "Strength, core control, and mobility training that builds long, powerful movement patterns.",
    points: ["Strength", "Core", "Mobility"],
    image: "/images/gallery/pilates-1.jpg",
  },
  {
    id: "dance-fitness",
    title: "Dance Fitness",
    description:
      "Cardio dance workouts that feel like a night out — and deliver serious results.",
    points: ["Dance workouts", "Cardio sessions"],
    image: "/images/gallery/dance-1.jpg",
  },
  {
    id: "kids",
    title: "Kids Dance Programs",
    description:
      "Creative movement and freestyle confidence for ages 4–8 at YMC Studio, Auckland Square.",
    points: ["Creative movement", "Dance workshops", "Wednesday kids groove"],
    image: "/images/gallery/kids-1.jpg",
  },
  {
    id: "wedding",
    title: "Wedding Choreography",
    description:
      "Show-stopping sangeet, couple dances, family routines, and bridal entries designed for your story.",
    points: ["Couple dance", "Family dance", "Sangeet choreography", "Bridal entries"],
    image: "/images/gallery/wedding-1.jpg",
  },
  {
    id: "corporate",
    title: "Corporate Wellness",
    description:
      "Team fitness experiences that boost energy, culture, and connection at the workplace.",
    points: ["Team fitness", "Office wellness"],
    image: "/images/gallery/corporate-1.jpg",
  },
  {
    id: "vip",
    title: "VIP Events",
    description:
      "Celebrity, premium fitness, community, and large-stage performances with unforgettable energy.",
    points: ["Celebrity events", "Premium fitness events", "Community events", "Stage shows"],
    image: "/images/gallery/vip-1.jpg",
  },
  {
    id: "workshops",
    title: "Workshops",
    description:
      "Fitness workshops, wellness festivals, and community engagements that leave people glowing.",
    points: ["Fitness workshops", "Community engagement", "Wellness festivals"],
    image: "/images/gallery/stage-1.jpg",
  },
] as const;

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

export const events = [
  {
    title: "Bloom with Beats",
    subtitle: "Kids music, movement & friendship experiences",
    image: "/images/events/bloom-beats.jpg",
    tag: "Community",
  },
  {
    title: "Love is in the Air",
    subtitle: "Open-air Zumba with SteppinOut — covered by TOI & IndulgExpress",
    image: "/images/events/self-love.jpg",
    tag: "Press",
  },
  {
    title: "Aqua Zumba at The Stadel",
    subtitle: "Low-impact, high-energy poolside sessions in Salt Lake",
    image: "/images/events/stadel.jpg",
    tag: "Studio Collab",
  },
  {
    title: "YMC Workshops",
    subtitle: "Creative movement and kids groove at Auckland Square",
    image: "/images/events/ymc-workshop.jpg",
    tag: "Workshop",
  },
  {
    title: "Charity & Community Runs",
    subtitle: "Fitness for causes — virtual runs and wellness festivals",
    image: "/images/events/charity.jpg",
    tag: "Impact",
  },
  {
    title: "VIP Engagements",
    subtitle: "Premium hosting with Bless VIP Events & city celebrations",
    image: "/images/events/vip.jpg",
    tag: "VIP",
  },
] as const;

export const galleryItems = [
  { src: "/images/gallery/zumba-1.jpg", alt: "High-energy Zumba class atmosphere", category: "Zumba" },
  { src: "/images/gallery/zumba-2.jpg", alt: "Group dance fitness session", category: "Zumba" },
  { src: "/images/gallery/pilates-1.jpg", alt: "Pilates strength and core training", category: "Pilates" },
  { src: "/images/gallery/pilates-2.jpg", alt: "Mobility-focused Pilates practice", category: "Pilates" },
  { src: "/images/gallery/dance-1.jpg", alt: "Contemporary dance fitness movement", category: "Dance" },
  { src: "/images/gallery/dance-2.jpg", alt: "Expressive dance performance energy", category: "Dance" },
  { src: "/images/gallery/kids-1.jpg", alt: "Kids creative movement workshop", category: "Kids Workshops" },
  { src: "/images/gallery/kids-2.jpg", alt: "Children dancing with confidence", category: "Kids Workshops" },
  { src: "/images/gallery/corporate-1.jpg", alt: "Corporate team wellness session", category: "Corporate Events" },
  { src: "/images/gallery/wedding-1.jpg", alt: "Wedding choreography celebration", category: "Wedding Choreography" },
  { src: "/images/gallery/stage-1.jpg", alt: "Stage show lighting and performance", category: "Stage Shows" },
  { src: "/images/gallery/vip-1.jpg", alt: "VIP event and live entertainment", category: "VIP Events" },
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
  "VIP Events",
] as const;

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
    image: "/images/gallery/kids-1.jpg",
  },
  {
    title: "Zumba Energy",
    caption: "Miss half the steps. Still have the best time.",
    href: "https://www.instagram.com/ghambir/",
    image: "/images/gallery/zumba-2.jpg",
  },
  {
    title: "Bloom with Beats",
    caption: "Music, movement & friendships for little stars",
    href: "https://www.instagram.com/ghambir/",
    image: "/images/events/bloom-beats.jpg",
  },
  {
    title: "Stage & VIP",
    caption: "Collaborations with Bless VIP Events",
    href: "https://www.instagram.com/ghambir/",
    image: "/images/gallery/vip-1.jpg",
  },
  {
    title: "Dance Fitness",
    caption: "Cardio that feels like celebration",
    href: "https://www.instagram.com/ghambir/",
    image: "/images/gallery/dance-1.jpg",
  },
  {
    title: "Pilates Focus",
    caption: "Strength · Core · Mobility",
    href: "https://www.instagram.com/ghambir/",
    image: "/images/gallery/pilates-1.jpg",
  },
] as const;

export const serviceOptions = [
  "Zumba Classes",
  "Pilates",
  "Dance Fitness",
  "Kids Dance Programs",
  "Wedding Choreography",
  "Corporate Wellness",
  "VIP Events",
  "Workshops",
  "Other",
] as const;
