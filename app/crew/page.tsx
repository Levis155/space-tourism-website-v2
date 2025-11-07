"use client";

import { useSearchParams } from "next/navigation";
import DotIndicators, { roles } from "./DotIndicators";
import data from "@/data.json";

const CrewPage = () => {
  const searchParams = useSearchParams();

  const role = searchParams.get("role");

  let roleIndex = 0;

  const match = roles.find((r) => role === r.query);

  if (match) {
    roleIndex = match.roleIndex;
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
            {data.crew[roleIndex].role}
          </h2>
          <p className="fs-700 uppercase ff-bellefair">
            {data.crew[roleIndex].name}
          </p>
        </header>
        <p>{data.crew[roleIndex].bio}</p>
      </article>

      <picture>
        <source srcSet={data.crew[roleIndex].images.webp} type="image/webp" />
        <img
          src={data.crew[roleIndex].images.png}
          alt={data.crew[roleIndex].name}
        />
      </picture>
    </main>
  );
};

export const dynamic = "force-dynamic";

export default CrewPage;
