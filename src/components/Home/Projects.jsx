import React from "react";

export default function Projects() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-2xl font-semibold dark:text-light">
          Recent Projects
        </h3>
        <a
          href="portfolio.html"
          className="inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary"
        >
          <span>All Projects</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            className="h-5 w-5"
          >
            <path d="M4.167 10h11.666m-4.999 5 5-5m-5-5 5 5" />
          </svg>
        </a>
      </div>
      <div className="mt-6 space-y-6">
        <div className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0">
          <div className="relative aspect-6/4 overflow-hidden rounded-t-lg">
            <img
              src="/images/projects/dripside.png"
              alt=""
              className="h-full w-full rounded-t-lg object-cover object-top transition"
            />
            <a
              href="/images/projects/dripside.png"
              data-gall="project-gallry-1"
              className="project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                className="h-6 w-6"
              >
                <path d="M10 4.167v11.666M4.167 10h11.666" />
              </svg>
            </a>
          </div>
          <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 bg-gradient-to-t from-black/20 p-4">
            <span className="rounded bg-white px-2 py-1 text-xs font-medium text-primary shadow">
              MVP Product
            </span>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0">
          <div className="relative aspect-6/4 overflow-hidden rounded-t-lg">
            <img
              src="/images/projects/astra.png"
              alt=""
              className="h-full w-full rounded-t-lg object-cover object-top transition"
            />
            <a
              href="/images/projects/astra.png"
              data-gall="project-gallry-2"
              className="project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                className="h-6 w-6"
              >
                <path d="M10 4.167v11.666M4.167 10h11.666" />
              </svg>
            </a>
          </div>
          <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 bg-gradient-to-t from-black/20 p-4">
            <span className="rounded bg-white px-2 py-1 text-xs font-medium text-primary shadow">
              Product Design
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
