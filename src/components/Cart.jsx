import { useDispatch, useSelector } from "react-redux";
import productList from "../data/productList.json";
import cartSlice from "../data/cartSlice";

const Cart = () => {
  const { cartProductIds } = useSelector((state) => state.cart);
  const { removeFromCart, clearAllItems } = cartSlice.actions;
  const dispatch = useDispatch();

  const productsInCart = productList.products.filter((product) =>
    cartProductIds.includes(product.id)
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h3 className="text-2xl font-semibold mb-4">Items in Cart</h3>

      {productsInCart.length > 0 ? (
        productsInCart.map((product) => (
          <div
            key={product.id}
            className="flex items-center gap-4 p-4 border rounded-lg shadow-sm mb-4"
          >
            <img
              className="w-24 h-24 object-cover rounded"
              src={product.imageUrl}
              alt={product.name}
            />
            <div className="flex-1">
              <h4 className="text-lg font-semibold">{product.name}</h4>
              <p className="text-gray-600 text-sm truncate">{product.detail}</p>
              <button
                className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition cursor-pointer"
                onClick={() => dispatch(removeFromCart(product.id))}
              >
                Remove Item
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center py-10 text-gray-500">
          <i className="bi bi-cart3 text-5xl mb-2" />
          <p>Your cart is empty.</p>
          <p>You have not added any item to your cart.</p>
        </div>
      )}
      {productsInCart.length > 0 && (
        <div className="text-center mt-6">
          <button
            className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded hover:bg-blue-700 transition cursor-pointer"
            onClick={() => dispatch(clearAllItems())}
          >
            CHECKOUT
            <br />
            (Clear all Items)
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
