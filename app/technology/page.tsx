"use client";

import NumberedIndicators, { technologies } from "./NumberedIndicators";
import { useSearchParams } from "next/navigation";
import data from "@/data.json";

const TechnologyPage = () => {
  const searchParams = useSearchParams();

  const name = searchParams.get("name") ?? "launch-vehicle";
  let technologyIndex = 0;
  const match = technologies.find((technology) => technology.name === name);

  if (match) {
    technologyIndex = match.index;
  }

  return (
    <main id="main" className="grid-container grid-container--technology flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">03</span> Space launch 101
      </h1>

      <NumberedIndicators name={name} />

      <article className="technology-details flow">
        <header className="flow flow--space-small">
          <h2
            className="text-accent fs-400 ff-sans-cond uppercase"
            style={{ letterSpacing: "0.1475rem" }}
          >
            The terminology...
          </h2>
          <p className="fs-700 ff-serif uppercase">
            {data.technology[technologyIndex].name}
          </p>
        </header>

        <p id="technology-description" className="text-accent">
          {data.technology[technologyIndex].description}
        </p>
      </article>

      <picture>
        <img
          src={data.technology[technologyIndex].images.portrait}
          alt={data.technology[technologyIndex].name}
        />
        {/* <img
          hidden
          src="/technology/image-launch-vehicle-landscape.jpg"
          alt="the launch vehicle"
        />  */}
      </picture>
    </main>
  );
};

export default TechnologyPage;
