import Logo from "../../assets/images/shopverselogo1.png";
import CartIcon from "../../assets/images/shopping-cart3.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.items.length);
  return (
    <>
      <div className="flex justify-between h-20 shadow-sm p-2.5 items-center sticky top-0 bg-white z-20">
        <Link to="/">
          <div className="w-2xs h-full">
            <img
              src={Logo}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </Link>
        <Link to="/cart">
          <div className="relative">
            <img src={CartIcon} alt="Cart Icon" />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#1b8caf] text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                {totalQuantity}
              </span>
            )}
          </div>
        </Link>
      </div>
    </>
  );
};

export default Header;
