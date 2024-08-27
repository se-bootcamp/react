import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

const imgURL = "http://www......file.jpg";

root.render(
  <div>
    <Header />
    {/* <Nav />
    <Hero /> */}
    <div>
      {" "}
      <img src={imgURL} alt={"logo"} /> <img src={imgURL} alt={"logo"} />
      card componentsdfsdfsd
    </div>
    <div>card componentsdfsdfsd</div>
    <footer>FOOTER blockasdasd</footer>
    {/* <Nav /> */}
  </div>
);
