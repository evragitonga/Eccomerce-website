import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"

function ProductCard({product}){
  const {addToCart,loggedUser} = useContext(ProductContext)
  const {handleDelete} = useContext(ProductContext)
  return (
    <div className="productCard">
      <div className="imageContainer">
        <img src={product.image} alt={product.name} className="image"/>
      </div>
      <div className="productDetails">
        <h2>{product.name}</h2>
        <p>Price {product.price} $</p>
        <p>Available stock: {product.stock}</p>
        <p>Brand: {product.brand}</p>
        {loggedUser.role === "admin" ? (<button onClick={() => handleDelete(product.id,"http://localhost:3000/products")} className="button">Delete </button>):(<button onClick={() => addToCart(product)} className="button">Add to Cart</button>)}
      </div>
    </div>
  )

}
export default ProductCard