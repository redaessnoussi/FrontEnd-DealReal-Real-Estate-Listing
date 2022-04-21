import HeroPage from "../components/HeroPage/HeroPage";
import StepsSection from "../components/StepsSection/StepsSection";

function AddListing() {
  return (
    <>
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
        <StepsSection steps={["General", "Media", "Location", "Facilities"]} />
      </div>
    </>
  );
}

export default AddListing;
