import { table } from "console";
import { Children, useState } from "react";
import { cls } from "../libs/utils";

type tableList = { name: string; col_w: string };

interface TableProps {
  tableHeadList: tableList[];
  tableHeight?: number;
  tableContentsList: any[];
  [key: string]: any;
  className?: string;
  children?: React.ReactNode;
}

interface TRowProps {
  children?: React.ReactNode;
}

interface TColProps {
  data?: any;
  colW?: string;
}

let rowAmountCount = 0;

export default function Table<Props extends TableProps>({
  tableHeadList,
  tableContentsList,
  tableHeight = 460,
  className = "",
  children,
}: Props) {
  const tableHeightCss = "h-[" + tableHeight + "px]";

  return (
    <div
      className={cls("relative overflow-auto bg-white max-w-fit", className)}
      style={{ height: `${tableHeight}px` }}
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
            className="border-r-neutral-300 border-r-[1px] h-8 flex justify-center items-center"
            style={{ width: `${tableHead.col_w}px` }}
          >
            <p className="text-sm">{tableHead.name}</p>
          </li>
        ))}
      </ul>
      <div></div>
      {children}
      {/* <ul className="flex first-of-type:border-t-0 group">
        <li className="w-7 flex justify-center items-center border-neutral-300 border-[1px] border-t-0 flex-shrink-0 group-even:bg-slate-100">
          <input type="checkbox" />
        </li>
      </ul> */}
      {/* {tableContentsList.map((data, i) => (
        <ul key={i} className="flex first-of-type:border-t-0 group">
          <li className="w-7 flex justify-center items-center border-neutral-300 border-[1px] border-t-0 flex-shrink-0 group-even:bg-slate-100">
            <input type="checkbox" />
          </li>
          <li className="w-7 flex justify-center items-center border-neutral-300 border-[1px] border-t-0 flex-shrink-0 group-even:bg-slate-100">
            <p>{tableContentsList.length - i}</p>
          </li>
          {children}
          <li
            className={cls(
              "border-[1px] border-l-0 py-3 flex justify-center items-center flex-shrink-0 group-even:bg-slate-100",
              tableHeadList[0].col_w
            )}
          ></li>
        </ul>
      ))} */}
    </div>
  );
}

export function TRow({ children }: TRowProps) {
  return (
    <ul className="flex first-of-type:border-t-0 group">
      <li className="w-7 flex justify-center items-center border-neutral-300 border-[1px] border-t-0 flex-shrink-0 group-even:bg-slate-100">
        <input type="checkbox" />
      </li>
      {children}
    </ul>
  );
}

export function TCol({ data, colW = "" }: TColProps) {
  // console.log(colW);
  return (
    <li
      className={cls(
        "border-[1px] border-l-0 py-3 flex justify-center items-center flex-shrink-0 group-even:bg-slate-100",
        // colW
        ""
      )}
      style={{ width: `${colW}px` }}
    >
      <p>{data}</p>
    </li>
  );
}
