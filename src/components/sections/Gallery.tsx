"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { cn } from "@/lib/utils";
import { galleryCategories, galleryItems } from "@/lib/content";

export function Gallery() {
  const [activeCategory, setActiveCategory] = React.useState<(typeof galleryCategories)[number]>(
    "All",
  );
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);

  const filteredItems = React.useMemo(
    () =>
      activeCategory === "All"
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  const slides = React.useMemo(
    () => filteredItems.map((item) => ({ src: item.src, alt: item.alt })),
    [filteredItems],
  );

  return (
    <section id="gallery" className="section-pad relative bg-background">
      <div className="container-max">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow">Gallery</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Moments of <span className="text-gradient">movement &amp; energy</span>
          </h2>
        </div>

        <div
          role="tablist"
          aria-label="Filter gallery by category"
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {galleryCategories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors sm:text-sm",
                  isActive
                    ? "border-yellow bg-yellow text-black"
                    : "border-white/15 bg-white/5 text-white/70 hover:border-yellow/50 hover:text-foreground",
                )}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {filteredItems.map((item, index) => (
            <motion.button
              key={item.src}
              type="button"
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={() => setLightboxIndex(index)}
              className="group relative aspect-square overflow-hidden rounded-xl border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label={`View larger image: ${item.alt}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 24vw, (min-width: 640px) 30vw, 45vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/40 group-hover:opacity-100">
                <Expand className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <Lightbox
        open={lightboxIndex !== null}
        index={lightboxIndex ?? 0}
        close={() => setLightboxIndex(null)}
        slides={slides}
      />
    </section>
  );
}

export default Gallery;
