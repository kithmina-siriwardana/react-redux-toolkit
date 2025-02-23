import { useDispatch, useSelector } from "react-redux";
import cartSlice from "../data/cartSlice";
import { useEffect } from "react";
import { fetchAllProducts } from "../data/productSlice";

const Home = () => {
  const state = useSelector((state) => state);
  const { cart, products } = state;
  const { addToCart, removeFromCart } = cartSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts("http://localhost:3000/products"));
  }, [dispatch]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Product Catalogue</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.data?.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg shadow-md p-4"
          >
            <img
              className="h-48 object-cover rounded-md w-full"
              src={product.imageUrl}
              alt={product.name}
            />
            <div className="text-center mt-4">
              <h5 className="text-lg font-semibold">{product.name}</h5>
              <p className="text-gray-600 text-sm">${product.price}</p>
              {!cart.cartProductIds.includes(product.id) ? (
                <button
                  className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer"
                  onClick={() => dispatch(addToCart(product.id))}
                >
                  Add to Cart
                </button>
              ) : (
                <button
                  className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer"
                  onClick={() => dispatch(removeFromCart(product.id))}
                >
                  Remove from Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
