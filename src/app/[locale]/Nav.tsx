"use client";
import { Link, usePathname, useRouter } from "@/navigation";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Nav() {
  const [isTop, setIsTop] = useState(true);
  const [nightMode, setNightMode] = useState(true);
  const [locale, setLocale] = useState<string>("en");
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const params = useParams();
  useEffect(() => {
    setLocale(currentLocale);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (nightMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [nightMode]);

  return (
    <div
      className={`sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-300 lg:z-50  ${
        isTop
          ? "bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent"
          : "bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl flex items-center justify-between gap-3 h-[--header-height] py-4 text-slate-800 dark:text-white">
        <div className="lg:flex-1 flex items-center gap-1.5">
          <a href="#">
            <h1>
              Anh Quan
              <br />
              Ciuz
            </h1>
          </a>
        </div>
        <ul className="items-center gap-x-8 hidden lg:flex">
          <li className="relative hover:cursor-pointer">About</li>
          <li className="relative hover:cursor-pointer">Projects</li>
          <li className="relative hover:cursor-pointer">Contacts</li>
        </ul>
        <div className="flex items-center justify-end lg:flex-1 gap-3">
          <div className="relative inline-flex">
            {nightMode ? (
              <MoonIcon
                className="w-5 h-5 text-white"
                onClick={() => setNightMode(false)}
              />
            ) : (
              <SunIcon className="w-5 h-5" onClick={() => setNightMode(true)} />
            )}
          </div>
          <div className="relative inline-flex">
            {locale == "en" && (
              <Link href={pathname} locale="vn">
                EN
              </Link>
            )}
            {locale == "vn" && (
              <Link href={pathname} locale="en">
              VN
            </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
