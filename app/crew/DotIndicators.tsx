"use client";

import { useRouter } from "next/navigation";

export const roles = [
  { label: "The commander", query: "", roleIndex: 0 },
  {
    label: "The mission specialist",
    query: "mission-specialist",
    roleIndex: 1,
  },
  { label: "The pilot", query: "pilot", roleIndex: 2 },
  { label: "The crew engineer", query: "crew-engineer", roleIndex: 3 },
];

const DotIndicators = () => {
  const router = useRouter();
  return (
    <div
      className="dot-indicators flex"
      role="tablist"
      aria-label="crew member list"
    >
      {roles.map((role) => (
        <button
          key={role.label}
          onClick={() => {
            const query = role.query ? `?role=${role.query}` : "";
            router.push(`/crew${query}`);
          }}
        >
          <span className="sr-only">{role.label}</span>
        </button>
      ))}
      {/* <button
        aria-selected="true"
        aria-controls="commander-tab"
        role="tab"
        data-image="commander-image"
      >
        <span className="sr-only">The commander</span>
      </button>
      <button
        aria-selected="false"
        aria-controls="mission-tab"
        role="tab"
        data-image="mission-image"
      >
        <span className="sr-only">The mission specialist</span>
      </button>
      <button
        aria-selected="false"
        aria-controls="pilot-tab"
        role="tab"
        data-image="pilot-image"
      >
        <span className="sr-only">The pilot</span>
      </button>
      <button
        aria-selected="false"
        aria-controls="crew-tab"
        role="tab"
        data-image="crew-image"
      >
        <span className="sr-only">The crew engineer</span>
      </button> */}
    </div>
  );
};

export default DotIndicators;
