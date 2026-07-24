"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { z } from "zod";
import { CheckCircle2, Mail, MapPin, MessageCircle, XCircle } from "lucide-react";
import { InstagramIcon } from "@/components/icons/social-icons";
import { locations, serviceOptions } from "@/lib/content";
import { buildWhatsAppUrl, siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/form-fields";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.email("Enter a valid email address"),
  phone: z.string().min(7, "Enter a valid phone number"),
  service: z.enum(serviceOptions, "Please choose a service"),
  preferredDate: z.string().optional(),
  message: z.string().min(10, "Tell me a little more (10+ characters)"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

type SubmitState = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = React.useState<SubmitState>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: undefined,
      preferredDate: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-pad relative overflow-hidden bg-black">
      <div
        aria-hidden="true"
        className="absolute -left-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-purple/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-16 top-0 -z-10 h-72 w-72 rounded-full bg-yellow/15 blur-[110px]"
      />

      <div className="container-max grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow">
            Get In Touch
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Let&apos;s <span className="text-gradient">start moving</span> together
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base">
            Have a question about classes, events, or private choreography? Send a message and
            I&apos;ll get back to you shortly.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5 text-sm text-foreground transition hover:border-yellow/50"
            >
              <Mail className="h-4 w-4 text-yellow" aria-hidden="true" />
              {siteConfig.email}
            </a>

            {siteConfig.whatsapp ? (
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5 text-sm text-foreground transition hover:border-yellow/50"
              >
                <MessageCircle className="h-4 w-4 text-yellow" aria-hidden="true" />
                WhatsApp · +91 98369 24593
              </a>
            ) : null}

            {locations.map((location) => (
              <div
                key={location.id}
                className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3.5 text-sm text-foreground"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-purple" aria-hidden="true" />
                <div>
                  <p className="font-semibold">{location.name}</p>
                  <p className="text-xs text-muted">{location.area}</p>
                </div>
              </div>
            ))}

            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5 text-sm text-foreground transition hover:border-yellow/50"
            >
              <InstagramIcon className="h-4 w-4 text-yellow" aria-hidden="true" />
              {siteConfig.instagramHandle}
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="rounded-2xl border border-border bg-card p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Your name" autoComplete="name" {...register("name")} />
              {errors.name ? (
                <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>
              ) : null}
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                {...register("email")}
              />
              {errors.email ? (
                <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>
              ) : null}
            </div>

            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 98765 43210"
                autoComplete="tel"
                {...register("phone")}
              />
              {errors.phone ? (
                <p className="mt-1.5 text-xs text-red-400">{errors.phone.message}</p>
              ) : null}
            </div>

            <div>
              <Label htmlFor="service">Service</Label>
              <select
                id="service"
                defaultValue=""
                className="flex h-12 w-full rounded-xl border border-white/15 bg-white/5 px-4 text-sm text-white outline-none transition focus:border-yellow/60 focus:ring-2 focus:ring-yellow/20"
                {...register("service")}
              >
                <option value="" disabled className="bg-black text-white/50">
                  Select a service
                </option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option} className="bg-black text-white">
                    {option}
                  </option>
                ))}
              </select>
              {errors.service ? (
                <p className="mt-1.5 text-xs text-red-400">{errors.service.message}</p>
              ) : null}
            </div>

            <div className="sm:col-span-2">
              <Label htmlFor="preferredDate">Preferred Date (optional)</Label>
              <Input id="preferredDate" type="date" {...register("preferredDate")} />
            </div>

            <div className="sm:col-span-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell me about your goals, event, or class interest..."
                {...register("message")}
              />
              {errors.message ? (
                <p className="mt-1.5 text-xs text-red-400">{errors.message.message}</p>
              ) : null}
            </div>
          </div>

          <Button type="submit" size="lg" className="mt-6 w-full" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Send Message"}
          </Button>

          {status === "success" ? (
            <p
              role="status"
              className="mt-4 flex items-center gap-2 rounded-xl border border-yellow/30 bg-yellow/10 px-4 py-3 text-sm text-yellow"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
              Thanks! Your message has been sent — I&apos;ll be in touch soon.
            </p>
          ) : null}

          {status === "error" ? (
            <p
              role="alert"
              className="mt-4 flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
            >
              <XCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              Something went wrong. Please try again or email {siteConfig.email} directly.
            </p>
          ) : null}
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
