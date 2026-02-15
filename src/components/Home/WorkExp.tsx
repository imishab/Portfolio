const workExperience = [
  {
    period: "2019 - 2020",
    company: "AizonLabs",
    role: "Web Developer",
    logo: "/images/company/al.png",
  },
  {
    period: "2020 - 2021",
    company: "Corest",
    role: "Web Developer",
    logo: "/images/company/corest.png",
  },
  {
    period: "2021 - PRESENT",
    company: "VectorCrop",
    role: "Founder",
    logo: "/images/company/vc.png",
  },
  {
    period: "2024 - 2025",
    company: "Fortune Bucket",
    role: "Web Developer",
    logo: "/images/company/fb.png",
  },
  {
    period: "2025 - 2026",
    company: "Flowflex",
    role: "Software Developer",
    logo: "/images/company/flowflex.png",
  },
  {
    period: "2026 - PRESENT",
    company: "Dentobees",
    role: "App Developer",
    logo: "/images/company/dentobees.png",
  },
  {
    period: "2026 - PRESENT",
    company: "Pacific Group",
    role: "Software Engineer",
    logo: "/images/company/pacific.png",
  },
];

// Duplicated for seamless infinite scroll
const scrollItems = [...workExperience, ...workExperience];

export default function WorkExp() {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow transition-shadow hover:shadow-lg dark:border-dark-2 dark:bg-black dark:shadow-dark dark:hover:shadow-dark/80">
      <h3 className="sticky top-0 z-10  bg-white px-6 py-4 text-xl font-semibold text-dark dark:border-dark-2 dark:bg-black dark:text-light md:text-2xl">
        Work Experience
      </h3>
      <div className="relative max-h-[220px] overflow-hidden">
        <div className="animate-work-exp-scroll flex flex-col gap-5 py-5 group-hover:[animation-play-state:paused]">
          {scrollItems.map((item, index) => (
            <div
              key={`${item.company}-${index}`}
              className="flex min-h-[52px] shrink-0 items-center gap-6 px-6"
            >
              {/* Date column - fixed width for alignment */}
              <div className="w-24 shrink-0 text-sm font-medium tabular-nums text-muted dark:text-light/70">
                <span className="leading-tight">
                  {item.period}
                </span>
              </div>

              {/* Divider */}
              <div className="h-10 w-px shrink-0 bg-gray-200 dark:bg-dark-2" />

              {/* Company info */}
              <div className="flex min-w-0 flex-1 items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl  dark:bg-dark-2">
                  <img
                    src={item.logo}
                    alt={item.company}
                    className="h-10 w-10 object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <h6 className="truncate text-base font-semibold text-dark dark:text-light/90">
                    {item.company}
                  </h6>
                  <p className="text-sm text-muted dark:text-light/60">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
