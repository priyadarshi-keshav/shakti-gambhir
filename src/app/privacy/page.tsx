import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}'s portfolio and booking website.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main id="main" className="section-pad container-max pt-28">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-yellow">Legal</p>
      <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
      <p className="mt-4 max-w-2xl text-muted">Last updated: July 24, 2026</p>

      <div className="mt-10 max-w-3xl space-y-6 text-sm leading-relaxed text-white/80">
        <p>
          This website ({siteConfig.url}) is operated for {siteConfig.name}. We collect only the
          information you voluntarily submit through the contact form — typically your name, email,
          phone, preferred service, date, and message — so we can respond to class and event inquiries.
        </p>
        <p>
          Form submissions may be processed by our hosting provider (Vercel) and logged for operational
          reliability. We do not sell personal data. Analytics, if enabled later, will be disclosed here.
        </p>
        <p>
          Social platforms you visit via our links (Instagram, Facebook, Google Maps) have their own
          privacy policies. Stock photography used for atmospheric gallery imagery is licensed via
          Unsplash and is attributed in the project repository.
        </p>
        <p>
          To request deletion of an inquiry you submitted, email{" "}
          <a className="text-yellow underline-offset-2 hover:underline" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>{" "}
          or message {siteConfig.instagramHandle} on Instagram.
        </p>
        <p>
          <Link href="/" className="text-yellow underline-offset-2 hover:underline">
            ← Back to home
          </Link>
        </p>
      </div>
    </main>
  );
}
