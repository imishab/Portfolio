import ProfileCard from "@/components/Home/ProfileCard";
import achievements from "@/data/achievements.json";

const paginationButtonClass =
  "inline-flex min-h-9 min-w-9 items-center justify-center rounded-lg border border-light text-center text-dark transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:text-muted dark:hover:border-primary dark:hover:text-primary";

export default function Achievements() {
  return (
    <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
      <div className="lg:sticky lg:top-24 lg:self-start">
        <ProfileCard />
      </div>
      <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
        <div>
          <h2 className="text-3xl font-semibold leading-tight text-dark dark:text-light lg:leading-tight">
            My Achievements
          </h2>
          <p className="mt-2 text-lg text-muted dark:text-light/70">
            A collection of certificates and achievements that I have earned
            throughout my career.
          </p>
        </div>

        <div className="mt-10 lg:mt-14">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2">
            {achievements.map((achievement) => (
              <div key={achievement.id}>
                <div className="relative">
                  <a
                    href="#!"
                    className="group block overflow-hidden rounded-lg shadow-lg"
                  >
                    <img
                      src={achievement.image}
                      alt={achievement.title}
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
                      {achievement.title}
                    </a>
                  </h2>
                  <p className="mt-2 text-gray-600 dark:text-light/80">
                    {achievement.description}
                  </p>
                  <ul className="mt-2 flex flex-wrap items-center gap-2">
                    <li className="text-sm text-muted/50">
                      <a
                        href={achievement.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-black dark:text-light hover:text-primary"
                      >
                        View Certificate
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination - enable when many achievements */}
          {/* <nav className="mt-10 flex items-center justify-center gap-1.5">
            <button type="button" className={paginationButtonClass} aria-label="Previous">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
            </button>
            <button type="button" className={paginationButtonClass} aria-current="page">1</button>
            <button type="button" className={paginationButtonClass}>2</button>
            <button type="button" className={paginationButtonClass} aria-label="Next">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </nav> */}
        </div>
      </div>
    </main>
  );
}
