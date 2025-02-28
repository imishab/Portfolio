import ProfileCard from "@/components/Home/ProfileCard";
import React from "react";

export default function Achievements() {
  return (
    <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
      {/* Intro */}
      <div className="">
        <div className=" lg:sticky lg:top-24">
          <ProfileCard />
        </div>
      </div>
      <>
        {/* Blog */}
        <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
          <div className="">
            <h2 className="text-3xl font-semibold leading-tight text-dark dark:text-light  lg:leading-tight">
              My Achievements
            </h2>
            <p className="mt-2 text-lg text-muted dark:text-light/70">
              Dive into my portfolio and discover a world of innovative
              solutions
            </p>
          </div>
          {/* Blog */}
          <div className="mt-10 lg:mt-14">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2">
              <div className="">
                <div className="relative">
                  <a
                    href="#!"
                    className="group block  shadow-lg overflow-hidden rounded-lg"
                  >
                    <img
                      src="/images/certificates/1.png"
                      alt=""
                      className="h-full w-full rounded-lg object-cover transition duration-700 group-hover:scale-105"
                    />
                  </a>
                </div>
                <div className="mt-6">
                  <h2 className="text-xl font-medium xl:text-2xl">
                    <a
                      href="#!"
                      className="inline-block text-dark transition hover:text-primary dark:text-light/70 dark:hover:text-primary"
                    >
                      Web Dev with JS & React JS
                    </a>
                  </h2>
                  <p className="mt-2 text-gray-600">
                    This certificate is issued by Shape AI .
                  </p>
                  <ul className="mt-2 flex flex-wrap items-center gap-2">
                    <li className="relative text-sm text-muted/50 ">
                      <a
                        href="https://www.cert.shapeai.tech/verify/1eypil"
                        target="_blank"
                        className="underline text-black"
                      >
                        View Certificate
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="">
                <div className="relative">
                  <a
                    href="#!"
                    className="group block shadow-lg  overflow-hidden rounded-lg"
                  >
                    <img
                      src="/images/certificates/2.png"
                      alt=""
                      className="h-full w-full rounded-lg object-cover transition duration-700 group-hover:scale-105"
                    />
                  </a>
                </div>
                <div className="mt-6">
                  <h2 className="text-xl font-medium xl:text-2xl">
                    <a
                      href="#!"
                      className="inline-block text-dark transition hover:text-primary dark:text-light/70 dark:hover:text-primary"
                    >
                      Bootcamp of Web dev with JS & React JS{" "}
                    </a>
                  </h2>
                  <p className="mt-2 text-gray-600">
                    This certificate is issued by Shape AI .
                  </p>
                  <ul className="mt-2 flex flex-wrap items-center gap-2">
                    <li className="relative text-sm text-muted/50 ">
                      <a
                        href="https://www.cert.shapeai.tech/verify/31iwD"
                        target="_blank"
                        className="underline text-black"
                      >
                        View Certificate
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="">
                <div className="relative">
                  <a
                    href="#!"
                    className="group block shadow-lg overflow-hidden rounded-lg"
                  >
                    <img
                      src="/images/certificates/3.png"
                      alt=""
                      className="h-full w-full rounded-lg object-cover transition duration-700 group-hover:scale-105"
                    />
                  </a>
                </div>
                <div className="mt-6">
                  <h2 className="text-xl font-medium xl:text-2xl">
                    <a
                      href="#!"
                      className="inline-block text-dark transition hover:text-primary dark:text-light/70 dark:hover:text-primary"
                    >
                      React JS & Web dev JS
                    </a>
                  </h2>
                  <p className="mt-2 text-gray-600">
                    This certificate is issued by Shape AI .
                  </p>
                  <ul className="mt-2 flex flex-wrap items-center gap-2">
                    <li className="relative text-sm text-muted/50 ">
                      <a
                        href="https://www.cert.shapeai.tech/verify/1xYgos"
                        target="_blank"
                        className="underline text-black"
                      >
                        View Certificate
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="">
                <div className="relative">
                  <a
                    href="#!"
                    className="group block shadow-lg overflow-hidden rounded-lg"
                  >
                    <img
                      src="/images/certificates/4.png"
                      alt=""
                      className="h-full w-full rounded-lg object-cover transition duration-700 group-hover:scale-105"
                    />
                  </a>
                </div>
                <div className="mt-6">
                  <h2 className="text-xl font-medium xl:text-2xl">
                    <a
                      href="#!"
                      className="inline-block text-dark transition hover:text-primary dark:text-light/70 dark:hover:text-primary"
                    >
                      Certificate of Appreciation
                    </a>
                  </h2>
                  <p className="mt-2 text-gray-600">
                    This certificate is issued by Shape AI .
                  </p>
                  <ul className="mt-2 flex flex-wrap items-center gap-2">
                    <li className="relative text-sm text-muted/50 ">
                      <a
                        href="https://www.cert.shapeai.tech/verify/x1xPg"
                        target="_blank"
                        className="underline text-black"
                      >
                        View Certificate
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="">
                <div className="relative">
                  <a
                    href="#!"
                    className="group block shadow-lg overflow-hidden rounded-lg"
                  >
                    <img
                      src="/images/certificates/5.png"
                      alt=""
                      className="h-full w-full rounded-lg object-cover transition duration-700 group-hover:scale-105"
                    />
                  </a>
                </div>
                <div className="mt-6">
                  <h2 className="text-xl font-medium xl:text-2xl">
                    <a
                      href="#!"
                      className="inline-block text-dark transition hover:text-primary dark:text-light/70 dark:hover:text-primary"
                    >
                      Javascript and backned with node JS
                    </a>
                  </h2>
                  <p className="mt-2 text-gray-600">
                    This certificate is issued by Shape AI .
                  </p>
                  <ul className="mt-2 flex flex-wrap items-center gap-2">
                    <li className="relative text-sm text-muted/50 ">
                      <a
                        href="https://www.cert.shapeai.tech/verify/TdkPA"
                        target="_blank"
                        className="underline text-black"
                      >
                        View Certificate
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="">
                <div className="relative">
                  <a
                    href="#!"
                    className="group block shadow-lg overflow-hidden rounded-lg"
                  >
                    <img
                      src="/images/certificates/6.png"
                      alt=""
                      className="h-full w-full rounded-lg object-cover transition duration-700 group-hover:scale-105"
                    />
                  </a>
                </div>
                <div className="mt-6">
                  <h2 className="text-xl font-medium xl:text-2xl">
                    <a
                      href="#!"
                      className="inline-block text-dark transition hover:text-primary dark:text-light/70 dark:hover:text-primary"
                    >
                      Bootcamp of Javascript and backned with node js
                    </a>
                  </h2>
                  <p className="mt-2 text-gray-600">
                    This certificate is issued by Shape AI .
                  </p>
                  <ul className="mt-2 flex flex-wrap items-center gap-2">
                    <li className="relative text-sm text-muted/50 ">
                      <a
                        href="https://www.cert.shapeai.tech/verify/2r835m"
                        target="_blank"
                        className="underline text-black"
                      >
                        View Certificate
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="">
                <div className="relative">
                  <a
                    href="#!"
                    className="group block shadow-lg overflow-hidden rounded-lg"
                  >
                    <img
                      src="/images/certificates/7.png"
                      alt=""
                      className="h-full w-full rounded-lg object-cover transition duration-700 group-hover:scale-105"
                    />
                  </a>
                </div>
                <div className="mt-6">
                  <h2 className="text-xl font-medium xl:text-2xl">
                    <a
                      href="#!"
                      className="inline-block text-dark transition hover:text-primary dark:text-light/70 dark:hover:text-primary"
                    >
                      Full Stack Development With React and Drupal
                    </a>
                  </h2>
                  <p className="mt-2 text-gray-600">
                    This certificate is issued by Firefiles - Software
                    Development Division, Department of Computer Science, St.
                    Thomas College(Autonomous), Thrissur, Kerala.
                  </p>
                  <ul className="mt-2 flex flex-wrap items-center gap-2">
                    <li className="relative text-sm text-muted/50 ">
                      <a
                        href="https://imishab.github.io/assets/pdf/Certificate%20of%20FSD-REACT.pdf"
                        target="_blank"
                        className="underline text-black"
                      >
                        View Certificate
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Pagination */}
            <nav className="mt-10 flex items-center justify-center gap-1.5">
              <button
                type="button"
                className="inline-flex min-h-9 min-w-9 items-center justify-center rounded-lg border border-light text-center text-dark transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:text-muted dark:hover:border-primary dark:hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
                <span aria-hidden="true" className="sr-only">
                  Previous
                </span>
              </button>
              <button
                type="button"
                className="inline-flex min-h-9 min-w-9 items-center justify-center rounded-lg border border-light text-center text-dark transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:text-muted dark:hover:border-primary dark:hover:text-primary"
                aria-current="page"
              >
                1
              </button>
              <button
                type="button"
                className="inline-flex min-h-9 min-w-9 items-center justify-center rounded-lg border border-light text-center text-dark transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:text-muted dark:hover:border-primary dark:hover:text-primary"
              >
                2
              </button>
              <button
                type="button"
                className="inline-flex min-h-9 min-w-9 items-center justify-center rounded-lg border border-light text-center text-dark transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:text-muted dark:hover:border-primary dark:hover:text-primary"
              >
                3
              </button>
              <div className="hs-tooltip inline-block">
                <button
                  type="button"
                  className="hs-tooltip-toggle group inline-flex min-h-9 min-w-9 items-center justify-center rounded-lg border border-light text-center text-dark transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:text-muted dark:hover:border-primary dark:hover:text-primary"
                >
                  <span className="text-xs group-hover:hidden">•••</span>
                  <svg
                    className="hidden h-5 w-5 flex-shrink-0 group-hover:block"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 17 5-5-5-5" />
                    <path d="m13 17 5-5-5-5" />
                  </svg>
                  <span
                    className="hs-tooltip-content invisible absolute z-10 inline-block rounded bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-sm transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100 dark:bg-slate-700"
                    role="tooltip"
                  >
                    Next 4 pages
                  </span>
                </button>
              </div>
              <button
                type="button"
                className="inline-flex min-h-9 min-w-9 items-center justify-center rounded-lg border border-light text-center text-dark transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:text-muted dark:hover:border-primary dark:hover:text-primary"
              >
                100
              </button>
              <button
                type="button"
                className="inline-flex min-h-9 min-w-9 items-center justify-center rounded-lg border border-light text-center text-dark transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:text-muted dark:hover:border-primary dark:hover:text-primary"
              >
                <span aria-hidden="true" className="sr-only">
                  Next
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </nav>
            {/* End Pagination */}
          </div>
        </div>
      </>
    </main>
  );
}
