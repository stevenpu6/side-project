import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetALlProductsQuery } from "../features/productsApi";
import { addToCart } from "../features/cartSlice";

const Home = () => {
  const { data, error, isLoading } = useGetALlProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddtoCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occured..</p>
      ) : (
        <>
          <h2>New Arrivals</h2>
          <div className="products">
            {data?.map((product) => (
              <div key={product.id} className="product">
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
                <div className="details">
                  <span>{product.desc}</span>
                  <span className="price">${product.price}</span>
                </div>
                <button onClick={() => handleAddtoCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
