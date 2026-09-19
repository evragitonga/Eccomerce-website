import { useEffect, useState } from 'react'
import { Route,Routes } from 'react-router'
import { ProductContext } from './context/ProductContext'
import Cart from './components/Cart'
import CreateUserForm from './components/CreateUserForm'
import NavBar from './components/common/NavBar'
import FilteredProducts from './components/FilteredProducts'
import NewProductForm from './components/NewProductForm'
import LoginUser from './components/LoginUser'
import Home from './Pages/Home'
import AdminPortal from './components/AdminPortal'
import AdminRoute from './components/AdminRoute'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
  const [productData,setProductData] = useState([])
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState("")
  const [userData,setUserData] = useState([])
  const [loggedUser,setLoggedUser] = useState(() => { 
  const savedUser = localStorage.getItem("loggedUser")
  return savedUser ? JSON.parse(savedUser):null
})

  const [cart,setCart] = useState([])

  useEffect(() => {
    if(!loggedUser){
      setCart([])
      return 
    }
    const savedCart = localStorage.getItem(`cart_${loggedUser.id}`)
    setCart(savedCart ? JSON.parse(savedCart):[])
   },[loggedUser])

   useEffect(() => {
    if (!loggedUser){
      return
    }

    localStorage.setItem(`cart_${loggedUser.id}`,JSON.stringify(cart))
   },[cart,loggedUser])

   function removeFromCart(id){
    setCart(prevCart => prevCart.filter(product => product.id !== id))
   }
   
  
  
  useEffect(() => {fetch("http://localhost:3000/products").then(res => {
    if (!res.ok){
      throw new Error('failed to fetch data')
    }
    return res.json()
  }).then(data => {
    setProductData(data)
    console.log(data)
    setLoading(false)
  }).catch(error => {
    console.error(error)
    setError(error.message)
    setLoading(false)
  })},[])


  function addToCart(product){
    const exist = cart.some(item => item.id === product.id)

    if(exist){
      alert("product is in your cart already")
      return
    }
    setCart(prevCart => ([...prevCart,{...product,quantity:1}]))
    }

  function handleDelete(id,url){
    fetch(`${url}/${id}`,{
      method:"DELETE"
    }).then(res => {
      if (!res.ok){
        throw new Error("failed to delete")
      }
      return res.json()
    }).then(() => (
      setProductData(prevProductData => prevProductData.filter(product => product.id !== id)
      ))
    )
  }
  
  function handleCreate(formData,resource){
    return fetch(`http://localhost:3000/${resource}`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData)
    }).then(res => {
      if (!res.ok){
        throw new Error("failed to add user")
      }
      return res.json()
    })
  }

  return (
    <div>
      <ProductContext value={{
        userData,
        setUserData,
        productData,
        addToCart,
        cart,
        handleCreate,
        handleDelete,
        removeFromCart,
        loggedUser,
        setCart,
        setProductData}}>
        <NavBar loggedUser={loggedUser} setLoggedUser={setLoggedUser} cart={cart}/>
        {loading && <p>loading...</p>}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={
            <ProtectedRoutes loggedUser={loggedUser}>
              <FilteredProducts/>
            </ProtectedRoutes>}/>
          <Route path='/cart' element={
            <ProtectedRoutes loggedUser={loggedUser}>
              <Cart/>
            </ProtectedRoutes>}/>

          <Route path='/signin' element={<CreateUserForm/>}/>

          <Route path='/addproduct' element={<NewProductForm/>}/>

          <Route path='/login' element={<LoginUser setLoggedUser={setLoggedUser}/>}/>

          <Route path='/adminportal' element={
            <AdminRoute loggedUser={loggedUser}>
              <AdminPortal/>
            </AdminRoute>
          }/>
          
        </Routes>
      </ProductContext>
    </div>  
  )
}

export default App