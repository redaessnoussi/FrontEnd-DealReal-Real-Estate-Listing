import Image from "next/image";

function AvatarButton({ src, className }) {
  return (
    <button className={"flex flex-col justify-center p-2 " + className}>
      <Image
        src={src}
        width="56"
        height="56"
        alt="avatar"
        className="rounded-full object-cover"
      />
    </button>
  );
}

export default AvatarButton;
