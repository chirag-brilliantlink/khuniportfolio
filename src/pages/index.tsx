import Link from "next/link";
import { anton, fredericka } from "./_app";

export default function Home() {
  return (
    <Link href="/Categories" className="w-full h-full">
      <section className=" w-[100%] h-[100vh] text-white relative flex flex-col">
        <div className="flex flex-col gap-5 items-end pt-[350px] z-30 pr-[20px]">
          <h1
            className={`text-lg-res md:text-xl-res ${anton.className} text-white`}
          >
            KHUNIMURDERER
          </h1>
          <p className="text-xs-res w-[100%] xl:w-[35%] text-end z-20 font-normal">
            Step into my world, an exclusive space crafted for you. Explore the
            realms of Gaming, Photography, Travel, and Audio Adventures! Immerse
            yourself in a captivating fusion of pixels, snapshots, wanderlust,
            and sonic wonders. Join me on this extraordinary journey.
          </p>
        </div>
        <div className="absolute top-0 bottom-0 right-0 left-0">
          <img
            src="/images/background1.png"
            alt=""
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
      </section>
    </Link>
  );
}
