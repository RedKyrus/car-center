import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layouts/layout";
import MainMenu from "../../components/layouts/main-menu";
import { cls } from "../../libs/utils";
// import styles from "../styles/Home.module.css";

const test = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9];

// const tableHeadList = [
//   { name: "번호", col_w: "w-[100px]" },
//   { name: "쇼핑몰", col_w: "w-[400px]" },
//   { name: "이름", col_w: "w-[320px]" },
//   { name: "연락처", col_w: "w-[100px]" },
//   { name: "차종", col_w: "w-[100px]" },
//   { name: "제휴사", col_w: "w-[100px]" },
//   { name: "담당자", col_w: "w-[100px]" },
//   { name: "구분", col_w: "w-[100px]" },
//   { name: "등록일", col_w: "w-[300px]" },
//   { name: "진행도", col_w: "w-[100px]" },
// ];

const tableHeadListBase = [
  { name: "번호", col_w: "100" },
  { name: "쇼핑몰", col_w: "100" },
  { name: "이름", col_w: "320" },
  { name: "연락처", col_w: "100" },
  { name: "차종", col_w: "100" },
  { name: "제휴사", col_w: "100" },
  { name: "담당자", col_w: "100" },
  { name: "구분", col_w: "100" },
  { name: "등록일", col_w: "300" },
  { name: "진행도", col_w: "100" },
];

let tableTotalWidthCount = 28;

const tableHeadList = tableHeadListBase.map((tableHead, i) => {
  tableTotalWidthCount += Number(tableHead.col_w);
  tableHead.col_w = `w-[${tableHead.col_w}px]`;
  return tableHead;
});

const tableTotalMaxWidth: string = "max-w-[" + tableTotalWidthCount + "px]";
const tableTotalMinWidth: string = "min-w-[" + tableTotalWidthCount + "px]";

export default function Consult() {
  return (
    <Layout mainMenu="상담 관리" subMenu="신청관리">
      <div className=" w-[96%] ml-10  drop-shadow-sm">
        <h3 className="py-2 text-2xl">신청목록</h3>
        <div
          className={cls(
            "relative overflow-auto h-[400px] bg-white max-w-fit"
            // tableTotalMaxWidth
          )}
          // style={{ minWidth: `${tableTotalWidthCount}px` }}
          // style={{ width: "1000px", height: "280px" }}
        >
          <ul
            className={
              "flex bg-slate-300 top-0 border-b-[1px] border-b-teal-600  border-stone-300 border-t-2 border-t-teal-600 sticky min-w-fit"
            }
          >
            <li className="w-7 flex justify-center items-center border-r-neutral-300 border-x-[1px] max">
              <input type="checkbox" />
            </li>
            {tableHeadList.map((tableHead, i) => (
              <li
                key={i}
                className={cls(
                  "border-r-neutral-300 border-r-[1px] h-8 flex justify-center items-center",
                  `${tableHead.col_w}`
                )}
              >
                <p className="text-sm">{tableHead.name}</p>
              </li>
            ))}
          </ul>

          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => (
            <ul key={i} className="flex first-of-type:border-t-0 group">
              <li className="w-7 flex justify-center items-center border-neutral-300 border-[1px] border-t-0 flex-shrink-0 group-even:bg-slate-100">
                <input type="checkbox" />
              </li>
              {test.map((_, i) => (
                <li
                  key={i}
                  className={cls(
                    "border-[1px] border-l-0 py-3 flex justify-center items-center flex-shrink-0 group-even:bg-slate-100",
                    tableHeadList[i].col_w
                  )}
                >
                  <p>테스트{i}</p>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </Layout>
  );
}
