"use client";

import classNames from "classnames";
import { useRouter } from "next/navigation";

export const crewMembers = [
  { label: "The commander", role: "commander", index: 0 },
  {
    label: "The mission specialist",
    role: "mission-specialist",
    index: 1,
  },
  { label: "The pilot", role: "pilot", index: 2 },
  { label: "The crew engineer", role: "crew-engineer", index: 3 },
];

const DotIndicators = ({ role }: { role: string }) => {
  const router = useRouter();
  return (
    <div
      className="dot-indicators flex"
      role="tablist"
      aria-label="crew member list"
    >
      {crewMembers.map((crewMember) => (
        <button
          className={classNames({
            active: crewMember.role === role,
          })}
          key={crewMember.index}
          onClick={() => {
            const query =
              crewMember.role === "commander" ? "" : `?role=${crewMember.role}`;
            router.push(`/crew${query}`);
          }}
        >
          <span className="sr-only">{crewMember.label}</span>
        </button>
      ))}
    </div>
  );
};

export default DotIndicators;
