import { Navigate} from "react-router"

function ProtectedRoutes({loggedUser,children}){
  if (!loggedUser){
    return <Navigate to="/login" replace />
  }
  return children
}
export default ProtectedRoutes