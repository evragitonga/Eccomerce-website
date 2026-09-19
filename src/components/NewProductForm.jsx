import { useContext } from "react";
import useForm from "../Hooks/useForm";
import { ProductContext } from "../context/ProductContext";

function NewProductForm() {
  const { formData, setFormData, handleChange } = useForm({
    name: "",
    category: "",
    price: "",
    stock: "",
    brand: "",
    image: "",
  });
  const { handleCreate, setProductData } = useContext(ProductContext);
  function handleSubmit(e) {
    e.preventDefault();
    handleCreate(formData, "products").then((product) =>
      setProductData((prevProductData) => [...prevProductData, product]),
    );
    setFormData({
      name: "",
      category: "",
      price: "",
      stock: "",
      brand: "",
      image: "",
    });
  }
  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name">Name</label>
        <input
          className="input"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="category">Category</label>
        <input
          className="input"
          type="text"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />

        <label htmlFor="price">Price</label>
        <input
          className="input"
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />

        <label htmlFor="stock">Stock</label>
        <input
          className="input"
          type="number"
          id="stock"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
        />

        <label htmlFor="brand">Brand</label>
        <input
          className="input"
          type="text"
          id="brand"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
        />

        <label htmlFor="image">Image</label>
        <input
          className="input"
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />

        <button type="submit" className="button">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default NewProductForm;
