import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import ButtonSm from "components/design/Buttons/ButtonSm";

function SocialMediaButtons() {
  const socialMediaPlatforms = [
    { icon: <FaFacebook className="h-6 w-6" />, color: "bg-primary-700" },
    { icon: <FaInstagram className="h-6 w-6" />, color: "bg-primary-700" },
    { icon: <FaPinterest className="h-6 w-6" />, color: "bg-primary-700" },
  ];

  return (
    <ul className="flex">
      {socialMediaPlatforms.map((platform, index) => (
        <li key={index} className="mr-2">
          <ButtonSm
            roundedBtn={true}
            type="button"
            className={`${platform.color} hover:bg-primary-800 hover:border-primary-800 border-primary-700 text-white`}
          >
            {platform.icon}
          </ButtonSm>
        </li>
      ))}
    </ul>
  );
}

export default SocialMediaButtons;
