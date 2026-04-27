import React from "react";
import ProjectCards from "./ProjectCards";

export default function ProjectDetails() {
  return (
    <div
      className="col-span-2 bg-[var(--card)]
                    border border-[var(--border)]
                    text-[var(--text)] rounded-xl p-7 flex flex-col gap-10"
    >
      <div className="">
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl lg:text-4xl font-semibold">
            Nuestras Terapias
          </h2>
          <p className=" lg:text-xl">
Contamos con una diversa contidad de terapias
          </p>
        </div>
      </div>
      <ProjectCards />
    </div>
  );
}
