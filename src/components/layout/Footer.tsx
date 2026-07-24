import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/icons/social-icons";
import { navLinks, services } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-black">
      <div className="container-max grid gap-10 px-5 py-16 sm:px-8 md:grid-cols-4 lg:px-12">
        <div className="md:col-span-2">
          <Link href="#top" className="flex items-center gap-3">
            <Image
              src="/images/brand/mark.svg"
              alt=""
              width={36}
              height={36}
              className="h-9 w-9"
            />
            <span className="font-display text-lg font-semibold text-foreground">
              {siteConfig.name}
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            {siteConfig.description}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Shakti Gambhir on Instagram"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-foreground transition hover:border-yellow/60 hover:text-yellow"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            {siteConfig.facebook ? (
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Shakti Gambhir on Facebook"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-foreground transition hover:border-yellow/60 hover:text-yellow"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            ) : null}
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email Shakti Gambhir"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-foreground transition hover:border-yellow/60 hover:text-yellow"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-yellow"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
            Services
          </h3>
          <ul className="mt-4 space-y-3">
            {services.slice(0, 6).map((service) => (
              <li key={service.id}>
                <a
                  href="#services"
                  className="text-sm text-muted transition-colors hover:text-yellow"
                >
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-max flex flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-muted sm:flex-row sm:px-8 lg:px-12">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="transition-colors hover:text-yellow">
              Privacy Policy
            </Link>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-white/20" />
            <p>
              Designed with <span aria-hidden="true">❤️</span>
              <span className="sr-only">love</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
