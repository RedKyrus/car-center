import { useState } from "react";
import { cls } from "../libs/utils";

type tableList = { name: string; col_w: string };

interface TableProps {
  tableHeadList: tableList[];
  tableHeight?: number;
  tableContentsList: any[];
  [key: string]: any;
  className?: string;
}

export default function Table<Props extends TableProps>({
  tableHeadList,
  tableContentsList,
  tableHeight = 300,
  className = "",
  ...rest
}: Props) {
  const tableHeightCss = "h-[" + tableHeight + "px]";
  // const [,set] = useState();
  return (
    <div
      {...rest}
      className={cls(
        "relative overflow-auto bg-white max-w-fit",
        tableHeightCss,
        className
      )}
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

      {tableContentsList.map((data, i) => (
        <ul key={i} className="flex first-of-type:border-t-0 group">
          <li className="w-7 flex justify-center items-center border-neutral-300 border-[1px] border-t-0 flex-shrink-0 group-even:bg-slate-100">
            <input type="checkbox" />
          </li>
          {tableHeadList.map((_, j) => (
            <li
              key={j}
              className={cls(
                "border-[1px] border-l-0 py-3 flex justify-center items-center flex-shrink-0 group-even:bg-slate-100",
                tableHeadList[j].col_w
              )}
            >
              <p>{data.name}</p>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
