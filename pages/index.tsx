import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layouts/layout";

// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Layout mainMenu="홈">
        <div className="bg-stone-400h">
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
