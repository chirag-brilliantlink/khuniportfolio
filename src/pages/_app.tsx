import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Anton } from "next/font/google";
import { Fredericka_the_Great } from "next/font/google";
import { Figtree } from "next/font/google";

export const figtree = Figtree({
  subsets: ["latin"],
});

export const anton = Anton({ subsets: ["latin"], weight: "400" });
export const fredericka = Fredericka_the_Great({
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
