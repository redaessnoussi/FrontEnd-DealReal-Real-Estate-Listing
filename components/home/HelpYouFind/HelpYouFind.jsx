import Image from "next/image";
import Accordion from "components/design/Accordion/Accordion";

function HelpYouFind() {
  const accordionData = [
    {
      title: "Lifetime Warranty",
      content: `Amet minim mollit non deserunt ullamco est sit
      aliqua dolor do amet sint. Velit officia consequat duis enim velit
      mollit. Exercitation veniam consequat.`,
    },
    {
      title: "Cheapest compared to other competitors",
      content: `Amet minim mollit non deserunt ullamco est sit
      aliqua dolor do amet sint. Velit officia consequat duis enim velit
      mollit. Exercitation veniam consequat.`,
    },
    {
      title: "Strategic location",
      content: `Amet minim mollit non deserunt ullamco est sit
      aliqua dolor do amet sint. Velit officia consequat duis enim velit
      mollit. Exercitation veniam consequat.`,
    },
    {
      title: "Low tax",
      content: `Amet minim mollit non deserunt ullamco est sit
      aliqua dolor do amet sint. Velit officia consequat duis enim velit
      mollit. Exercitation veniam consequat.`,
    },
  ];

  return (
    <div className="container pb-24">
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h1 className="text-title-800 mb-10">
            We help you to find your dream house
          </h1>
          {/* house image */}
          <Image
            src="/images/dream-house.jpg"
            alt="Dream House"
            width={500}
            height={300}
            layout="responsive"
            className="object-cover rounded-lg"
          />
        </div>
        {/* <!-- ... --> */}
        <div>
          <p className="lg:mb-20 pt-3">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          {/* accordion with infos  */}
          {accordionData.map((data, key) => (
            <Accordion title={data.title} content={data.content} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HelpYouFind;
