"use client";

import data from "@/data.json";
import { useSearchParams } from "next/navigation";
import DotIndicators, { crewMembers } from "./DotIndicators";

const CrewPageContent = () => {
  const searchParams = useSearchParams();

  const role = searchParams.get("role") ?? "commander";

  let crewIndex = 0;

  const match = crewMembers.find((crewMember) => role === crewMember.role);

  if (match) {
    crewIndex = match.index;
  }
  return (
    <main id="main" className="grid-container grid-container--crew flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">02</span> Meet your crew
      </h1>
      <DotIndicators role={role ?? ""} />

      <article className="crew-details flow" id="commander-tab" role="tabpanel">
        <header className="flow flow--space-small">
          <h2 className="fs-600 ff-bellefair uppercase">
            {data.crew[crewIndex].role}
          </h2>
          <p className="fs-700 uppercase ff-bellefair">
            {data.crew[crewIndex].name}
          </p>
        </header>
        <p>{data.crew[crewIndex].bio}</p>
      </article>

      <picture>
        <source srcSet={data.crew[crewIndex].images.webp} type="image/webp" />
        <img
          src={data.crew[crewIndex].images.png}
          alt={data.crew[crewIndex].name}
        />
      </picture>
    </main>
  );
};

export default CrewPageContent;
