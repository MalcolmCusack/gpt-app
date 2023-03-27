import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex p-5 justify-between sticky top-0 bg-white z-50 shadow-md">
      <div className="flex space-x-2 items-center">
        {/* <Image src="" alt="logo" height={30} width={30} /> */}

        <div>
          <h1 className="font-bold">
            <span className="text-purple-500">GPT</span> Chat
          </h1>
          <h2>Powered by GPT-4</h2>
        </div>
      </div>

      <div className="flex text-xs md:text-base divide-x items-center text-gray-500">
        <Link href={""} className="px-2 font-light">
          Linkski
        </Link>
      </div>
    </header>
  );
};

export default Header;
