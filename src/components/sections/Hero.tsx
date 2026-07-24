"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { remoteImages } from "@/lib/content";

const words = ["Move.", "Dance.", "Transform."];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-background"
    >
      <div className="absolute inset-0 -z-20">
        <Image
          src={remoteImages.heroBg}
          alt="Shakti Gambhir leading a high-energy Zumba dance fitness class"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />
        <div className="absolute inset-0 bg-noise opacity-80" />
      </div>

      <motion.div
        aria-hidden="true"
        className="absolute -left-24 top-24 -z-10 h-72 w-72 rounded-full bg-yellow/25 blur-[100px] animate-pulse-glow sm:h-96 sm:w-96"
        animate={{ x: [0, 20, 0], y: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -right-16 bottom-10 -z-10 h-80 w-80 rounded-full bg-purple/30 blur-[110px] animate-pulse-glow sm:h-[26rem] sm:w-[26rem]"
        animate={{ x: [0, -20, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container-max relative px-5 py-32 sm:px-8 lg:px-12">
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
          className="mt-8 max-w-2xl text-balance text-base text-white/80 sm:text-lg md:text-xl"
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

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent"
      />
    </section>
  );
}

export default Hero;
