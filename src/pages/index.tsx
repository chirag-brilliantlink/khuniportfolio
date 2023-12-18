import Link from "next/link";
import { fredericka } from "./_app";

export default function Home() {
  return (
    <Link href="/Categories">
      <section className="bg-[white] w-[100%] h-[1000px] text-black py-[42px] relative flex flex-col">
        <div className="flex flex-col gap-5 items-center pt-[20px]">
          <h1 className={`font-normal text-[120px] ${fredericka.className}`}>
            KhuniMurderer
          </h1>
          <p className="text-[16px] w-[60%] text-center z-20 font-extrabold bg-[white]">
            Hi! I'm a gamer who loves the thrill of a good challenge and the
            escape into exciting virtual adventures. When I'm not gaming, you
            can find me with my camera, capturing the simple moments of life and
            the beauty in everyday things. I'm also a bit of a wanderer,
            enjoying the occasional travel to new places. Back at home, my cats
            keep me company – they're the real bosses here. Just a regular
            person with a love for games, photography, travel, and cats. That's
            me in a nutshell!
          </p>
        </div>
        <div className="overflow-hidden absolute bottom-[-200px] left-[25%]">
          <img
            src="/images/profile.png"
            alt=""
            className="w-[800px] h-[900px]"
          />
        </div>
      </section>
    </Link>
  );
}
