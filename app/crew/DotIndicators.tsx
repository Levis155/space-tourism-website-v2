"use client";

import classNames from "classnames";
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

const DotIndicators = ({ role }: { role: string }) => {
  const router = useRouter();
  return (
    <div
      className="dot-indicators flex"
      role="tablist"
      aria-label="crew member list"
    >
      {roles.map((r) => (
        <button
          className={classNames({
            active: r.query === role,
          })}
          key={r.label}
          onClick={() => {
            const query = r.query ? `?role=${r.query}` : "";
            router.push(`/crew${query}`);
          }}
        >
          <span className="sr-only">{r.label}</span>
        </button>
      ))}
    </div>
  );
};

export default DotIndicators;
