"use client";

import classNames from "classnames";
import { useRouter } from "next/navigation";

export const technologies = [
  { label: "1", name: "launch-vehicle", index: 0 },
  { label: "2", name: "spaceport", index: 1 },
  { label: "3", name: "space-capsule", index: 2 },
];

const NumberedIndicators = ({ name }: { name: string }) => {
  const router = useRouter();
  return (
    <div
      className="number-indicators flex"
      role="tablist"
      aria-label="technology list"
    >
      {technologies.map((technology) => (
        <button
          key={technology.index}
          className={`bg-dark text-white fs-600 ff-bellefair ${classNames({
            active: technology.name === name,
          })}`}
          onClick={() => {
            const query =
              technology.name === "launch-vehicle"
                ? ""
                : `?name=${technology.name}`;
            router.push(`/technology${query}`);
          }}
        >
          {technology.label}
        </button>
      ))}
    </div>
  );
};

export default NumberedIndicators;
