import { ArrowRight, Eye } from "lucide-react";
import Link from "next/link";

const recentProjects = [
  {
    id: "dripside",
    image: "/images/projects/dripside.png",
    tags: ["MVP Product"],
  },
  {
    id: "astra",
    image: "/images/projects/astra.png",
    tags: ["Product Design"],
  },
];

export default function Projects() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow transition-shadow hover:shadow-lg dark:bg-black dark:shadow-dark">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-2xl font-semibold dark:text-light">
          Recent Projects
        </h3>
        <Link
          href="/projects"
          className="inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary"
        >
          <span>All Projects</span>
          <ArrowRight size={20} />
        </Link>
      </div>
      <div className="mt-6 space-y-6">
        {recentProjects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0"
          >
            <div className="relative aspect-6/4 overflow-hidden rounded-t-lg">
              <img
                src={project.image}
                alt={project.id}
                className="h-full w-full rounded-t-lg object-cover object-top transition"
              />
              <Link
                href={project.image}
                data-gall={`project-gallery-${project.id}`}
                className="project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-black text-white shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100"
              >
                <Eye size={20} />
              </Link>
            </div>
            <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 bg-gradient-to-t from-black/20 p-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-black px-2 py-1 text-xs font-medium text-white shadow"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
