"use client";

import classNames from "classnames";
import { useRouter } from "next/navigation";

export const destinations = [
  { label: "Moon", index: 0 },
  { label: "Mars", index: 1 },
  { label: "Europa", index: 2 },
  { label: "Titan", index: 3 },
];

const UnderlineIndicators = ({ name }: { name: string }) => {
  const router = useRouter();

  return (
    <div className="tab-list underline-indicators flex">
      {destinations.map((destination) => (
        <button
          key={destination.index}
          className={`uppercase ff-barlow-cond text-accent letter-spacing-2 ${classNames(
            {
              selected: destination.label === name,
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
    </div>
  );
};

export default UnderlineIndicators;
