const expertAreas = [
  { name: "NextJS", icon: "/images/icons/nextjs.png" },
  { name: "Swift", icon: "/images/icons/swift.png" },
  { name: "React Native", icon: "/images/icons/native.png" },
  { name: "NodeJs", icon: "/images/icons/nodejs.png" },
  { name: "AWS", icon: "/images/icons/aws.png" },
  { name: "Figma", icon: "/assets/img/figma.svg" },
];

export default function ExpertArea() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow transition-shadow hover:shadow-lg dark:bg-black dark:shadow-dark">
      <h3 className="text-2xl font-semibold dark:text-light">My Expert Area</h3>
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
        {expertAreas.map((item) => (
          <div key={item.name} className="text-center">
            <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
              <img
                src={item.icon}
                alt={item.name}
                className="h-10 w-10 object-contain"
              />
            </div>
            <p className="mt-1 text-base font-medium text-dark dark:text-light/70">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
