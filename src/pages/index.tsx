import Link from "next/link";
import { anton, fredericka } from "./_app";

export default function Home() {
  return (
    <Link href="/Categories" className="w-full h-full">
      <section className=" w-[100%] h-[100vh] text-white relative flex flex-col">
        <div className="w-full h-[100%]">
          <img
            src="/images/background1.png"
            alt=""
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
        <div className="flex flex-col gap-5 items-end  z-30 pr-[20px] absolute top-[350px] right-0 mix-blend-difference">
          <h1 className={`text-landing-res ${anton.className} text-white`}>
            KHUNIMURDERER
          </h1>
          <p className="text-xs-res w-[50%] sm:w-[38%] text-end z-20 font-normal mix-blend-difference">
            Step into my world, an exclusive space crafted for you. Explore the
            realms of Gaming, Photography, Travel, and Audio Adventures! Immerse
            yourself in a captivating fusion of pixels, snapshots, wanderlust,
            and sonic wonders. Join me on this extraordinary journey.
          </p>
        </div>
      </section>
    </Link>
  );
}
