import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CheckOut from "./CheckOut";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </Router>
  );
}

export default App;
