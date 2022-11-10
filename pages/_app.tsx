import "../styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full min-h-full">
      <Component {...pageProps} />
    </div>
  );
}
