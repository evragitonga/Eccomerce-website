import { useContext } from "react";
import useForm from "../Hooks/useForm";
import { ProductContext } from "../context/ProductContext";

function CreateUserForm() {
  const { formData, handleChange, setFormData } = useForm({
    firstName: "",
    secondName: "",
    email: "",
    phoneNumber: 0,
    password: "",
    role: "user",
  });

  const { handleCreate, setUserData } = useContext(ProductContext);

  function handleSubmit(e) {
    console.log("creating");
    e.preventDefault();
    handleCreate(formData, "users")
      .then((user) => {
        setUserData((prevUserData) => [...prevUserData, user]);
        console.log(user);
      })
      .catch((error) => {
        console.error("error:", error);
      });

    setFormData({
      firstName: "",
      secondName: "",
      email: "",
      phoneNumber: 0,
      password: "",
    });
  }
  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit} className="form">
        <h2>Create account</h2>
        <label htmlFor="firstName">First Name</label>
        <input
          className="input"
          type="text"
          onChange={handleChange}
          value={formData.firstName}
          name="firstName"
          id="firstName"
        />

        <label htmlFor="secondName">Second Name</label>
        <input
          className="input"
          type="text"
          onChange={handleChange}
          value={formData.secondName}
          name="secondName"
          id="secondName"
        />

        <label htmlFor="email">Email</label>
        <input
          className="input"
          type="email"
          onChange={handleChange}
          value={formData.email}
          name="email"
          id="email"
        />

        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          className="input"
          type="number"
          onChange={handleChange}
          value={formData.phoneNumber}
          name="phoneNumber"
          id="phoneNumber"
        />

        <label htmlFor="password">Password</label>
        <input
          className="input"
          type="password"
          onChange={handleChange}
          value={formData.password}
          name="password"
          id="password"
        />

        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
}
export default CreateUserForm;
