import { ArrowRight, Globe, Smartphone, Palette, Zap } from "lucide-react";
import Link from "next/link";

const services = [
  { title: "Website", icon: Globe },
  { title: "Mobile App", icon: Smartphone },
  { title: "UI UX Design", icon: Palette },
  { title: "Automations", icon: Zap },
];

export default function Services() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow transition-shadow hover:shadow-lg dark:bg-black dark:shadow-dark lg:col-span-2">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-2xl font-semibold dark:text-light">
          Services I Offered
        </h3>
        <Link
          href="/services"
          className="inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary"
        >
          <span>See All Services</span>
          <ArrowRight size={20} />
        </Link>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4"
            >
              <div className="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
                <Icon className="mx-auto h-12 w-12 text-black lg:h-16 lg:w-16" strokeWidth={1} />
              </div>
              <p className="mt-3 text-base font-medium text-dark dark:text-light/70">
                {service.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
