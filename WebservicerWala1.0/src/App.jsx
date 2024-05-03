import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import { About } from "./pages/About.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Service } from "./pages/Service.jsx";
import { Register } from "./pages/Register.jsx";
import { Login } from "./pages/Login.jsx";
import { Footer } from "./components/Footer.jsx";
import { ErrorPage } from "./pages/ErrorPage.jsx";
import { Logout } from "./pages/Logout.jsx";
import AdminLayout from "./components/AdminLayouts.jsx";
import AdminUsers from "./pages/adminPages/AdminUsers.jsx";
import AdminContacts from "./pages/adminPages/AdminContacts.jsx";
import AdminService from "./pages/adminPages/AdminService.jsx";
import { AdminUserData } from "./pages/adminPages/AdminUserData.jsx";
import "./App.css";
import Pricing from "./components/Pricing.jsx";
import AdminServiceList from "./pages/adminPages/AdminServiceList .jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/service" element={<Service />} />

          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="contacts" element={<AdminContacts />} />
            <Route path="service" element={<AdminService />} />
            <Route path="serviceUpdate" element={<AdminServiceList />} />
            <Route path="users/:id/edit" element={<AdminUserData />} />
          </Route>

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
