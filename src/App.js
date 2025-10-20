import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import Header from "./components/Header";
import Register from "./screens/Register";
import MyRegistrations from "./screens/MyRegistrations";
import RegistrationConfirmation from "./screens/RegistrationConfirmation";
import NotFound from "./screens/NotFound";
import ViewRegisteration from "./screens/ViewRegisteration";

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
          <Route
            path="/view-registeration/:id"
            element={<ViewRegisteration />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
