import Head from "next/head";
import Image from "next/image";
import Layout from "@components/layouts/layout";
import Table, { TCol, TRow } from "@components/table";
import { cls } from "@libs/utils";
import useMutation from "@libs/client/useMutation";
import useSWR from "swr";
import { CustomerInfo } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// import styles from "../styles/Home.module.css";

interface CustomerInfoListResponse {
  ok: boolean;
  customerInfoList: CustomerInfo[];
  customerInfoListAmount: Number;
}

const tableHeadListBase = [
  { name: "번호", col_w: "70" },
  { name: "쇼핑몰", col_w: "140" },
  { name: "이름", col_w: "260" },
  { name: "연락처", col_w: "100" },
  { name: "차종", col_w: "100" },
  { name: "제휴사", col_w: "200" },
  { name: "담당자", col_w: "200" },
  { name: "구분", col_w: "120" },
  { name: "등록일", col_w: "300" },
  { name: "진행도", col_w: "200" },
];

let tableHeadListCount = 0;

const pagingAmount = new Array(5).fill(0);
console.log(pagingAmount);

function colW(index: number): string {
  return tableHeadListBase[index].col_w;
}

export default function Consult() {
  const router = useRouter();
  const [page, setPage] = useState(1);

  const { data } = useSWR<CustomerInfoListResponse>(
    `/api/consult?page=${page}`
  );

  const tableContentsList = data?.customerInfoList;
  const tableContentsListAmount = Number(data?.customerInfoListAmount || 0);
  const pageAmount = Math.ceil(tableContentsListAmount / 10);

  // console.log(pageAmount);
  // console.log(tableContentsListAmount);

  useEffect(() => {
    if (!router.isReady) return;
    if (router.query.page === undefined) {
      router.push({ query: { page: 1 } }, undefined, { shallow: true });
    }
  }, [router]);

  useEffect(() => {
    if (router.query.page) {
      setPage(Number(router.query.page));
    }
  }, [router.query.page]);

  useEffect(() => {
    // if (page >= )
    if (!router.isReady) return;
    router.push({ query: { page: page } });
  }, [page]);

  const pageMovePrev = () => {
    setPage(page - 1);
    if (page < 1) setPage(1);
  };
  const pageMoveNext = () => {
    setPage(page + 1);
  };
  const onKeyPageMoveEnter = (e: any) => {
    if (e.key === "Enter") {
      let pageNum = e.target.value;
      if (pageNum > pageAmount) {
        pageNum = pageAmount;
      } else if (pageNum < 1) {
        pageNum = 1;
      }
      e.target.value = pageNum;
      setPage(pageNum);
    }
  };

  return (
    <Layout mainMenu="상담 관리" subMenu="신청관리">
      <div className=" w-[96%] ml-10  drop-shadow-sm">
        <h3 className="py-2 text-xl">신청목록</h3>
        <div className="flex items-center">
          <div className="mr-4">
            <span className="text-md">PAGE: </span>
            <input
              defaultValue={page}
              type="number"
              className="appearance-none w-6 text-right pr-2 rounded-md text-md"
              onKeyUp={onKeyPageMoveEnter}
            />
            <span className=""> / </span>
            <span className="">{pageAmount}</span>
          </div>
          <div className="flex bg-white w-fit rounded-3xl border-2 border-slate-400 px-2">
            <button className="order-1">
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
                  d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              className="order-2"
              onClick={pageMovePrev}
              disabled={Number(router.query.page) <= 1}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button className="order-6" onClick={pageMoveNext}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
            <button className="order-7">
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
                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>

            <div className="order-4 py-0.5 flex items-center">
              {page >= 3 ? (
                <div className="py-1 flex items-center">
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
              ) : null}

              {pagingAmount.map((_, i) => {
                let startPage = page;
                if (page <= 2) {
                  startPage = 1;
                } else if (page < pageAmount - 2) {
                }
                return (
                  <button
                    key={i}
                    className={cls(
                      "px-2",
                      startPage + i === page ? "bg-slate-700" : ""
                    )}
                  >
                    {startPage + i}
                  </button>
                );
              })}
              {page < pageAmount ? (
                <div className="py-1 flex items-center">
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
              ) : null}
            </div>
          </div>
        </div>
        <Table
          tableHeadList={tableHeadListBase}
          tableContentsList={
            data?.customerInfoList ? data?.customerInfoList : []
          }
          className="mt-4"
        >
          {tableContentsList?.map((data, i) => {
            let count = 0;
            let dataNum = tableContentsListAmount - 10 * (page - 1) - i;
            return (
              <TRow key={i}>
                <TCol colW={colW(count++)} data={dataNum} />
                <TCol colW={colW(count++)} data={data.visitSite} />
                <TCol colW={colW(count++)} data={data.name} />
                <TCol colW={colW(count++)} data={data.phone} />
                <TCol colW={colW(count++)} data={data.name} />
                <TCol colW={colW(count++)} data={data.name} />
                <TCol colW={colW(count++)} data={data.wantCar} />
                <TCol colW={colW(count++)} data={data.reception} />
                <TCol colW={colW(count++)} data={data.createdAt} />
                <TCol colW={colW(count++)} data={data.progress} />
              </TRow>
            );
          })}
        </Table>
      </div>
    </Layout>
  );
}
