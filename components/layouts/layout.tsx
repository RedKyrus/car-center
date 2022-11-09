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
      <header className="fixed w-full h-12 bg-slate-800 pl-60 flex justify-end self-end">
        <div className="text-white w-32 flex justify-between">
          <p>이름</p>
          <p>로그아웃</p>
        </div>
      </header>
      <MainMenu mainMenu={mainMenu} subMenu={subMenu} />
      <div className="ml-60 pt-20 bg-neutral-300 min-h-[100vh] ">
        {children}
      </div>
    </div>
  );
}
