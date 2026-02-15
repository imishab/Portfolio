"use client";
import Link from "next/link";
import { PhoneCall, Copy, Linkedin, Github, Instagram } from "lucide-react";
import { useState } from "react";
import aboutData from "@/data/about.json";

export default function ProfileCard() {
  const [copied, setCopied] = useState(false);
  const email = "mishabdev@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2s
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };
  return (
    <div className="rounded-2xl bg-white p-6 shadow transition-shadow hover:shadow-lg dark:bg-black dark:shadow-dark">
      <div className="aspect-1/2 overflow-hidden rounded-lg bg-light  text-center dark:bg-dark-2">
        <img src="/images/me5.png" alt="" className="   " />
      </div>
      <div className="mt-6">
        <h3 className="text-2xl font-semibold dark:text-light">I'm Mishab 👋</h3>
        <p className="mt-2 text-muted dark:text-light/70">
          {aboutData.shortBio}{" "}
          <Link href="/about" className="font-semibold text-dark dark:text-light underline">
            Read More
          </Link>
        </p>
        {/* CTA buttons */}
        <div className="mt-6 flex flex-wrap gap-2">
          <Link
            href="tel:9947154691"
            className="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-black px-6 py-1 font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50"
          >
            <PhoneCall size={20} />
            <span>Make A Call</span>
          </Link>
          <button
            type="button"
            onClick={copyToClipboard}
            className="inline-flex items-center gap-x-2 rounded-lg border border-light bg-transparent px-6 py-4 font-medium text-dark transition [--trigger:focus] hover:bg-light hover:text-black focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:text-light/70 dark:hover:bg-dark dark:hover:text-white"
          >
            <Copy size={20} />
            <span>{copied ? "Copied!" : "Copy Email"}</span>
          </button>
        </div>
        {/* Social */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <a
            href="https://www.linkedin.com/in/mishab-vo/"
            target="_blank"
            className="flex h-10 w-10 items-center justify-center rounded-lg  border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring "
          >
           <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/imishab"
            target="_blank"
            className="flex h-10 w-10 items-center justify-center rounded-lg  border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.instagram.com/i.mishab/"
            target="_blank"
            className="flex h-10 w-10 items-center justify-center rounded-lg  border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://www.behance.net/i-mishab"
            target="_blank"
            className="flex h-10 w-10 items-center justify-center rounded-lg  border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
