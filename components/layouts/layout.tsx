import Link from "next/link";
import { Children, useState } from "react";
import MainMenu from "./main-menu";

interface LayoutProps {
  mainMenu: string;
  subMenu?: string;
  children: React.ReactNode;
}

let cc = () => {};

export default function Layout({ mainMenu, subMenu, children }: LayoutProps) {
  return (
    <div>
      <header className="fixed w-full h-12 bg-slate-800 pl-16"></header>
      <MainMenu mainMenu={mainMenu} />
      {children}
    </div>
  );
}
