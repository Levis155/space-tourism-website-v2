"use client";

import classNames from "classnames";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function BodyClass({
  children,
  fontClasses,
}: {
  children: ReactNode;
  fontClasses: string;
}) {
  const currentPath = usePathname();

  return (
    <body
      className={`${classNames({
        home: currentPath === "/",
        destination: currentPath === "/destination",
        crew: currentPath === "/crew",
        technology: currentPath === "/technology",
      })} ${fontClasses}`}
    >
      {children}
    </body>
  );
}
