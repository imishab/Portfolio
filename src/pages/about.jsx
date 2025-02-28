import ProfileCard from "@/components/Home/ProfileCard";
import React from "react";

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
              Hi, This Is <span className="text-primary">Mishab</span> 👋
            </h2>
          </div>

          <div className="flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-light px-4 py-2 text-center text-base font-medium leading-none text-green-600 dark:bg-dark-2 lg:text-lg">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75 dark:bg-light" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-700" />
            </span>
            <span>Available For Hire</span>
          </div>
        </div>
        <p className="mt-4 text-xs text-muted dark:text-light/70 lg:mt-8 lg:text-lg">
          A Passionate Full-Stack Developer with 4+ years of experience in
          building scalable web and mobile applications. Proficient in React.js,
          Node.js, AWS, and MongoDB, with expertise in Agile development, API
          design, and performance optimization. Passionate about developing
          efficient, user-friendly applications and optimising system
          performance. Seeking opportunities to contribute to dynamic and
          innovative teams.
        </p>
        <p className="mt-4 text-xs text-muted dark:text-light/70 lg:mt-5 lg:text-lg">
          When it comes to technology, I'm always eager to stay ahead of the
          curve. Whether it's learning new languages or diving into emerging
          trends, I thrive on embracing new challenges and pushing the
          boundaries of what's possible in the digital realm. My relentless
          drive for excellence fuels my commitment to delivering top-notch
          solutions that empower businesses to thrive in today's dynamic digital
          landscape.
        </p>
        <p className="mt-7 text-xl font-semibold text-dark ">
          Collaborative at any scale
        </p>

        <p className="mt-4 text-xs text-muted dark:text-light/70 lg:mt-5 lg:text-lg">
          Whether under a white label, or working as an independent web designer
          or developer, I have worked collaboratively with myriad companies and
          agencies alike. Adept at working remotely within an agile team, I
          utilise joining communication channels such as meet or zoom to deliver
          outstanding web and application design services.
        </p>

        <p className="mt-7 text-xl font-semibold text-dark ">
          Take your business to the next level
        </p>

        <p className="mt-4 text-xs text-muted dark:text-light/70 lg:mt-5 lg:text-lg">
          Through valuing the power of brand identity within my web design, I
          have helped to proliferate the digital presence of countless
          businesses. Every aspect of all web pages I create is crafted to
          integrate business metrics, optimising for conversions, sales, page
          times and registrations. Whatever you want for your business, I will
          ensure your website helps you achieve it.
        </p>
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
                <span>23</span>+
              </h2>
              <p className="mt-2 text-muted">Project Completed</p>
            </div>
            <div className="">
              <h2 className="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
                <span>20</span>+
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
            <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
              <img src="/images/icons/ts.png" alt="" className="w-12 " />
            </div>
            <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
              <img src="/images/icons/github.png" alt="" className=" w-15" />
            </div>
            <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
              <img src="/images/icons/aws.png" alt="" className=" w-12 " />
            </div>
            <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
              <img
                src="assets/img/framer.svg"
                alt=""
                className="h-8 w-8 lg:h-10 lg:w-10"
              />
            </div>
            <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
              <img
                src="/images/icons/mongodb.png"
                alt=""
                className="h-8 w-8 lg:h-10 lg:w-10"
              />
            </div>
            <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
              <img
                src="assets/img/figma.svg"
                alt=""
                className="h-8 w-8 lg:h-10 lg:w-10"
              />
            </div>
            <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
              <img
                src="/images/icons/native.png"
                alt=""
                className="h-8 w-8 lg:h-10 lg:w-10"
              />
            </div>
            <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
              <img src="/images/icons/nextjs.png" alt="" className="w-12" />
            </div>
            <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
              <img
                src="/images/icons/react.png"
                alt=""
                className="h-8 w-8 lg:h-10 lg:w-10"
              />
            </div>
            <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
              <img
                src="/images/icons/nodejs.png"
                alt=""
                className="h-8 w-8 lg:h-10 lg:w-10"
              />
            </div>
            <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
              <img
                src="/images/icons/git.png"
                alt=""
                className="h-8 w-8 lg:h-10 lg:w-10"
              />
            </div>
            <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
              <img
                src="/images/icons/docker.png"
                alt=""
                className="h-8 w-8 lg:h-10 lg:w-10"
              />
            </div>
            <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
              <img src="/images/icons/php.png" alt="" className="w-12" />
            </div>
            <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
              <img
                src="/images/icons/mysql.png"
                alt=""
                className="h-8 w-8 lg:h-10 lg:w-10"
              />
            </div>
            <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
              <img
                src="/images/icons/vscode.png"
                alt=""
                className="h-8 w-8 lg:h-10 lg:w-10"
              />
            </div>
            <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
              <img
                src="/images/icons/tailwind.png"
                alt=""
                className="h-8 w-8 lg:h-10 lg:w-10"
              />
            </div>

            <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
              <img
                src="/images/icons/redux.png"
                alt=""
                className="h-8 w-8 lg:h-10 lg:w-10"
              />
            </div>

            <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
              <img src="/images/icons/expo.png" alt="" className="w-12" />
            </div>
          </div>
        </div>

        {/* Awards */}
        <div className="mt-10 lg:mt-14">
          <h3 className="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
            My Education
          </h3>
          <div className="mt-8 space-y-4">
            <div className=" bg-light p-6 rounded-lg transition hover:border-light hover:bg-gray-200 dark:bg-dark-2 dark:hover:border-primary  md:grid-cols-4 xl:gap-10">
              <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:gap-6">
                <div className="grid h-10 w-10 shrink-0 place-content-center rounded-lg bg-white transition group-hover:bg-light dark:bg-black dark:group-hover:bg-dark-2">
                  <img
                    src="/images/icons/ktu.png"
                    alt=""
                    className="h-6 w-6 shrink-0"
                  />
                </div>
                <div className="">
                  <h5 className="font-medium leading-tight text-dark dark:text-light xl:text-lg xl:leading-tight">
                    Apj Abdul Kalam Technological University
                  </h5>
                  <p className="text-black mb-1">
                    Master's in Computer Application (Attended KMCT College of
                    Engineering)
                  </p>
                  <p className="text-muted">2022 - 2024</p>
                </div>
              </div>
            </div>

            <div className=" bg-light p-6 rounded-lg transition hover:border-light hover:bg-gray-200 dark:bg-dark-2 dark:hover:border-primary  md:grid-cols-4 xl:gap-10">
              <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:gap-6">
                <div className="grid h-10 w-10 shrink-0 place-content-center rounded-lg bg-white transition group-hover:bg-light dark:bg-black dark:group-hover:bg-dark-2">
                  <img
                    src="/images/icons/ku.png"
                    alt=""
                    className="h-6 w-6 shrink-0"
                  />
                </div>
                <div className="">
                  <h5 className="font-medium leading-tight text-dark dark:text-light xl:text-lg xl:leading-tight">
                    University Of Calicut
                  </h5>
                  <p className="text-black mb-1">
                    Bachelor’s in Computer Application (Attended IHRD College of
                    Applied Science)
                  </p>
                  <p className="text-muted">2020 - 2022</p>
                </div>
              </div>
            </div>

            <div className=" bg-light p-6 rounded-lg transition hover:border-light hover:bg-gray-200 dark:bg-dark-2 dark:hover:border-primary  md:grid-cols-4 xl:gap-10">
              <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:gap-6">
                <div className="grid h-10 w-10 shrink-0 place-content-center rounded-lg bg-white transition group-hover:bg-light dark:bg-black dark:group-hover:bg-dark-2">
                  <img
                    src="/images/icons/kbhs.png"
                    alt=""
                    className="h-6 w-6 shrink-0"
                  />
                </div>
                <div className="">
                  <h5 className="font-medium leading-tight text-dark dark:text-light xl:text-lg xl:leading-tight">
                    Kerala Board Of Higher Secondary
                  </h5>
                  <p className="text-black mb-1">
                    Plus Two (Computer Commerce) (Attended AMHSS Kinalure)
                  </p>
                  <p className="text-muted">2018 - 2020</p>
                </div>
              </div>
            </div>
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
                Let's 👋 Work Together
              </a>
              <a
                href="contact.html"
                className="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]"
              >
                Let's 👋 Work Together
              </a>
            </div>
            <div className="relative flex min-w-full shrink-0 animate-infinite-scroll gap-6 group-hover:[animation-play-state:paused]">
              <a
                href="contact.html"
                className="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]"
              >
                Let's 👋 Work Together
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
