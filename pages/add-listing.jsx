import HeroPage from "../components/HeroPage/HeroPage";
import StepsSection from "../components/StepsSection/StepsSection";
import Head from "next/head";

function AddListing() {
  return (
    <>
      <Head>
        <title>Deal Real - Add Listing</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* hero section  */}
      <HeroPage>
        <h1 className="text-white mb-8">Create a Listing</h1>
        <p className="text-white">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium
        </p>
      </HeroPage>
      {/* create listing section */}
      <div className="container mx-auto p-7">
        {/* steps section */}
        <StepsSection steps={["General", "Media", "Location"]} />
      </div>
    </>
  );
}

export default AddListing;
