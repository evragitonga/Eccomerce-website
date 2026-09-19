import { Link } from "react-router";

function AdminPortal() {
  return (
    <div className="adminContainer">
      <div className="H1AndAdminPortalLinks">
        <h1>Admin portal</h1>
        <div className="adminPortalLinks">
          <Link to="/addproduct" className="button adminLink">
            Add Product
          </Link>
          <Link to="/shop" className="button adminLink">
            Manage Products
          </Link>
        </div>
      </div>
    </div>
  );
}
export default AdminPortal;
