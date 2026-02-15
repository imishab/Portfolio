import ProfileCard from "@/components/Home/ProfileCard";

export default function Projects() {
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
              My Projects
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
                    className="group block  overflow-hidden rounded-lg"
                  >
                    <img
                      src="/images/projects/dripside-2.png"
                      alt=""
                      className="h-full w-full rounded-lg object-cover transition duration-700 group-hover:scale-105"
                    />
                  </a>
                  {/* Tags */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center gap-2 rounded bg-white px-2 py-1 text-center text-xs leading-none text-primary shadow transition hover:bg-primary hover:text-white"
                    >
                      Website
                    </a>
                  </div>
                </div>
                <div className="mt-6">
                  <h2 className="text-xl font-medium xl:text-2xl">
                    <a
                      href="#!"
                      className="inline-block text-dark transition hover:text-primary dark:text-light/70 dark:hover:text-primary"
                    >
                      Dripside
                    </a>
                  </h2>
                  <p className="mt-2 text-gray-600">
                    An artist-support platform enabling creators to sell their
                    designs on customizable products like t-shirts.
                  </p>
                  <ul className="mt-4 flex flex-wrap items-center gap-2">
                    <li className="relative text-sm text-muted/50 ">
                      www.dripside.in - Coming Soon
                    </li>
                  </ul>
                </div>
              </div>

              <div className="">
                <div className="relative">
                  <a
                    href="#!"
                    className="group block  overflow-hidden rounded-lg"
                  >
                    <img
                      src="/images/projects/astra.png"
                      alt=""
                      className="h-full w-full rounded-lg object-cover transition duration-700 group-hover:scale-105"
                    />
                  </a>
                  {/* Tags */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center gap-2 rounded bg-white px-2 py-1 text-center text-xs leading-none text-primary shadow transition hover:bg-primary hover:text-white"
                    >
                      Website
                    </a>
                  </div>
                </div>
                <div className="mt-6">
                  <h2 className="text-xl font-medium xl:text-2xl">
                    <a
                      href="#!"
                      className="inline-block text-dark transition hover:text-primary dark:text-light/70 dark:hover:text-primary"
                    >
                      Astramedicare
                    </a>
                  </h2>
                  <p className="mt-2 text-gray-600">
                    Astra MediCare in Kozhikode is one of the leading businesses
                    in the Dermatologists. Also known for...
                  </p>
                  <ul className="mt-4 flex flex-wrap items-center gap-2">
                    <li className="relative text-sm text-muted/50 ">
                      www.atramedicare.in - Coming Soon
                    </li>
                  </ul>
                </div>
              </div>

              <div className="">
                <div className="relative">
                  <a
                    href="#!"
                    className="group block  overflow-hidden rounded-lg"
                  >
                    <img
                      src="/images/projects/forksor.png"
                      alt=""
                      className="h-full w-full rounded-lg object-cover transition duration-700 group-hover:scale-105"
                    />
                  </a>
                  {/* Tags */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center gap-2 rounded bg-white px-2 py-1 text-center text-xs leading-none text-primary shadow transition hover:bg-primary hover:text-white"
                    >
                      WebApp
                    </a>
                  </div>
                </div>
                <div className="mt-6">
                  <h2 className="text-xl font-medium xl:text-2xl">
                    <a
                      href="#!"
                      className="inline-block text-dark transition hover:text-primary dark:text-light/70 dark:hover:text-primary"
                    >
                      Forskor Restaurent
                    </a>
                  </h2>
                  <p className="mt-2 text-gray-600">
                    Forskor Restaurant is a F&B-Casual Dining outlet located in
                    the heart of the Bangalore city. 
                  </p>
                  <ul className="mt-4 flex flex-wrap items-center gap-2">
                    <li className="relative text-sm text-muted/50 ">
                      www.forksor.in - Coming Soon
                    </li>
                  </ul>
                </div>
              </div>

              <div className="">
                <div className="relative">
                  <a
                    href="#!"
                    className="group block  overflow-hidden rounded-lg"
                  >
                    <img
                      src="/images/projects/cospace.png"
                      alt=""
                      className="h-full w-full rounded-lg object-cover transition duration-700 group-hover:scale-105"
                    />
                  </a>
                  {/* Tags */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center gap-2 rounded bg-white px-2 py-1 text-center text-xs leading-none text-primary shadow transition hover:bg-primary hover:text-white"
                    >
                      Website
                    </a>
                  </div>
                </div>
                <div className="mt-6">
                  <h2 className="text-xl font-medium xl:text-2xl">
                    <a
                      href="#!"
                      className="inline-block text-dark transition hover:text-primary dark:text-light/70 dark:hover:text-primary"
                    >
                      CoSpace
                    </a>
                  </h2>
                  <p className="mt-2 text-gray-600">
                    CoSpace is more than just a co-working platform; it's your
                    one-stop destination for...
                  </p>
                  <ul className="mt-4 flex flex-wrap items-center gap-2">
                    <li className="relative text-sm text-muted/50 ">
                      www.cospaceforyou.in - Coming Soon
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
