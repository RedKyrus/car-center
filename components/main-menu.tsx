import { link } from "fs";
import Link from "next/link";
import { useState } from "react";

interface MainMenuProps {
  currentMenu: string;
}

export default function MainMenu({ currentMenu }: MainMenuProps) {
  const [menu, setMenu] = useState<string>("");
  const onChangeMenu = (e: Event) => {
    console.log(e);
  };

  return (
    <nav data-xx="xx">
      <div className="flex flex-col">
        <Link
          onClick={(e) => {
            onChangeMenu(e);
          }}
          href="home"
        >
          홈
        </Link>
        {/* <Link onClick={xx} href="/about">
          홈
        </Link> */}

        {/* <Link onClick={setMenu("home")} href="/about">
          상담 관리
        </Link>
        <Link onClick={setMenu("home")} href="/about">
          사이트 관리
        </Link>
        <Link onClick={setMenu("home")} href="/about">
          지쇼 관리
        </Link>
        <Link onClick={setMenu("home")} href="/about">
          멤버 관리
        </Link> */}
      </div>
      <div>
        {/* if(currentMenu) */}
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <div key={i}>x</div>
        ))}
      </div>
    </nav>
  );
}
