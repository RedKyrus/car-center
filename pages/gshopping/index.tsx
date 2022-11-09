import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layouts/layout";
import MainMenu from "../../components/layouts/main-menu";
// import styles from "../styles/Home.module.css";

export default function GShopping() {
  return (
    <Layout mainMenu="지쇼 관리" subMenu="전체">
      <div className="">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <div key={i} className="xx"></div>
        ))}
      </div>
    </Layout>
  );
}
