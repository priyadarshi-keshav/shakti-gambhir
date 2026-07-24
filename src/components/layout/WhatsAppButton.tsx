"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site";

function buildWhatsAppUrl(rawNumber: string) {
  const digits = rawNumber.replace(/[^\d]/g, "");
  const message = encodeURIComponent(
    `Hi Shakti! I'd like to know more about your classes.`,
  );
  return `https://wa.me/${digits}?text=${message}`;
}

export function WhatsAppButton() {
  const hasWhatsapp = Boolean(siteConfig.whatsapp);
  const href = hasWhatsapp ? buildWhatsAppUrl(siteConfig.whatsapp) : siteConfig.instagram;
  const label = hasWhatsapp
    ? "Chat with Shakti Gambhir on WhatsApp"
    : "Message Shakti Gambhir on Instagram";

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      initial={{ opacity: 0, scale: 0.7, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.6 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-yellow text-black shadow-[0_0_30px_rgba(245,224,0,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:bottom-8 sm:right-8"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </motion.a>
  );
}

export default WhatsAppButton;
