import { useState } from "react";
import { Link, useNavigate } from "react-router";
function NavBar({ loggedUser, setLoggedUser }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  function handleLogout() {
    setLoggedUser(null);
    localStorage.removeItem("loggedUser");
    localStorage.removeItem("cart");
    navigate("/");
  }
  return (
    <nav className="navBar">
      <div className="logoContainer">
        <img
          src="/src/assets/logo/Image Sep 19, 2026, 03_55_29 PM.png"
          alt="logo"
          className="logo"
        />
        <h2>Nexora</h2>
      </div>
      <div className="desktopLinks">
        <Link to="/" className="button">
          Home
        </Link>
        {loggedUser?.role === "user" && (
          <Link to="/cart" className="button">
            Cart
          </Link>
        )}
        {loggedUser ? (
          <button onClick={handleLogout} className="button">
            Logout
          </button>
        ) : (
          <Link to="/login" className="button">
            Log in
          </Link>
        )}
        {!loggedUser ? (
          <Link to="/signin" className="button">
            Sign in
          </Link>
        ) : (
          []
        )}
        {loggedUser?.role === "admin" && (
          <Link to="/adminportal" className="button">
            Admin
          </Link>
        )}
      </div>

      <button className="menuButton" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {menuOpen && (
        <div className="menuLinks">
          <Link to="/" className="button" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          {loggedUser?.role === "user" && (
            <Link
              to="/cart"
              className="button"
              onClick={() => setMenuOpen(false)}
            >
              Cart
            </Link>
          )}
          {loggedUser ? (
            <Link onClick={handleLogout} className="button">
              Logout
            </Link>
          ) : (
            <Link
              to="/login"
              className="button"
              onClick={() => setMenuOpen(false)}
            >
              Log in
            </Link>
          )}
          {!loggedUser ? (
            <Link
              to="/signin"
              className="button"
              onClick={() => setMenuOpen(false)}
            >
              Sign in
            </Link>
          ) : (
            []
          )}
          {loggedUser?.role === "admin" && (
            <Link
              to="/adminportal"
              className="button"
              onClick={() => setMenuOpen(false)}
            >
              Admin
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
export default NavBar;
