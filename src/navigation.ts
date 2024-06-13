import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { Pathnames } from "next-intl/routing";

export const locales = ["en", "vn"] as const; // Add this type declaration
export const localePrefix = "always";

const pathnames: Pathnames<typeof locales> = {
  "/": "/",
  pathnames: {
    en: "/en",
    vn: "/vn",
  },
};

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
