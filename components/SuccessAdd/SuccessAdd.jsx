import ButtonLg from "components/design/Buttons/ButtonLg";
import Link from "next/link";
import React from "react";
import { HiOutlineCheckCircle } from "react-icons/hi";

function SuccessAdd() {
  return (
    <div className="text-primary-700 flex justify-center flex-col items-center">
      <HiOutlineCheckCircle className="h-20 w-20" />
      <h1 className="mb-4">The listing successfully added</h1>
      <Link href="/">
        <a>
          <ButtonLg
            type={`button`}
            className="bg-secondary-500 hover:bg-secondary-700 hover:border-secondary-700 border-secondary-500 text-white md:mb-0"
          >
            Ok
          </ButtonLg>
        </a>
      </Link>
    </div>
  );
}

export default SuccessAdd;
