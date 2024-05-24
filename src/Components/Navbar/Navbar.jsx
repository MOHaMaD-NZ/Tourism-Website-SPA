import React, { useState } from "react";
import "./navbar.css";
import { MdCardTravel } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [active, setActive] = useState("navBar");
  const showNav = () => {
    setActive("navBar navbarActive");
  };
  const remove = () => {
    setActive("navBar");
  };
  return (
    <section className="navbarSection">
      <div className="header flex">
        <div className="logo">
          <div className="logodiv">
            <h1>
              <MdCardTravel className="icon" />
              <span>NZ</span>
            </h1>
          </div>
        </div>
        <div className={active}>
          <ul className="navbarLists flex" >
            <li className="navbarItem">
              <a href="" className="navbarLink">
                صفحه ی اصلی
              </a>
            </li>

            <li className="navbarItem">
              <a href="" className="navbarLink">
                پکیج ها
              </a>
            </li>

            <li className="navbarItem">
              <a href="" className="navbarLink">
                {" "}
                خرید
              </a>
            </li>

            <li className="navbarItem">
              <a href="" className="navbarLink">
                درباره ما
              </a>
            </li>

            <li className="navbarItem">
              <a href="" className="navbarLink">
                صفحه ها
              </a>
            </li>

            <li className="navbarItem">
              <a href="" className="navbarLink">
                اخبار
              </a>
            </li>

            <li className="navbarItem">
              <a href="" className="navbarLink">
                راه های ارتباطی
              </a>
            </li>

            <div className="btn">
              <a href="#">همین حالا بخون.</a>
            </div>
          </ul>
          <div onClick={remove} className="closeNavbar">
            <IoMdCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <FaBars className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
