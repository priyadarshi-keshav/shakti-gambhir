"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Quote } from "lucide-react";
import { aboutHighlights } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="absolute -left-32 top-1/3 -z-10 h-72 w-72 rounded-full bg-purple/15 blur-[120px]"
      />
      <div className="container-max grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="neon-ring relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/hero/portrait.jpg"
              alt="Portrait of Shakti Gambhir, Zumba instructor and dance choreographer"
              fill
              sizes="(min-width: 1024px) 420px, 90vw"
              className="object-cover"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -bottom-6 -right-6 hidden h-28 w-28 rounded-2xl bg-yellow/90 shadow-[0_0_40px_rgba(245,224,0,0.4)] sm:block"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow">
            About Shakti
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            From Kolkata&apos;s comfort zone to{" "}
            <span className="text-gradient">Broadway-trained energy</span>
          </h2>

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
            <p>
              Shakti Gambhir stepped out of his comfort zone in Kolkata and travelled to Kathmandu
              to train intensively in Zumba — a leap of faith that set the course for a decade-long
              career in dance fitness. He went on to graduate from the legendary{" "}
              <strong className="text-foreground">Broadway Dance Center in New York</strong>,
              sharpening his craft alongside some of the best choreographers in the world.
            </p>
            <p>
              For <strong className="text-foreground">10+ years</strong>, Shakti has led Zumba,
              Pilates, and dance fitness sessions across Kolkata — building a community that shows
              up for the music as much as the movement. When the pandemic closed studio doors, he
              took his classes online, keeping his community moving, motivated, and connected
              through uncertain times.
            </p>
            <p>
              His philosophy is simple: dance is an extension of{" "}
              <strong className="text-foreground">love, respect, and community</strong> — not just
              another workout. That energy has earned coverage in the{" "}
              <strong className="text-foreground">Times of India</strong> and{" "}
              <strong className="text-foreground">IndulgExpress&apos; SteppinOut</strong>, plus
              collaborations like Aqua Zumba at{" "}
              <strong className="text-foreground">The Stadel</strong> and premium event hosting
              with <strong className="text-foreground">Bless VIP Events</strong>.
            </p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {aboutHighlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2.5 rounded-xl border border-border bg-card/60 px-4 py-3 text-sm text-foreground"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-yellow" aria-hidden="true" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <blockquote className="mt-8 flex gap-3 border-l-2 border-purple/60 pl-4 text-sm italic text-white/80 sm:text-base">
            <Quote className="mt-1 h-5 w-5 shrink-0 text-purple" aria-hidden="true" />
            <span>
              &ldquo;Through Zumba, I want to communicate love and respect for everyone I dance
              with — making every session an extension of people, not just another routine.&rdquo;
            </span>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
