import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CheckOut from "./CheckOut";
import Nav from "./Nav";
import Cart from "./pages/Cart";
import Carty from "./pages/Carty";

function App() {
  return (
    <Router>
      
        <Routes>
          
          <Route path = "/" element={<Cart />} />
          <Route path = "/checkout" element={<CheckOut />} />
          <Route path = "/carty" element={<Carty />} />
          
        </Routes>
      
    </Router>
  );
}

export default App;
