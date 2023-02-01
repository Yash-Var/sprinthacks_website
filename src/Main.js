import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
const Main = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<LoginPage />} /> */}
        <Route path="/" element={<App />} />
        {/* <Route path="/weather" element={<Weather />} />
        <Route path="/rating" element={<Rating />} />
        <Route path="/rahiii" element={<Blog />} />
        <Route path="/city" element={<City />} />
        <Route path="/destination" element={<Destination />} /> */}
        {/* <Weather/> */}
      </Routes>
    </div>
  );
};

export default Main;
