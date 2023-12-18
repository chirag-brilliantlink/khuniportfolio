import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Allura } from "next/font/google";
import { Questrial } from "next/font/google";

export const questrial = Questrial({
  subsets: ["latin"],
  weight: "400",
});
export const allura = Allura({
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={questrial.className}>
      <Component {...pageProps} />
    </main>
  );
}
