import React from "react";
import Link from "next/link";

const Back = () => {
  return (
    <Link href="/Categories">
      <img src="/images/arrow-left.png" alt="back" />
    </Link>
  );
};

export default Back;
