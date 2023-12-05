import ButtonLg from "components/design/Buttons/ButtonLg";
import Image from "next/image";
import React from "react";

function NeedHomeLoan() {
  return (
    <>
      <div className="relative mb-24">
        <div className="container mx-auto px-7">
          <div className="flex items-center" style={{ height: "700px" }}>
            <div className="lg:w-6/12">
              <h1 className="text-title-800 mb-8">
                Need a home loan? Get pre-approved
              </h1>
              <p className="mb-8">
                Creating a very beautiful website design in accordance with the
                fundamental user experience which is examined more deeply by the
                UX Designers that we have.{" "}
              </p>
              <p className="mb-8">
                And make good visuals so that clients are satisfied and easy
                when viewing the website. First impressions are our tricks to
                attract a customer who has seen the website that we are going to
                create
              </p>

              <ButtonLg
                type={`button`}
                className="bg-secondary-500 hover:bg-secondary-700 hover:border-secondary-700 border-secondary-500 text-white md:mb-0"
              >
                Read More
              </ButtonLg>
            </div>

            <div className="lg:w-6/12 h-full lg:block hidden">
              <div
                className="bg-primary-700 flex flex-col justify-center rounded-l-3xl absolute right-0 h-full"
                style={{ width: "40%" }}
              >
                <div
                  className="-ml-24 w-full relative"
                  style={{ height: "500px" }}
                >
                  <Image
                    src={"/images/get-loan.jpg"}
                    alt="avatar"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NeedHomeLoan;
