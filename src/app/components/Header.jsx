import { DiApple } from "react-icons/di";
import { IoSearch } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";

const Header = () => {
  return (
    <header>
      <div>
        <DiApple size={50} color="#ffffff" />
      </div>

      <ul>
        <li>Mac</li>
        <li>iPhone</li>
        <li>iPad</li>
        <div className="iwatch">
          <li>iWatch</li>
        </div>
        <li>Support</li>
      </ul>

      <div>
        <IoSearch size={25} color="#ffffff" />
        <span>|</span>
        <FiShoppingBag size={25} color="#ffffff" />
      </div>
    </header>
  );
};

export default Header;
