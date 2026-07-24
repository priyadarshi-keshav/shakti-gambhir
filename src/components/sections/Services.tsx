"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="services" className="section-pad relative bg-black">
      <div className="container-max">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow">
            What I Offer
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Services built for <span className="text-gradient">every kind of mover</span>
          </h2>
          <p className="mt-4 text-sm text-muted sm:text-base">
            From first-time Zumba beginners to VIP stage performances — every session is designed
            with energy, precision, and heart.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.a
              key={service.id}
              href="#contact"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-yellow/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-yellow opacity-0 transition-opacity group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-1.5 text-xs text-white/70">
                      <CheckCircle2 className="h-3.5 w-3.5 text-purple" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
