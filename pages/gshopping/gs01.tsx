import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layouts/layout";
import MainMenu from "../../components/layouts/main-menu";
// import styles from "../styles/Home.module.css";

export default function Consult() {
  return (
    <Layout mainMenu="지쇼 관리">
      <div className="bg-orange-200">
        <div className="h-96">1</div>
        <div className="h-96">1</div>
        <div className="h-96">1</div>
        <div className="h-96">1</div>
        <div>
          <p>콘텐츠</p>
        </div>
      </div>
    </Layout>
  );
}
