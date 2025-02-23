import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaTh } from "react-icons/fa";
import { IoStorefront } from "react-icons/io5";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cartProductIds } = useSelector((state) => state.cart);
  const totalItemsInCart = cartProductIds.length;
  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4 text-white shadow-md">
      {/* Logo */}
      <NavLink
        to="/"
        end
        className="text-xl font-semibold flex items-center space-x-2"
      >
        <IoStorefront className="text-2xl" />
        <span className="hidden md:block">Shop</span>
      </NavLink>

      <div className="flex items-center space-x-6">
        {/* Products link */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-lg ${isActive ? "text-yellow-400" : "text-white"}`
          }
          title="Products"
          end
        >
          <FaTh className="text-2xl" />
        </NavLink>

        {/* Cart link */}
        <NavLink
          to="/cart"
          title="Cart"
          className={({ isActive }) =>
            `relative text-lg ${
              isActive ? "text-yellow-400" : "text-white"
            } mr-5`
          }
        >
          <FaShoppingCart className="text-2xl" />
          {totalItemsInCart > 0 && (
            <sup className="absolute top-[-10] left-6.5 bg-red-500 text-xs text-white rounded-full px-1.5">
              {totalItemsInCart}
            </sup>
          )}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
