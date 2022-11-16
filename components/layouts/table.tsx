import { useState } from "react";
import { cls } from "../../lib/utils";

type tableList = { name: string; col_w: string };

interface TableProps {
  tableHeadList: tableList[];
  tableContentsList: number[] | string[];
  tableHeight?: number;
  [key: string]: any;
  className?: string;
}

export default function Table<Props extends TableProps>({
  tableHeadList,
  tableContentsList,
  tableHeight = 500,
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

      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12].map((_, i) => (
        <ul key={i} className="flex first-of-type:border-t-0 group">
          <li className="w-7 flex justify-center items-center border-neutral-300 border-[1px] border-t-0 flex-shrink-0 group-even:bg-slate-100">
            <input type="checkbox" />
          </li>
          {tableContentsList.map((_, i) => (
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
  );
}
