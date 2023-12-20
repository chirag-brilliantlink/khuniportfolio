import Link from "next/link";
import { fredericka } from "./_app";

export default function Home() {
  return (
    <Link href="/Categories" className="w-full h-full">
      <section className=" w-[100%] h-[100vh] text-white relative flex flex-col">
        <div className="flex flex-col gap-5 items-end pt-[350px] z-30">
          <h1
            className={`text-lg-res md:text-xl-res ${fredericka.className} text-white`}
          >
            KHUNIMURDERER
          </h1>
          <p className="text-xs-res w-[100%] xl:w-[35%] text-end z-20 font-normal">
            Hi! I&apos;m a gamer who loves the thrill of a good challenge and
            the escape into exciting virtual adventures. When I&apos;m not
            gaming, you can find me with my camera, capturing the simple moments
            of life and the beauty in everyday things.
          </p>
        </div>
        <div className="absolute top-0 bottom-0 right-0 left-0">
          <img
            src="/images/background.jpg"
            alt=""
            className="w-[100%] h-[100%] grayscale object-cover"
          />
        </div>
      </section>
    </Link>
  );
}
