import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();// navigate through diffrent pages

  async function handleChange() {
    try {
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_URL +"/api/users/login",
        {
          email: email,
          password: password,
        }
      );

      toast.success("Login successfully");
      console.log(response.data);
      
      // store token in web-browser
      localStorage.setItem("token", response.data.token)

      // check admin or user and sent to admin page
      if(response.data.role == "admin"){
        navigate("/admin")
      }else{
        navigate("/")
      }

      

    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <div className="mb-4">
          <label className="block mb-1">Email</label>

          <input
            type="email"
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter your email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password</label>

          <input
            type="password"
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter your password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          onClick={handleChange}
        >
          Login
        </button>
      </div>
    </div>
  );
}

