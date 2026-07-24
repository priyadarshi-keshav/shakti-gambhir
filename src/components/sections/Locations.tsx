"use client";

import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";
import { collaborations, locations } from "@/lib/content";

export function Locations() {
  return (
    <section id="locations" className="section-pad relative bg-background">
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-yellow/10 blur-[130px]"
      />
      <div className="container-max">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow">
            Where To Find Me
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Studio <span className="text-gradient">locations &amp; schedule</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="aspect-[16/9] w-full overflow-hidden border-b border-border">
                <iframe
                  src={location.mapEmbed}
                  title={`Map showing ${location.name}, ${location.area}`}
                  className="h-full w-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {location.name}
                </h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
                  <MapPin className="h-4 w-4 text-yellow" aria-hidden="true" />
                  {location.area}
                </p>

                <ul className="mt-5 space-y-3">
                  {location.schedule.map((item) => (
                    <li
                      key={`${item.day}-${item.time}`}
                      className="flex items-start gap-3 rounded-xl border border-border bg-background/60 px-4 py-3"
                    >
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-purple" aria-hidden="true" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{item.day}</p>
                        <p className="text-xs text-muted">
                          {item.time} · {item.note}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
            Collaborations &amp; Partners
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            {collaborations.map((name) => (
              <span
                key={name}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/80"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Locations;
