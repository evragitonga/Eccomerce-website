import { Link } from "react-router";
import "../index.css";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
function Home() {
  const { loggedUser } = useContext(ProductContext);
  return (
    <main className="homepage">
      <div className="homepageContent">
        <h1>Welcome to Nexora</h1>
        <p>Technology Within Reach</p>
        {loggedUser?.role === "admin" ? (
          <Link to="/adminportal" className="button">
            Admin Portal
          </Link>
        ) : (
          <Link to="/shop" className="button">
            Shop
          </Link>
        )}
      </div>
    </main>
  );
}
export default Home;
