import "./header.css";
import React from "react";
function Header({ children }) {
  return (
    <>
      <header className="header">{children}</header>
    </>
  );
}

export default Header;
