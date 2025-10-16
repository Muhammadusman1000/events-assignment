import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import Header from "./components/Header";
import Register from "./screens/Register";
import MyRegistrations from "./components/MyRegistrations";
import RegistrationConfirmation from "./screens/RegistrationConfirmation";

function App() {
  return (
    <main className="bg-gray-200 min-h-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register/:id" element={<Register />} />
          <Route path="/myregistrations" element={<MyRegistrations />} />
          <Route
            path="/registration-confirmation"
            element={<RegistrationConfirmation />}
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
