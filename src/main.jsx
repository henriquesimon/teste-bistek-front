import React from "react";
import ReactDOM from "react-dom/client";
import { ProductsPage } from "./screens/product-page";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductsPage />
  </React.StrictMode>
);
