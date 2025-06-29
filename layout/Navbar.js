import React from "react";

const Navbar = () => {
  return (
    <div className="">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="">
          <a className="btn btn-ghost text-xl">Todos</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <details>
                <summary>register/login</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
