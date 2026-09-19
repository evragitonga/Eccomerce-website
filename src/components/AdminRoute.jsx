import { Navigate} from "react-router";

function AdminRoute({loggedUser,children}){
  if(!loggedUser){
    return <Navigate to="/login" replace/>
  }
  if(loggedUser?.role !== "admin"){
    return <Navigate to="/" replace/>
  }
  return children
}
export default AdminRoute