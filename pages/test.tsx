import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import Layout from "../components/layouts/layout";

import testImg from "../assets/img/test.png";

// import styles from "../styles/Home.module.css";

export default function Test() {
  useEffect(() => {
    console.log(document.referrer);
    console.log(navigator.userAgent);
    console.log(navigator.userAgent.match(/Mobile/i));
  });

  return (
    <>
      <Layout mainMenu="홈">
        <div className="bg-stone-400h">
          {/* <Image src={testImg} alt="테스트" /> */}
          {/* <Image src="/test.png" alt="테스트" width={100} height={0} /> */}
          <div className="h-96">1</div>
          <div className="h-96">1</div>
          <div className="h-96">1</div>
          <div className="h-96">1</div>
          <div>
            <p>콘텐츠</p>
          </div>
        </div>
      </Layout>
    </>
  );
}
