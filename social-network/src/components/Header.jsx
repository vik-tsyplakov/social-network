import React from "react";
import logo from "./../img/header/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} width="24" height="24" alt="logo" />
    </header>
  );
}
