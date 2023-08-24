import logoImage from "../assets/celestia-logo.svg";
import { FaAngleDown } from "react-icons/fa";

const Navbar = ({ scrolled }) => {
  return (
    <header
      className="fixed flex justify-center left-0 right-0 top-0 font-poppins z-50"
      style={{
        paddingBlock: `${scrolled ? "0.825em" : "2.25em"}`,
        backgroundColor: `${
          scrolled ? "rgba(252, 252, 252, 0.85)" : "transparent"
        }`,
        transition: "0.3s 200ms linear",
        backdropFilter: `${scrolled ? "4px" : "0"}`,
      }}
    >
      <div className="max-w-[1360px] w-full flex px-8 justify-between items-center">
        <a href="/">
          <img
            src={logoImage}
            alt="Celestia"
            className=" transition"
            style={{
              scale: `${scrolled ? "0.8" : "1"}`,
              transition: "0.3s00ms linear",
            }}
          />
        </a>
        <nav>
          <ul className="flex gap-4">
            <li>
              <div
                className="flex items-center gap-2 text-xl cursor-pointer"
                style={{
                  fontSize: `${scrolled ? "0.85rem" : "1.2rem"}`,
                  transition: "0.3s 200ms linear",
                }}
              >
                Learn <FaAngleDown />
              </div>
              <div></div>
            </li>
            <li>
              <div
                className="flex items-center gap-2 text-xl cursor-pointer transition"
                style={{
                  fontSize: `${scrolled ? "0.85rem" : "1.2rem"}`,
                  transition: "0.3s 200ms linear",
                }}
              >
                Build <FaAngleDown />
              </div>
              <div></div>
            </li>
            <li>
              <div
                className="flex items-center gap-2 text-xl cursor-pointer transition"
                style={{
                  fontSize: `${scrolled ? "0.85rem" : "1.2rem"}`,
                  transition: "0.3s 200ms linear",
                }}
              >
                Explore <FaAngleDown />
              </div>
              <div></div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
