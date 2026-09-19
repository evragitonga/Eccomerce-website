import { useNavigate } from "react-router";
import useForm from "../Hooks/useForm";
import "../index.css";

function LoginUser({ setLoggedUser }) {
  const { formData, handleChange } = useForm({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  function handleLogin(e) {
    e.preventDefault();
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((users) => {
        const user = users.find(
          (user) =>
            user.email === formData.email &&
            user.password === formData.password,
        );

        if (user) {
          setLoggedUser(user);
          localStorage.setItem("loggedUser", JSON.stringify(user));
          alert("login success");
          navigate("/");
        } else {
          alert("wrong email or password");
        }
      });
  }
  return (
    <div className="formContainer">
      <form onSubmit={handleLogin} className="form">
        <h2>Login</h2>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input"
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="input"
        />

        <button type="submit" className="button">
          Login
        </button>
      </form>
    </div>
  );
}
export default LoginUser;
