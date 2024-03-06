import React from "react";

// Header with children inside (usually Navbar only)
function Header({ children }) {
  return (
    <>
      <header>{children}</header>
    </>
  );
}

export default Header;
