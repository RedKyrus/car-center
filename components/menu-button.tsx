import Link from "next/link";
import React from "react";

interface MenuButtonProp {
  name: string;
  href: string;
  children?: React.ReactNode;
}

export default function MenuButton({ name, href, children }: MenuButtonProp) {
  return (
    <Link onClick={(e) => {}} href={href} className="block">
      <p className="text-white">{name}</p>
      <div>{children}</div>
    </Link>
  );
}
