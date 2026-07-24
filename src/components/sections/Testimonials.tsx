"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading" className="section-pad relative bg-black">
      <div className="container-max">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow">
            Kind Words
          </p>
          <h2
            id="testimonials-heading"
            className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl"
          >
            What the <span className="text-gradient">community says</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 sm:p-8"
            >
              <Quote className="h-6 w-6 text-purple" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-white/85 sm:text-base">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted">{testimonial.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
