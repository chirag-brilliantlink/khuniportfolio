import React from "react";
import Link from "next/link";

const index = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/Photography">Photography</Link>
        </li>
        <li>
          <Link href="">Gaming</Link>
        </li>
        <li>
          <Link href="">Travelling</Link>
        </li>
        <li>
          <Link href="">Cats</Link>
        </li>
        <li>
          <Link href="">Random</Link>
        </li>
      </ul>
    </div>
  );
};

export default index;
