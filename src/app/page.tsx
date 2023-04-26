import React from "react";
import Link from "next/link";

// Route = '/'

const HomePage = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/code/repos">code</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
