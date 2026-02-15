import ProfileCard from "@/components/Home/ProfileCard";
import aboutData from "@/data/about.json";

export default function About() {
  return (
    <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
      {/* Intro */}
      <div className="">
        <div className=" lg:sticky lg:top-24">
          <ProfileCard />
        </div>
      </div>
      {/* about */}
      <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
        <div className="flex flex-col-reverse items-start gap-6 lg:flex-row lg:gap-10">
          <div className="">
            <h2 className="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
              Hi, I'm <span className="text-primary">Mishab</span> 👋
            </h2>
          </div>

          <div className="flex items-center justify-center gap-2 -mt-1 whitespace-nowrap rounded-lg bg-light px-4 py-2 text-center text-base font-medium leading-none text-green-600 dark:bg-dark-2 lg:text-lg">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75 dark:bg-light" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-700" />
            </span>
            <span>Available For Collaboration</span>
          </div>
        </div>
        {aboutData.intro.map((paragraph, i) => (
          <p
            key={i}
            className={`text-xs text-muted dark:text-light/70 lg:text-lg ${
              i === 0 ? "mt-4 lg:mt-8" : "mt-4 lg:mt-5"
            }`}
          >
            {paragraph}
          </p>
        ))}
        {aboutData.sections.map((section, i) => (
          <div key={i}>
            <p className="mt-7 text-xl font-semibold text-dark dark:text-light">
              {section.title}
            </p>
            <p className="mt-4 text-xs text-muted dark:text-light/70 lg:mt-5 lg:text-lg">
              {section.content}
            </p>
          </div>
        ))}
        <div className="mt-8 flex flex-wrap justify-between gap-6 lg:mt-12 lg:gap-10">
          <div className="flex flex-wrap items-start gap-6 lg:gap-10">
            <div className="">
              <h2 className="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
                <span>4</span>+
              </h2>
              <p className="mt-2 text-muted">Year of Experience</p>
            </div>
            <div className="">
              <h2 className="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
                <span>43</span>+
              </h2>
              <p className="mt-2 text-muted">Project Completed</p>
            </div>
            <div className="">
              <h2 className="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
                <span>35</span>+
              </h2>
              <p className="mt-2 text-muted">Happy Client</p>
            </div>
          </div>
        </div>
        {/* Brands */}
        <div className="mt-10 lg:mt-14">
          <h3 className="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
            Working With 20+ Tools ✨
          </h3>
          <div className="mt-8 grid grid-cols-[repeat(auto-fit,_minmax(60px,1fr))] gap-2 lg:grid-cols-[repeat(auto-fit,_minmax(80px,1fr))] lg:gap-4">
            {aboutData.tools.map((tool) => (
              <div
                key={tool.alt}
                className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4"
              >
                <img
                  src={tool.src}
                  alt={tool.alt}
                  className={tool.iconClass}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="mt-10 lg:mt-14">
          <h3 className="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
            My Education
          </h3>
          <div className="mt-8 space-y-4">
            {aboutData.education.map((item) => (
              <div
                key={item.institution}
                className="rounded-lg bg-light p-6 transition hover:bg-gray-200 dark:bg-dark-2 dark:hover:border-primary md:grid-cols-4 xl:gap-10"
              >
                <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:gap-6">
                  <div className="grid h-10 w-10 shrink-0 place-content-center rounded-lg bg-white transition group-hover:bg-light dark:bg-black dark:group-hover:bg-dark-2">
                    <img
                      src={item.icon}
                      alt={item.institution}
                      className="h-6 w-6 shrink-0"
                    />
                  </div>
                  <div>
                    <h5 className="font-medium leading-tight text-dark dark:text-light xl:text-lg xl:leading-tight">
                      {item.institution}
                    </h5>
                    <p className="mb-1 text-black dark:text-light/80">
                      {item.degree}
                    </p>
                    <p className="text-muted">{item.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Blog */}

        {/* Contact */}
        <div className="mt-10 lg:mt-14">
          <div className="group flex gap-6 overflow-hidden rounded-lg bg-light p-6 dark:bg-dark-2">
            <div className="relative flex min-w-full shrink-0 animate-infinite-scroll gap-6 group-hover:[animation-play-state:paused]">
              <a
                href="contact.html"
                className="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]"
              >
                Let's 👋 Collaborate 
              </a>
              <a
                href="contact.html"
                className="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]"
              >
                Let's 👋 Freelance 
              </a>
            </div>
            <div className="relative flex min-w-full shrink-0 animate-infinite-scroll gap-6 group-hover:[animation-play-state:paused]">
              <a
                href="contact.html"
                className="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]"
              >
                Let's 👋 Connect
              </a>
              <a
                href="contact.html"
                className="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]"
              >
                Let's 👋 Work Together
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
