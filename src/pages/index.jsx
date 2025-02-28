import Contact from "@/components/Home/Contact";
import ExpertArea from "@/components/Home/ExpertArea";
import ProfileCard from "@/components/Home/ProfileCard";
import Projects from "@/components/Home/Projects";
import Services from "@/components/Home/Services";
import WorkExp from "@/components/Home/WorkExp";
import React from "react";

export default function index() {
  return (
    <main className="grid grid-cols-1 gap-4 lg:grid-cols-3  lg:gap-6">
      <ProfileCard />
      <div className="grid grid-cols-1 gap-4 lg:gap-6">
        <WorkExp />
        <ExpertArea />
      </div>
      <Projects />
      <Services />
      <Contact />
    </main>
  );
}
