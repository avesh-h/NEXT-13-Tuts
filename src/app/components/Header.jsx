import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header" style={{ borderBottom: "2px solid red" }}>
      <div className="container">
        <div className="logo">
          <Link href="/">YOUR LOGO</Link>
        </div>
        <div className="links">
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              justifyContent: "space-evenly",
            }}
          >
            <li>
              <Link href="/">home</Link>
            </li>
            <li>
              <Link href="/about">about</Link>
            </li>
            <li>
              <Link href="about/team">our team</Link>
            </li>
            <li>
              <Link href="/contact">contact us</Link>
            </li>
            <li>
              <Link href="/code/repos">code</Link>
            </li>
            <li>
              <Link href="/courses">courses</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
