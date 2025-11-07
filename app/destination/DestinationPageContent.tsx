"use client";

import data from "@/data.json";
import { useSearchParams } from "next/navigation";
import UnderlineIndicators, { destinations } from "./UnderlineIndicators";

const DestinationPageContent = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") ?? "Moon";

  let destinationIndex = 0;

  const match = destinations.find((destination) => destination.label === name);

  if (match) {
    destinationIndex = match.index;
  }
  return (
    <main id="main" className="grid-container grid-container--destination flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">01</span> Pick your destination
      </h1>
      <picture>
        <source
          srcSet={data.destinations[destinationIndex].images.webp}
          type="image/webp"
        />
        <img
          src={data.destinations[destinationIndex].images.png}
          alt={`the ${data.destinations[destinationIndex].name}`}
        />
      </picture>
      <UnderlineIndicators name={name} />
      <article className="destination-info flow">
        <h2 className="fs-800 uppercase ff-bellefair">
          {data.destinations[destinationIndex].name}
        </h2>

        <p>{data.destinations[destinationIndex].description}</p>

        <div className="destination-meta flex">
          <div>
            <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
            <p className="ff-bellefair uppercase">
              {data.destinations[destinationIndex].distance}
            </p>
          </div>
          <div>
            <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
            <p className="ff-bellefair uppercase">
              {data.destinations[destinationIndex].travel}
            </p>
          </div>
        </div>
      </article>
    </main>
  );
};

export default DestinationPageContent;
