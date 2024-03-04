import React, { useState } from "react";
import axios from "axios";
// import Navbar from "../Navbar";

function Header({ children }) {
  return (
    <>
      <header>{children}</header>
    </>
  );
}

export default Header;
