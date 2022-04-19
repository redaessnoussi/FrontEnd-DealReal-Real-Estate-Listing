import AgencyDiscover from "../components/AgencyDiscover/AgencyDiscover";
import AgencyList from "../components/AgencyList/AgencyList";
import style from "../styles/main.module.scss";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import HeroPage from "../components/HeroPage/HeroPage";

function Agency() {
  return (
    <>
      {/* hero section  */}
      <HeroPage>
        <h1 className="text-white mb-8">Our Agencies List</h1>
        <p className="text-white">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium
        </p>
      </HeroPage>
      {/* agency list */}
      <div className="container mx-auto p-7">
        <div className={`${style.row} pt-10 lg:pt-24`}>
          <div className={`flex-initial w-full lg:w-8/12 p-4`}>
            <AgencyList />
          </div>
          <div className={`flex-initial w-full lg:w-4/12 p-4`}>
            <AgencyDiscover />
          </div>
        </div>

        {/* pagination */}
        <div className={`${style.row} justify-center py-10`}>
          <ul className={`${style.pagination}`}>
            {/* left */}
            <li>
              <a href="#">
                <FaChevronLeft />
              </a>
            </li>
            <li>
              <a href="#" className={`${style.active}`}>
                1
              </a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">4</a>
            </li>
            {/* right */}
            <li>
              <a href="#">
                <FaChevronRight />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Agency;
