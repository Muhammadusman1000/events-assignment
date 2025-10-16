import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedEvent } from "../store/slices/SelectedEvent";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const eventTitle = location.state?.eventTitle || "";

  const initialFormState = { name: "", email: "", phone: "" };
  const [form, setForm] = useState(initialFormState);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      setError("All fields are required!");
      return;
    }
    const formData = { ...form, eventTitle };
    setError("");
    console.log("Submitted form:", formData);
    dispatch(setSelectedEvent(formData));
    setForm(initialFormState);
    navigate("/registration-confirmation");
  };
  return (
    <motion.div
      className="flex items-center justify-center min-h-screen bg-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-xl font-bold text-center mb-2">Register</h2>

        {eventTitle && (
          <p className="text-center text-gray-700 mb-4"> {eventTitle}</p>
        )}

        {error && <p className="text-red-500 text-center mb-3">{error}</p>}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-all duration-300"
        >
          Register
        </button>
      </form>
    </motion.div>
  );
};

export default Register;
