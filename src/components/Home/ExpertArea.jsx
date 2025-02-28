import React from "react";

export default function ExpertArea() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
      <h3 className="text-2xl font-semibold dark:text-light">My Expert Area</h3>
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
        <div className="text-center">
          <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
            <img src="/images/icons/nextjs.png" alt="" className=" w-12" />
          </div>
          <p className="mt-1 text-base font-medium text-dark dark:text-light/70">
            NextJS
          </p>
        </div>
        <div className="text-center">
          <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
            <img src="/images/icons/native.png" alt="" className="h-8 w-8" />
          </div>
          <p className="mt-1 text-base font-medium text-dark dark:text-light/70">
            React Native
          </p>
        </div>
        <div className="text-center">
          <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
            <img src="/images/icons/nodejs.png" alt="" className="h-8 w-8" />
          </div>
          <p className="mt-1 text-base font-medium text-dark dark:text-light/70">
            NodeJs
          </p>
        </div>
        <div className="text-center">
          <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
            <img src="/images/icons/aws.png" alt="" className=" w-12" />
          </div>
          <p className="mt-1 text-base font-medium text-dark dark:text-light/70">
            AWS
          </p>
        </div>
        <div className="text-center">
          <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
            <img src="assets/img/figma.svg" alt="" className="h-8 w-8" />
          </div>
          <p className="mt-1 text-base font-medium text-dark dark:text-light/70">
            Figma
          </p>
        </div>
        <div className="text-center">
          <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
            <img src="/images/icons/mongodb.png" alt="" className="h-8 w-8" />
          </div>
          <p className="mt-1 text-base font-medium text-dark dark:text-light/70">
            MongoDB
          </p>
        </div>
      </div>
    </div>
  );
}
