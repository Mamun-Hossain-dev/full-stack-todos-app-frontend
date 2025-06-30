import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="">
          <Link className="btn btn-ghost text-xl" href={"/"}>
            Todos
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <details>
                <summary>register/login</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <Link href={"/login"}>LogIn</Link>
                  </li>
                  <li>
                    <Link href={"/register"}>Register</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href={"/dashboard"}>dashboard</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
