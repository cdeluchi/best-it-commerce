import React from "react";
import Navbar from "./components/Navbar/Navbar.js";
// import Login from "./server/routers/Singup";
import Products from "./components/Products/Products";
import { BrowserRouter as Router } from 'react-router-dom';
import { productData } from "./components/Products/data.js";
import Footer from "./components/Footer/Footer.js";
import { GlobalStyle } from "./components/globalStyle.js";
import Singup from "./server/routers/Singup";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Singup />
      {/* <Login /> */}
      <Products heading="Choose your favorite" data={productData}/>
      <GlobalStyle/>
      <Footer />
    </Router>
  );
}

export default App;
