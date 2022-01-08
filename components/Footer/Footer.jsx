import BrandName from "../BrandName";
import style from "../../styles/main.module.scss";

function Footer() {
  return (
    <footer>
      <div className="bg-title-800 px-4 pt-10 pb-6 md:py-10 lg:pt-16 lg:pb-10">
        <div className="container mx-auto text-white px-7">
          {/* logo */}
          <div className="text-center mb-10">
            <BrandName />
          </div>
          {/* footer sections */}
          <div className={`${style.row} lg:mb-20 mb-10 justify-between`}>
            {/* section 1 */}
            <div className="lg:w-3/12 md:w-6/12 w-full mb-10 lg:mb-0">
              <h2 className="mb-5">Make your home more modern</h2>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim
              </p>
            </div>
            {/* section 2 */}
            <div
              className={`${style.list_vertical} lg:w-2/12 md:w-5/12 w-full mb-10 lg:mb-0`}
            >
              <h2 className="mb-5">Our services</h2>
              <ul>
                <li>
                  <a href="#">Home Rent</a>
                </li>
                <li>
                  <a href="#">Appertement Sell</a>
                </li>
                <li>
                  <a href="#">Villa Rent</a>
                </li>
              </ul>
            </div>
            {/* section 3 */}
            <div
              className={`${style.list_vertical} lg:w-2/12 md:w-5/12 w-full mb-10 lg:mb-0`}
            >
              <h2 className="mb-5">Support</h2>
              <ul>
                <li>
                  <a href="#">Customer services</a>
                </li>
                <li>
                  <a href="#">Email us</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>
            {/* section 4 */}
            <div
              className={`${style.list_vertical} lg:w-2/12 md:w-5/12 w-full lg:mb-10`}
            >
              <h2 className="mb-5">Social Media</h2>
              <ul>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
              </ul>
            </div>
          </div>
          {/* footer copyright */}
          <div className={`${style.row} justify-between items-center`}>
            <ul className={`${style.list_inline} gap-x-8 gap-y-2 mb-5 `}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Explore</a>
              </li>
              <li>
                <a href="#">Agency</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <p>Copyright Deal Real All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
