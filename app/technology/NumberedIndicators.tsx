"use client";

import { useRouter } from "next/navigation";

const technologies = [
  { label: "1", name: "launch-vehicle", index: 0 },
  { label: "2", name: "spaceport", index: 1 },
  { label: "3", name: "space-capsule", index: 2 },
];

const NumberedIndicators = () => {
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
          className="bg-dark text-white fs-600 ff-serif"
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
      {/* <button
        aria-selected="true"
        role="tab"
        aria-controls="vehicle-tab"
        data-image="vehicle-image"
        className="bg-dark text-white fs-600 ff-serif"
      >
        1
      </button>
      <button
        aria-selected="false"
        role="tab"
        aria-controls="spaceport-tab"
        data-image="spaceport-image"
        className="bg-dark text-white fs-600 ff-serif"
      >
        2
      </button>
      <button
        aria-selected="false"
        role="tab"
        aria-controls="capsule-tab"
        data-image="capsule-image"
        className="bg-dark text-white fs-600 ff-serif"
      >
        3
      </button> */}
    </div>
  );
};

export default NumberedIndicators;
