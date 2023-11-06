import Image from "next/image";
import React from "react";
import { MdOutlinePhone, MdPhoneAndroid } from "react-icons/md";
import ButtonLg from "components/design/Buttons/ButtonLg";
import NewestListing from "components/home/NewestListing/NewestListing";

export default function AgencyContact({ style, listings }) {
  return (
    <div className="container mx-auto px-7 py-7">
      <h4 className="text-title-800 font-bold mb-6">Contact Information</h4>
      {/* media object */}
      <div className={`${style.row} items-center`}>
        {/* image rounded */}
        <div className="mr-3 flex items-center">
          <Image
            src="/images/agency-logo.jpeg"
            width={96}
            height={96}
            layout="fixed"
            alt="avatar"
            className="rounded-full object-cover"
          />
        </div>
        {/* body */}
        <div className="flex-1">
          <h5 className="text-title-800 font-bold mb-2">
            Grand House Real Estate
          </h5>
          <div className="flex">
            <MdOutlinePhone className="mr-2 w-6 h-6" />
            <p className="mr-4">+90 8989787 898</p>
            <MdPhoneAndroid className="mr-2 w-6 h-6" />
            <p>+90 8989787 898</p>
          </div>
        </div>
        <ButtonLg
          type={`button`}
          className="bg-secondary-500 hover:bg-secondary-700 hover:border-secondary-700 border-secondary-500 text-white"
        >
          Call Agency
        </ButtonLg>
      </div>
      {/* newest listing */}
      <NewestListing listings={listings} />
    </div>
  );
}
