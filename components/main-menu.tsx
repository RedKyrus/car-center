import Link from "next/link";
import { useState } from "react";
import MenuButton from "./menu-button";

let menuList = [
  {
    name: "상담관리",
    subList: [
      { subName: "상담관리 테스트", href: "/" },
      { subName: "상담관리 테스트2", href: "/" },
      { subName: "상담관리 테스트3", href: "/" },
    ],
  },
  {
    name: "사이트관리",
    subList: [
      { subName: "상담관리 테스트", href: "/" },
      { subName: "상담관리 테스트2", href: "/" },
      { subName: "상담관리 테스트3", href: "/" },
    ],
  },
  {
    name: "지쇼관리",
    subList: [
      { subName: "상담관리 테스트", href: "/" },
      { subName: "상담관리 테스트2", href: "/" },
      { subName: "상담관리 테스트3", href: "/" },
    ],
  },
];

interface MainMenuProps {
  currentMenu: string;
}

let cc = () => {};

export default function MainMenu({ currentMenu }: MainMenuProps) {
  const [menu, setMenu] = useState<string>("");
  const onChangeMenu = (e: Event) => {
    console.log(e);
  };

  const subList = menuList.find((e) => {
    if (e.name === currentMenu) return true;
  })?.subList;

  return (
    <nav className="flex flex-row">
      <div className="bg-slate-800">
        <MenuButton name="홈" href="/" />
        <MenuButton name="상담 관리" href="/consult">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            viewBox="0 0 24 24"
            strokeWidth="0.3"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
        </MenuButton>
        <MenuButton name="사이트 관리" href="/" />
        <MenuButton name="지쇼 관리" href="/" />
        <MenuButton name="멤버 관리" href="/" />
      </div>
      {subList ? (
        <div>
          {subList?.map((sub, i) => (
            <div key={i}>{sub.subName}</div>
          ))}
        </div>
      ) : null}
    </nav>
  );
}
