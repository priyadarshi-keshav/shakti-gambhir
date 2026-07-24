"use client";

import { motion } from "framer-motion";
import {
  Award,
  CalendarHeart,
  HeartHandshake,
  PartyPopper,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { whyChoose } from "@/lib/content";

const icons = [Award, CalendarHeart, Users, HeartHandshake, ShieldCheck, PartyPopper, Zap, Sparkles];

export function WhyChoose() {
  return (
    <section aria-labelledby="why-choose-heading" className="section-pad relative bg-black">
      <div className="container-max">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow">
            Why Choose Shakti
          </p>
          <h2
            id="why-choose-heading"
            className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl"
          >
            Trusted by <span className="text-gradient">thousands of movers</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
                className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-purple/50"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-yellow/20 to-purple/20 text-yellow">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
