import Logo from "../../assets/images/shopverselogo1.png";
import CartIcon from "../../assets/images/shopping-cart3.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Search from "../product/Search";

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.items.length);
  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center">
              <img
                src={Logo}
                alt="ShopVerse Logo"
                className="w-44 md:w-48 object-contain"
              />
            </Link>

            <div className="hidden md:flex flex-1 justify-center px-6">
              <div className="w-full max-w-lg">
                <Search />
              </div>
            </div>

            <Link to="/cart" className="relative">
              <img
                src={CartIcon}
                alt="Cart Icon"
                className="w-6 h-6 md:w-8 md:h-8"
              />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#1b8caf] text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </Link>
          </div>

          <div className="md:hidden flex flex-1 justify-center pb-3">
            <Search />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
