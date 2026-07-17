import { Routes, Route, Link } from "react-router-dom";
import "./App.css"
import Home from "./Home";
import Products from "./Products";
import Contacts from "./Contacts";
import NotFound from "./NotFound";
function App() {
  return (
    <>
      <nav>
        <Link to="/"> Головна</Link> {" "}
        <Link to="/products">Товари</Link> {" "}
        <Link to="/contacts">Контакти</Link>  {" "}
    
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contacts" element={<Contacts />} />
      
        < Route path="*" element= {<NotFound/>} />
      </Routes>
    </>
  );
}

export default App;