"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BadgeCheck, BriefcaseBusiness, Hammer, House, Phone } from "lucide-react";

const links = [
  { href: "/vara-tjanster", label: "Våra tjänster", short: "Tjänster", icon: Hammer },
  { href: "/om-oss", label: "Om oss", short: "Om oss", icon: BriefcaseBusiness },
  { href: "/licenser", label: "Licenser", short: "Licenser", icon: BadgeCheck },
  { href: "/kontakt", label: "Kontakt", short: "Kontakt", icon: Phone },
];

const mobileLinks = [
  { href: "/", label: "Hem", icon: House },
  ...links.map(({ href, short, icon }) => ({ href, label: short, icon })),
];

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function DesktopNavLinks() {
  const pathname = usePathname();

  return (
    <>
      <ul className="hidden items-center gap-7 text-sm font-medium md:flex">
        {links.slice(0, 3).map((item) => {
          const active = isActivePath(pathname, item.href);
          return (
            <li key={item.href}>
              <Link
                className={`transition ${
                  active ? "text-white" : "text-[#8e8d91] hover:text-white"
                }`}
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="hidden items-center gap-2 md:flex">
        <Link
          href="/kontakt"
          className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
            isActivePath(pathname, "/kontakt")
              ? "border-white/40 bg-white/12 text-white"
              : "border-white/20 bg-white/5 text-white hover:bg-white/10"
          }`}
        >
          Kontakta oss
        </Link>
      </div>
    </>
  );
}

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-white/15 bg-[#06080fb3] px-4 py-3 backdrop-blur-xl md:hidden">
      <ul className="mx-auto flex max-w-6xl items-center justify-around text-xs font-medium">
        {mobileLinks.map((item) => {
          const active = isActivePath(pathname, item.href);
          const Icon = item.icon;
          return (
            <li key={item.href}>
              <Link
                className={`flex flex-col items-center gap-1 transition ${
                  active ? "text-white" : "text-[#8e8d91] hover:text-white"
                }`}
                href={item.href}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
