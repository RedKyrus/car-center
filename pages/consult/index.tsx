import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layouts/layout";
import MainMenu from "../../components/layouts/main-menu";
import Table from "../../components/layouts/table";
import { cls } from "../../lib/utils";
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
const tableTotalMaxWidth2: string = `min-w-[${tableTotalWidthCount.toString()}px]`;
const tableTotalMinWidth: string = "min-w-[" + tableTotalWidthCount + "px]";

export default function Consult() {
  // console.log(test.length);
  return (
    <Layout mainMenu="상담 관리" subMenu="신청관리">
      <div className=" w-[96%] ml-10  drop-shadow-sm">
        <h3 className="py-2 text-xl">신청목록</h3>
        <div>
          <input type="text" />
          <span>/</span>
          <span>45</span>
        </div>
        <div className="flex bg-white w-fit rounded-3xl border-2 border-slate-400 px-3">
          <button className="order-1 py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button className="order-2 py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <div className="order-3 py-1 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
          <div className="order-5 py-1 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
          <button className="order-6 py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
          <button className="order-7 py-1 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

          <div className="order-4 py-1 flex items-center">
            <button className="px-2 text-lg">1</button>
            <button className="px-2 text-lg">2</button>
            <button className="px-2 text-lg">3</button>
            <button className="px-2 text-lg">4</button>
            <button className="px-2 text-lg">5</button>
          </div>
        </div>
        <Table
          tableHeadList={tableHeadList}
          tableContentsList={test}
          className="mt-4"
        ></Table>
        {/* <div
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
        </div> */}
      </div>
    </Layout>
  );
}
