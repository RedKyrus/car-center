import Link from "next/link";
import { useState } from "react";
import { MenuButton, MenuTitleButton, SubMenuButton } from "./main-menu-button";

let menuList = [
  {
    name: "상담 관리",
    subList: [{ subName: "신청관리", subHref: "/consult" }],
  },
  {
    name: "사이트 관리",
    subList: [
      { subName: "전체", subHref: "/gshopping" },
      { subName: "카이지", subHref: "/gshopping" },
      { subName: "삼성카드", subHref: "/gshopping" },
      { subName: "벤카", subHref: "/gshopping" },
    ],
  },
  {
    name: "지쇼 관리",
    subList: [
      { subName: "전체", subHref: "/gshopping" },
      { subName: "카이지", subHref: "/gshopping" },
      { subName: "삼성카드", subHref: "/gshopping" },
      { subName: "벤카", subHref: "/gshopping" },
    ],
  },
];

interface MainMenuProps {
  mainMenu: string;
  subMenu?: string;
}

let cc = () => {};

export default function MainMenu({ mainMenu, subMenu }: MainMenuProps) {
  const [menu, setMenu] = useState<string>("");
  const onChangeMenu = (e: Event) => {
    console.log(e);
  };

  const subList = menuList.find((e) => {
    if (e.name === mainMenu) return true;
  })?.subList;
  subList;

  return (
    <nav className="fixed w-60 left-0 h-full z-10">
      <div className="bg-teal-600">
        <MenuTitleButton name="HOME" href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#fff"
            className="w-7 h-7"
          >
            <path
              fillRule="evenodd"
              d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
              clipRule="evenodd"
            />
          </svg>
        </MenuTitleButton>
      </div>
      <div className="flex flex-row h-full">
        <div className="h-full w-5/12 bg-slate-800">
          <MenuButton currentMenu={mainMenu} name="상담 관리" href="/consult">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-9 h-9"
            >
              <path
                fillRule="evenodd"
                d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                clipRule="evenodd"
              />
            </svg>
          </MenuButton>
          <MenuButton currentMenu={mainMenu} name="사이트 관리" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#fff"
              className="w-9 h-9"
            >
              <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
            </svg>
          </MenuButton>
          <MenuButton currentMenu={mainMenu} name="지쇼 관리" href="/gshopping">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#fff"
              className="w-9 h-9"
            >
              <path
                fillRule="evenodd"
                d="M6 5v1H4.667a1.75 1.75 0 00-1.743 1.598l-.826 9.5A1.75 1.75 0 003.84 19H16.16a1.75 1.75 0 001.743-1.902l-.826-9.5A1.75 1.75 0 0015.333 6H14V5a4 4 0 00-8 0zm4-2.5A2.5 2.5 0 007.5 5v1h5V5A2.5 2.5 0 0010 2.5zM7.5 10a2.5 2.5 0 005 0V8.75a.75.75 0 011.5 0V10a4 4 0 01-8 0V8.75a.75.75 0 011.5 0V10z"
                clipRule="evenodd"
              />
            </svg>
          </MenuButton>
          <MenuButton currentMenu={mainMenu} name="멤버 관리" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#fff"
              className="w-10 h-10"
            >
              <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
            </svg>
          </MenuButton>
        </div>
        <div className="h-full w-7/12 bg-slate-700">
          {subList?.map((sub, i) => (
            <SubMenuButton
              key={i}
              name={sub.subName}
              href={sub.subHref}
              currentMenu={subMenu}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}
