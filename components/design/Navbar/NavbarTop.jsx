import Link from "next/link";
import navbar from "../../../styles/main.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";

function NavbarTop({ children, className }) {
  const pathname = useRouter().pathname;
  const [currentPage, SetcurrentPage] = useState(pathname);

  const SetMenuItems = () => {
    const itemsHrefArrayLower = [];
    const itemsMenueArray = children.split(" ");
    const itemsHrefArray = children.split(" ");
    itemsHrefArray[0] = "/";

    itemsHrefArray.map((item, index) => {
      index !== 0
        ? itemsHrefArrayLower.push("/" + item.toLowerCase())
        : itemsHrefArrayLower.push(item.toLowerCase());
    });

    return itemsMenueArray.map((item, key) => (
      <li className="inline-block px-4 py-2" key={key}>
        <Link href={itemsHrefArrayLower[key]}>
          <a
            className={
              currentPage === itemsHrefArrayLower[key] ? navbar.active : ""
            }
            onClick={(event) =>
              SetcurrentPage(event.target.getAttribute("href"))
            }
          >
            {item}
          </a>
        </Link>
      </li>
    ));
  };

  return (
    <ul
      className={
        "list-none grid md:block " + navbar.navbar_top + " " + className
      }
    >
      <SetMenuItems />
    </ul>
  );
}

export default NavbarTop;
