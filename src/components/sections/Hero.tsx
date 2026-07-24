"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const words = ["Move.", "Dance.", "Transform."];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full items-end overflow-hidden bg-background lg:items-center"
    >
      <div className="absolute inset-0 -z-20 bg-noise" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_70%_40%,rgba(155,77,255,0.22),transparent_55%),radial-gradient(ellipse_at_20%_80%,rgba(245,224,0,0.12),transparent_50%)]"
      />

      <motion.div
        aria-hidden="true"
        className="absolute -left-24 top-24 -z-10 h-72 w-72 rounded-full bg-yellow/20 blur-[100px] animate-pulse-glow sm:h-96 sm:w-96"
        animate={{ x: [0, 20, 0], y: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -right-16 bottom-10 -z-10 h-80 w-80 rounded-full bg-purple/25 blur-[110px] animate-pulse-glow sm:h-[26rem] sm:w-[26rem]"
        animate={{ x: [0, -20, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container-max relative grid w-full items-end gap-8 px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:px-12 lg:pb-24 lg:pt-28">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-yellow backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Kolkata&apos;s High-Energy Fitness Coach
          </motion.div>

          <p className="mt-8 font-display text-lg font-semibold uppercase tracking-[0.3em] text-white/70 sm:text-xl">
            Shakti Gambhir
          </p>

          <h1 className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-display text-5xl font-bold leading-[1.05] text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            {words.map((word, index) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 * index, ease: "easeOut" }}
                className={index === 1 ? "text-gradient" : undefined}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 max-w-xl text-balance text-base text-white/80 sm:text-lg md:text-xl"
          >
            Professional Zumba Instructor <span aria-hidden="true">|</span> Pilates Coach{" "}
            <span aria-hidden="true">|</span> Dance Choreographer{" "}
            <span aria-hidden="true">|</span> Fitness Event Specialist
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button asChild size="lg">
              <a href="#contact">
                Book a Session
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="#locations">Join Classes</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">
                <PhoneCall className="h-4 w-4" aria-hidden="true" />
                Contact Now
              </a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] neon-ring">
            <Image
              src="/images/shakti/shakti-portrait.jpg"
              alt="Shakti Gambhir mid-jump in Zumba gear — energetic Kolkata fitness coach"
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 90vw"
              className="object-cover object-[center_20%]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/20"
            />
            <div
              aria-hidden="true"
              className="absolute -inset-x-8 bottom-0 h-24 bg-gradient-to-t from-background to-transparent lg:hidden"
            />
          </div>
          <motion.div
            aria-hidden="true"
            className="absolute -bottom-4 -left-4 hidden h-24 w-24 rounded-2xl bg-yellow sm:block"
            animate={{ rotate: [0, 4, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute -right-3 top-10 hidden h-16 w-16 rounded-full bg-purple/80 blur-[1px] sm:block"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
