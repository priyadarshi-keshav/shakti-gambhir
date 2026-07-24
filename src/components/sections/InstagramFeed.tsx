"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { InstagramIcon } from "@/components/icons/social-icons";
import { instagramHighlights } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function InstagramFeed() {
  return (
    <section aria-labelledby="instagram-heading" className="section-pad relative bg-black">
      <div className="container-max">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow">
            On Instagram
          </p>
          <h2
            id="instagram-heading"
            className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl"
          >
            Follow the energy{" "}
            <span className="text-gradient">{siteConfig.instagramHandle}</span>
          </h2>
          <p className="max-w-xl text-sm text-muted sm:text-base">
            A curated look at recent classes, events, and community moments. For the full,
            authentic feed — including reels and stories — head straight to Instagram.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {instagramHighlights.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-xl border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label={`${item.title} — view on Instagram`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 16vw, (min-width: 640px) 30vw, 45vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/10 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                <p className="text-xs font-semibold text-foreground">{item.title}</p>
                <p className="mt-0.5 line-clamp-2 text-[11px] text-white/70">{item.caption}</p>
              </div>
              <div className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur">
                <InstagramIcon className="h-3.5 w-3.5" aria-hidden="true" />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild variant="secondary" size="lg">
            <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer">
              <InstagramIcon className="h-4 w-4" aria-hidden="true" />
              Follow {siteConfig.instagramHandle}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default InstagramFeed;
