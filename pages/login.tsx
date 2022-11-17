import Head from "next/head";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Layout from "../components/layouts/layout";

// import styles from "../styles/Home.module.css";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const onValid = () => {
    console.log("테스트");
  };
  return (
    <div className="bg-neutral-200 min-h-[100vh]">
      <div className="max-w-lg mx-auto pt-28">
        <h3 className="text-center text-6xl font-bold text-teal-700 comm-font-nanumsquare">
          환영합니다!
        </h3>
        <div className="w-full mt-8 bg-white overflow-hidden rounded-2xl pb-10 drop-shadow-lg">
          <div className="w-full bg-teal-700 flex justify-center items-center py-6">
            <h3 className="text-white text-2xl">LOGIN</h3>
          </div>
          <form onSubmit={handleSubmit(onValid)}>
            <div className="flex flex-col mt-8 px-12">
              <label htmlFor="" className="my-2">
                <p>Email Address</p>
                <input
                  type="email"
                  className="border-2 w-full rounded px-3 py-2 mt-2 focus:outline-teal-600"
                ></input>
              </label>
              <label htmlFor="" className="my-2">
                <p>Password</p>
                <input
                  type="text"
                  className="border-2 w-full rounded px-3 py-2 mt-2"
                ></input>
              </label>
              <button className="bg-teal-600 hover:bg-teal-700 py-3 text-white rounded-md mt-3">
                Login
              </button>
              <div className="relative mt-6">
                <div className="bg-slate-200 w-full h-0.5 absolute top-1/2 -z-10"></div>
                <div className="flex justify-center">
                  <p className="bg-white px-3 text-slate-600 font-light">OR</p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
