"use client";
import { useTranslations } from "next-intl";
import {
  ArrowLongRightIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/16/solid";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const t = useTranslations("Index");
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };

    // Initial check
    checkDarkMode();

    // Setup MutationObserver
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Cleanup function
    return () => {
      observer.disconnect();
    };
  }, []);

  const renderContact = useCallback(() => {
    return (
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-8 w-full justify-between">
        <button className="border px-8 py-4 pl-12 relative rounded-full border-silver shadow-md shadow-black dark:shadow-white dark:bg-black bg-white w-full text-end text-black dark:text-white">
          <div className="absolute left-4 top-3">
            <Image
              src={`/images/github-mark${isDarkMode ? "-white" : ""}.svg`}
              alt="GitHub"
              width={16}
              height={16}
              className={"w-8 h-8"}
            />
          </div>
          Github
        </button>
        <button className="border px-8 py-4 pl-12 relative rounded-full border-silver shadow-md shadow-black dark:shadow-white dark:bg-black bg-white w-full text-end text-black dark:text-white">
          <div className="absolute left-4 top-3">
            <Image
              src={`/images/email${isDarkMode ? "-white" : "-dark"}.svg`}
              alt="Email"
              width={16}
              height={16}
              className={"w-8 h-8"}
            />
          </div>
          Email
        </button>
        <button className="border px-8 py-4 pl-12 relative rounded-full border-silver shadow-md shadow-black dark:shadow-white dark:bg-black bg-white w-full text-end text-black dark:text-white">
          <div className="absolute left-4 top-3">
            <Image
              src={`/images/linkedin${isDarkMode ? "-white" : "-dark"}.svg`}
              alt="LinkedIn"
              width={16}
              height={16}
              className={"w-8 h-8"}
            />
          </div>
          LinkedIn
        </button>
        <button className="border px-8 py-4 pl-12 relative rounded-full border-silver shadow-md shadow-black dark:shadow-white dark:bg-black bg-white w-full text-end text-black dark:text-white">
          <div className="absolute left-4 top-3">
            <Image
              src={`/images/facebook${isDarkMode ? "-white" : "-dark"}.svg`}
              alt="Facekbook"
              width={16}
              height={16}
              className={"w-8 h-8"}
            />
          </div>
          Facebook
        </button>
      </div>
    );
  }, [isDarkMode]);

  const renderSytlesIcon = useCallback(() => {
    return (
      <div className=" relative w-16 h-16 border bg-white dark:bg-black rounded-full m-auto border-silver">
        <div className="flex items-center w-full h-full justify-center">
          {!isDarkMode ? (
            <a href="https://github.com/anhquan02">
              <Image
                src={"/images/github-mark.svg"}
                alt="GitHub"
                width={24}
                height={24}
                className={"w-8 h-8"}
              />
            </a>
          ) : (
            <a href="https://github.com/anhquan02">
              <Image
                src={"/images/github-mark-white.svg"}
                alt="GitHub"
                width={24}
                height={24}
                className={"w-8 h-8"}
              />
            </a>
          )}
          <div className=" absolute -right-8 bg-black dark:bg-white w-16 h-16 border rounded-full m-auto border-silver text-black">
            <div className="relative w-16 h-16 items-center text-white dark:text-black">
              <ArrowUpRightIcon className="w-8 m-4" />
            </div>
          </div>
        </div>
      </div>
    );
  }, [isDarkMode]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl p-24 text-black dark:text-white">
      <div id="head" className="sm:flex flex-col hidden w-full">
        <div className="flex flex-row  w-full items-center">
          <div className="flex w-3/5">
            <h1 className="text-bold md:text-[5rem] lg:text-[7rem] text-[4rem]">
              Full-stack
            </h1>
          </div>
          <div className="w-2/5 flex align-middle gap-2">
            <button className="dark:bg-white dark:text-black sm:px-4 md:px-8 lg:px-12 py-2 rounded-full font-semibold">
              Projects
            </button>
            <button className="dark:bg-white dark:text-black sm:px-2 md:px-4 lg:px-8 py-2 rounded-full font-semibold">
              {/* arrow */}
              <ArrowLongRightIcon className="w-6 " />
            </button>
          </div>
        </div>
        <div className="flex flex-row w-full">
          <p className="w-2/5 h-full block my-auto align-middle text-silver">
            My goal is to write{" "}
            <span className="text-black dark:text-white">
              maintainable, clean, and understandable code{" "}
            </span>
            to process development was enjoyable
          </p>
          <div className="w-3/5">
            <h1 className="text-bold md:text-[5rem] lg:text-[7rem] text-[4rem]">
              Developer
            </h1>
          </div>
        </div>
      </div>
      <div id="head-mb" className="relative sm:hidden w-full">
        <div className="flex ">Full-stack</div>
        Developer
      </div>
      <div className="my-8">{renderContact()}</div>
      <div id="about" className="py-24">
        <div className="flex flex-row w-full">
          <h3 className="text-black dark:text-white w-1/2 ">
            ... About me ...
          </h3>
          <p className="text-silver w-1/2">
            Hello! I&apos;m Le Quan, I&apos;m a{" "}
            <span className="text-black dark:text-white">
              full-stack developer
            </span>
            . More than{" "}
            <span className="text-black dark:text-white">2 years</span>{" "}
            experience in web development. I&apos;m{" "}
            <span className="text-black dark:text-white">
              passionate about web development
            </span>{" "}
            and always want to learn new things. I&apos;m{" "}
            <span className="text-black dark:text-white">
              always looking for new challenges and opportunities
            </span>{" "}
            to improve my skills.
          </p>
        </div>
        <div className="flex flex-row gap-8 w-full pt-16">
          <div className="flex flex-col w-3/5 gap-4 mr-16 md:mr-20 lg:mr-24">
            <div className="w-full shadow shadow-black dark:shadow-white border dark:border-silver p-4 rounded-2xl text-silver dark:hover:bg-white dark:hover:text-black hover:cursor-pointer hover:bg-black hover:text-white">
              <h2 className="font-semibold text-lg">Front-end</h2>
              <h3 className="text-base mt-2">
                TypeScript / React / NextJS / JSP
              </h3>
            </div>
            <div className="flex flex-row w-full">
              <div className="w-1/2 shadow shadow-black dark:shadow-white border dark:border-silver p-4 rounded-2xl text-silver dark:hover:bg-white dark:hover:text-black hover:cursor-pointer hover:bg-black hover:text-white">
                <h2 className="font-semibold text-lg">Styles</h2>
                <h3 className="text-base mt-2">
                  Tailwindcss / MUI / Material UI / SCSS
                </h3>
              </div>
              <div className="flex w-1/2">{renderSytlesIcon()}</div>
            </div>
            <div className="w-full shadow shadow-black dark:shadow-white border dark:border-silver p-4 rounded-2xl text-silver dark:hover:bg-white dark:hover:text-black hover:cursor-pointer hover:bg-black hover:text-white">
              <h2 className="font-semibold text-lg">Back-end</h2>
              <h3 className="text-base mt-2">
                Java / Node / Python / Rust / MySQL / Oracle / MongoDB /
                Microservices
              </h3>
            </div>
            <div className="flex flex-row w-full">
              <div className="w-1/2 h-full flex">
                <p className="text-silver block my-auto">
                  Some of my{" "}
                  <span className="text-black dark:text-white">
                    favorite technologies, topics, tools
                  </span>{" "}
                  that i worked with
                </p>
              </div>
              <div className="w-1/2 shadow shadow-black dark:shadow-white border dark:border-silver p-4 rounded-2xl text-silver dark:hover:bg-white dark:hover:text-black hover:cursor-pointer hover:bg-black hover:text-white">
                <h2 className="font-semibold text-lg">DevOps</h2>
                <h3 className="text-base mt-2">
                  Docker / Linux / Bash / nvm / Git{" "}
                </h3>
              </div>
            </div>
          </div>
          <div className=" ">
            <img
              src="/images/4780.jpg"
              className="rounded-3xl w-[24rem] h-[24rem] object-none shadow-md shadow-black dark:shadow-white"
              alt="developer"
            />
          </div>
        </div>
        <div className="mt-12 flex flex-col">
          <h1 className="text-bold md:text-[5rem] lg:text-[7rem] text-[4rem] text-end">
            Work
          </h1>
          <hr className="border border-silver" />
          {/* table */}
          <div className="flex flex-col w-full gap-1 text-lg">
            <div className="flex flex-row w-full hover:bg-black hover:text-white dark:hover:bg-white py-4 pt-8 dark:hover:text-black">
              <div className=" w-1/5">10/2021 - Now</div>
              <div className=" w-2/5">FPT Information Systeam</div>
              <div className=" w-2/5">
                Fullstack Developer | Java , NodeJs & NextJS
              </div>
            </div>
            <hr className="border border-silver" />

            <div className="flex flex-row w-full hover:bg-black hover:text-white dark:hover:bg-white py-4 pt-8 dark:hover:text-black">
              <div className=" w-1/5">10/2022 - 11/2022</div>
              <div className=" w-2/5">Hackathon</div>
              <div className=" w-2/5">Fullstack Developer | Rust + NextJS</div>
            </div>
            <hr className="border border-silver" />

            <div className="flex flex-row w-full hover:bg-black hover:text-white dark:hover:bg-white py-4 pt-8 dark:hover:text-black">
              <div className=" w-1/5">2/2021 - 8/2021</div>
              <div className=" w-2/5">FPT Polytechnic Lab</div>
              <div className=" w-2/5">Fullstack Developer | Java Servlet</div>
            </div>
            <hr className="border border-silver" />
          </div>
        </div>
      </div>
      <div id="projects" className="">
        Projects
      </div>
      <div id="contacts" className="Contact"></div>
    </main>
  );
}
