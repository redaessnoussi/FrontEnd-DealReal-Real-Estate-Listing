// import Image from "next/image";
import CardCategories from "../components/design/Card/CardCategories";
import style from "../styles/main.module.scss";
import RentSellToggle from "../components/home/DicoverPerfectHome/RentSellToggle/RentSellToggle";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

export default function Explore() {
  return (
    <>
      <div className="container mx-auto px-7 py-24">
        <RentSellToggle />
        {/* listings cards */}
        <div className={`${style.row} justify-between gap-y-4`}>
          <div className="md:w-4/12 lg:w-3/12 w-full flex-initial">
            <CardCategories
              src={`/images/grey.svg`}
              title={`Grand Family House`}
              description={`Ohio St. South Gate, California`}
              price={`$350`}
              category={`Appartement`}
            />
          </div>
          <div className="md:w-4/12 lg:w-3/12 w-full flex-initial">
            <CardCategories
              src={`/images/grey.svg`}
              title={`Grand Family House`}
              description={`Ohio St. South Gate, California`}
              price={`$350`}
              category={`Appartement`}
            />
          </div>
          <div className="md:w-4/12 lg:w-3/12 w-full flex-initial">
            <CardCategories
              src={`/images/grey.svg`}
              title={`Grand Family House`}
              description={`Ohio St. South Gate, California`}
              price={`$350`}
              category={`Appartement`}
            />
          </div>
          <div className="md:w-4/12 lg:w-3/12 w-full flex-initial">
            <CardCategories
              src={`/images/grey.svg`}
              title={`Grand Family House`}
              description={`Ohio St. South Gate, California`}
              price={`$350`}
              category={`Appartement`}
            />
          </div>
          <div className="md:w-4/12 lg:w-3/12 w-full flex-initial">
            <CardCategories
              src={`/images/grey.svg`}
              title={`Grand Family House`}
              description={`Ohio St. South Gate, California`}
              price={`$350`}
              category={`Appartement`}
            />
          </div>
          <div className="md:w-4/12 lg:w-3/12 w-full flex-initial">
            <CardCategories
              src={`/images/grey.svg`}
              title={`Grand Family House`}
              description={`Ohio St. South Gate, California`}
              price={`$350`}
              category={`Appartement`}
            />
          </div>
          <div className="md:w-4/12 lg:w-3/12 w-full flex-initial">
            <CardCategories
              src={`/images/grey.svg`}
              title={`Grand Family House`}
              description={`Ohio St. South Gate, California`}
              price={`$350`}
              category={`Appartement`}
            />
          </div>
          <div className="md:w-4/12 lg:w-3/12 w-full flex-initial">
            <CardCategories
              src={`/images/grey.svg`}
              title={`Grand Family House`}
              description={`Ohio St. South Gate, California`}
              price={`$350`}
              category={`Appartement`}
            />
          </div>
          <div className="md:w-4/12 lg:w-3/12 w-full flex-initial">
            <CardCategories
              src={`/images/grey.svg`}
              title={`Grand Family House`}
              description={`Ohio St. South Gate, California`}
              price={`$350`}
              category={`Appartement`}
            />
          </div>
          <div className="md:w-4/12 lg:w-3/12 w-full flex-initial">
            <CardCategories
              src={`/images/grey.svg`}
              title={`Grand Family House`}
              description={`Ohio St. South Gate, California`}
              price={`$350`}
              category={`Appartement`}
            />
          </div>
          <div className="md:w-4/12 lg:w-3/12 w-full flex-initial">
            <CardCategories
              src={`/images/grey.svg`}
              title={`Grand Family House`}
              description={`Ohio St. South Gate, California`}
              price={`$350`}
              category={`Appartement`}
            />
          </div>
          <div className="md:w-4/12 lg:w-3/12 w-full flex-initial">
            <CardCategories
              src={`/images/grey.svg`}
              title={`Grand Family House`}
              description={`Ohio St. South Gate, California`}
              price={`$350`}
              category={`Appartement`}
            />
          </div>
        </div>

        <div className={`${style.row} justify-center mt-20`}>
          {/* pagination */}
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
