import React from "react";
import Link from "next/link";
import navbar from "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">FD</h1>
      <ul className="ul">
        <li className="li">
          <Link href={"/"} className="a">
            HOME
          </Link>
        </li>
        <li className="li">
          <Link href={"/about"} className="a">
            ABOUT
          </Link>
        </li>
        <li className="li">
          <Link href={"/padded-weightlifting-gloves"} className="a">
            BLOG
          </Link>
        </li>
        {/* <li className="li">
          <Link
            href={
              "https://www.amazon.com/b?_encoding=UTF8&tag=fitnessdailyd-20&linkCode=ur2&linkId=bab8f75e6eab7519c6ef332fea278bc1&camp=1789&creative=9325&node=23675621011"
            }
            target="_blank"
            className="a"
          >
            VITALS SANCTUARY
          </Link>
        </li> */}

        <li className="li">
          <Link href={"/contact"} className="a">
            CONTACT
          </Link>
        </li>
      </ul>
      <Link href={"/sign-up"} className="a">
        Sign Up
      </Link>
    </nav>
  );
};

export default Navbar;
