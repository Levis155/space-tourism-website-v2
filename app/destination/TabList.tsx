"use client";

import classNames from "classnames";
import { useRouter, useSearchParams } from "next/navigation";

export const destinations = [
  { label: "Moon", index: 0 },
  { label: "Mars", index: 1 },
  { label: "Europa", index: 2 },
  { label: "Titan", index: 3 },
];

const TabList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const name = searchParams.get("name") ?? "Moon";

  return (
    <div
      className="tab-list underline-indicators flex"
      role="tablist"
      aria-label="destination list"
    >
      {destinations.map((destination) => (
        <button
          key={destination.index}
          className={`uppercase ff-sans-cond text-accent letter-spacing-2 ${classNames(
            {
              "underline-indicator-selected": destination.label === name,
            }
          )}`}
          onClick={() => {
            const query =
              destination.label === "Moon" ? "" : `?name=${destination.label}`;
            router.push(`/destination${query}`);
          }}
        >
          {destination.label}
        </button>
      ))}
      {/* <button
          aria-selected="true"
          role="tab"
          aria-controls="moon-tab"
          className="uppercase ff-sans-cond text-accent letter-spacing-2"
          tabIndex={0}
          data-image="moon-image"
        >
          Moon
        </button>
        <button
          aria-selected="false"
          role="tab"
          aria-controls="mars-tab"
          className="uppercase ff-sans-cond text-accent letter-spacing-2"
          tabIndex={-1}
          data-image="mars-image"
        >
          Mars
        </button>
        <button
          aria-selected="false"
          role="tab"
          aria-controls="europa-tab"
          className="uppercase ff-sans-cond text-accent letter-spacing-2"
          tabIndex={-1}
          data-image="europa-image"
        >
          Europa
        </button>
        <button
          aria-selected="false"
          role="tab"
          aria-controls="titan-tab"
          className="uppercase ff-sans-cond text-accent letter-spacing-2"
          tabIndex={-1}
          data-image="titan-image"
        >
          Titan
        </button> */}
    </div>
  );
};

export default TabList;
