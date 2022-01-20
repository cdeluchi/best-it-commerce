import React from "react";
import Navbar from "./components/Navbar/Navbar.js";
// import Login from "./components/Login/Login";
import Products from "./components/Products/Products";
import { BrowserRouter as Router } from 'react-router-dom';
import { productData } from "./components/Products/data.js";

import Footer from "./components/Footer/Footer.js";
import { GlobalStyle } from "./components/globalStyle.js";

const App = () => {
  return (
    <Router>
      <Navbar />
      {/* <Login /> */}
      <Products heading="Choose your favorite" data={productData}/>
      <GlobalStyle/>
      <Footer />
    </Router>
  );
}

export default App;
