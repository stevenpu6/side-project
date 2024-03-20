import "./App.css";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/not-found" exact element={<NotFound />} />
          <Route path="/" exact element={<Home />} />
          <Route path="*" exact element={<Navigate to="/not-found" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
