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
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-behance" viewBox="0 0 16 16">
  <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391s.497.426.641.747c.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922s.461.957.461 1.563c0 .496-.105.922-.285 1.278a2.3 2.3 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.3 5.3 0 0 1-1.278.176L0 12.803V3zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a1 1 0 0 0-.32-.355 1.8 1.8 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305zm6.858-.035q.428.427 1.278.426c.39 0 .746-.106 1.032-.286q.426-.32.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.1 4.1 0 0 1-1.527-.285 2.8 2.8 0 0 1-1.137-.782 2.85 2.85 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4 4 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396m2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176s-.356.25-.496.39a.96.96 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978z"/>
</svg>
          </a>
        </div>
      </div>
    </div>
  );
}
