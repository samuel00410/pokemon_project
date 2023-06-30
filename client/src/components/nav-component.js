import React from "react";
import { Link } from "react-router-dom";

const NavComponent = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                首頁
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                註冊會員
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                會員登入
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pokedex">
                寶可夢圖鑑
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                登出
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavComponent;
