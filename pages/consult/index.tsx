import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layouts/layout";
import MainMenu from "../../components/layouts/main-menu";
// import styles from "../styles/Home.module.css";

const test = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9];

const tableHeadList = [
  { name: "번호", col_w: "1.0rem" },
  { name: "쇼핑몰", col_w: "1.0rem" },
  { name: "이름", col_w: "1.0rem" },
  { name: "연락처", col_w: "1.0rem" },
  { name: "차종", col_w: "1.0rem" },
  { name: "제휴사", col_w: "1.0rem" },
  { name: "담당자", col_w: "1.0rem" },
  { name: "구분", col_w: "1.0rem" },
  { name: "등록일", col_w: "1.0rem" },
  { name: "진행도", col_w: "1.0rem" },
];

export default function Consult() {
  console.log(test.length);
  return (
    <Layout mainMenu="상담 관리" subMenu="신청관리">
      <div className="bg-white w-[96%] m-auto border-2 border-stone-300 border-t-2 border-t-teal-600 drop-shadow-sm relative overflow-x-auto min-w-[720px] pt-8">
        <ul className="flex justify-between items-center bg-neutral-200 absolute top-0 w-full border-b-2 border-neutral-300">
          <li className="w-7 flex justify-center items-center">
            <input type="checkbox" />
          </li>
          {tableHeadList.map((tableHead, i) => (
            <li
              className="grow border-[1px] border-l-0 last-of-type:border-r-0 h-8 flex justify-center items-center"
              key={i}
            >
              <p className="text-sm">{tableHead.name}</p>
            </li>
          ))}
        </ul>

        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <ul
            key={i}
            className="flex justify-between odd:bg-neutral-100 first-of-type:border-t-0"
          >
            <li className="w-7 flex justify-center items-center border-[1px]">
              <input type="checkbox" />
            </li>
            {test.map((_, i) => (
              <li
                className="grow border-[1px] border-l-0 last-of-type:border-r-0 py-3"
                key={i}
              >
                <p>테스트{i}</p>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </Layout>
  );
}
