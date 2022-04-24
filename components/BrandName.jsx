import Link from "next/link";

function BrandName({ className }) {
  return (
    <h4 {...(className ? { className: `${className}` } : {})}>
      <Link href="/">
        <a>
          <span className="font-bold">Deal</span> Real
        </a>
      </Link>
    </h4>
  );
}

export default BrandName;
