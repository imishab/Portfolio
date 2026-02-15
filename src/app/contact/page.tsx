"use client";
import ProfileCard from "@/components/Home/ProfileCard";
import Link from "next/link";
import { PhoneCall, Copy } from "lucide-react";
import { useState } from "react";

export default function Contact() {
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
    <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
      {/* Intro */}
      <div className="">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <ProfileCard />
        </div>
      </div>
      {/* Contact */}
      <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
        <div className="">
          <h2 className="text-3xl font-semibold leading-tight text-dark dark:text-light lg:text-[40px] lg:leading-tight">
            Let's 👋 <span className="text-primary">Work</span> Together
          </h2>
          <p className="mt-4 text-lg text-muted dark:text-light/70">
            I'm here to help if you're searching for a product developer &
            designer to bring your idea to life or a design partner to help take
            your business to the next level.
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
        </div>
        <div className="mt-10 lg:mt-14">
          <h3 className="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
            Connect Me With
          </h3>
          <div className="mt-8 grid grid-cols-[repeat(auto-fit,_minmax(60px,1fr))] gap-2 lg:grid-cols-[repeat(auto-fit,_minmax(80px,1fr))] lg:gap-4">
            <Link
              href="https://www.linkedin.com/in/mishab-vo/"
              target="_black"
              className="grid h-16 place-content-center rounded-lg  p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4"
            >
              <img src="/images/icons/linkedin.png" alt="" className="w-12 " />
            </Link>

            <Link
              href="https://www.facebook.com/i.mishab/"
              target="_black"
              className="grid h-16 place-content-center rounded-lg  p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4"
            >
              <img src="/images/icons/fb.png" alt="" className="w-12 " />
            </Link>

            <Link
              href="https://github.com/imishab"
              target="_black"
              className="grid h-16 place-content-center rounded-lg  p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4"
            >
              <img src="/images/icons/github.png" alt="" className="w-12 " />
            </Link>

            <Link
              href="https://www.instagram.com/i.mishab/"
              target="_black"
              className="grid h-16 place-content-center rounded-lg  p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4"
            >
              <img src="/images/icons/insta.png" alt="" className="w-12 " />
            </Link>

            <Link
              href="https://www.behance.net/i-mishab"
              target="_black"
              className="grid h-16 place-content-center rounded-lg  p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4"
            >
              <img src="/images/icons/behance.png" alt="" className="w-12 " />
            </Link>

            <Link
              href="whatsapp://send?phone=919947154691"
              target="_black"
              className="grid h-16 place-content-center rounded-lg  p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4"
            >
              <img src="/images/icons/whatsapp.png" alt="" className="w-12 " />
            </Link>
          </div>
        </div>
        <div className="mt-10 lg:mt-14">
          <form
            id="contact-form"
            method="post"
            action="assets/php/contact_email.php"
            className="space-y-6 rounded-lg bg-light p-6 dark:bg-dark-2 xl:p-12"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-dark dark:text-light"
                >
                  Name
                </label>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="block w-full rounded-lg border border-gray-200 bg-white px-6 py-4 text-base outline-none transition focus:border-dark focus:ring focus:ring-dark/20 disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:bg-black dark:text-white dark:focus:border-muted dark:focus:ring-white/20"
                />
              </div>
              <div className="">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-dark dark:text-light"
                >
                  Email
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="block w-full rounded-lg border border-gray-200 bg-white px-6 py-4 text-base outline-none transition focus:border-dark focus:ring focus:ring-dark/20 disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:bg-black dark:text-white dark:focus:border-muted dark:focus:ring-white/20"
                />
              </div>
            </div>
            <div className="">
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-dark dark:text-light"
              >
                Subject
              </label>
              <input
                required
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                className="block w-full rounded-lg border border-gray-200 bg-white px-6 py-4 text-base outline-none transition focus:border-dark focus:ring focus:ring-dark/20 disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:bg-black dark:text-white dark:focus:border-muted dark:focus:ring-white/20"
              />
            </div>
            <div className="">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-dark dark:text-light"
              >
                Message
              </label>
              <textarea
                required
                id="message"
                name="message"
                placeholder="Type details about your inquiry"
                rows={4}
                className="block w-full rounded-lg border border-gray-200 bg-white px-6 py-4 text-base outline-none transition focus:border-dark focus:ring focus:ring-dark/20 disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:bg-black dark:text-white dark:focus:border-muted dark:focus:ring-white/20"
                defaultValue={""}
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-primary px-6 py-4 text-center font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50"
            >
              <span>Send Message</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                className="h-5 w-5"
              >
                <path d="M17.5 11.667v-5h-5" />
                <path d="m17.5 6.667-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <div className="status alert hidden" />
          </form>
        </div>
        {/* Map */}
        <div className="mt-10 aspect-video overflow-hidden rounded-lg lg:mt-14">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d41080.60593605049!2d75.84442304400461!3d11.432095628061184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1740330794093!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full object-cover"
          />
        </div>
        {/* FAQ */}
      </div>
    </main>
  );
}
