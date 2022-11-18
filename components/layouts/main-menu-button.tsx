import Link from "next/link";
import React from "react";
import { cls } from "../../libs/utils";

interface MenuButtonProp {
  name?: string;
  currentMenu?: string;
  href: string;
  children?: React.ReactNode;
}

// interface SubMenuButtonProp extends MenuButtonProp {
//   key: number;
// }

export function MenuButton({
  name,
  href,
  currentMenu,
  children,
}: MenuButtonProp) {
  return (
    <Link
      onClick={(e) => {}}
      href={href}
      className={cls(
        "block py-3 hover:from-teal-800 hover:via-teal-700 hover:to-teal-700 text-white",
        name === currentMenu
          ? "bg-gradient-to-r from-slate-800 via-slate-700 to-slate-700"
          : "bg-gradient-to-b from-slate-800 via-slate-900 to-slate-900"
      )}
    >
      <div className="flex justify-center">{children}</div>
      {name ? <p className="text-center pt-1 text-[0.94rem]">{name}</p> : null}
    </Link>
  );
}

export function SubMenuButton({ name, href, currentMenu }: MenuButtonProp) {
  return (
    <Link
      onClick={(e) => {}}
      href={href}
      className={cls(
        "block pt-3.5 w-full text-white hover:text-teal-200",
        name == currentMenu
          ? "bg-gradient-to-r from-slate-700 via-gray-900 to-slate-700"
          : ""
      )}
    >
      {name ? <p className="text-center text-base">{name}</p> : null}
      <div className="w-11/12 h-0.5 mx-auto mt-3 bg-gradient-to-r from-slate-700 via-slate-500 to-slate-700"></div>
    </Link>
  );
}

export function MenuTitleButton({ name, href, children }: MenuButtonProp) {
  return (
    <Link
      onClick={(e) => {}}
      href={href}
      className="flex justify-center items-center h-12"
    >
      <div className="flex justify-center">{children}</div>
      {name ? (
        <p className="text-white ml-1 text-center text-lg">{name}</p>
      ) : null}
    </Link>
  );
}
