import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import { NavLink } from "react-router-dom";
import "./nav-bar.css";

import { useEffect } from "react";

import { ReactComponent as MenuIcon } from "../../assets/icons/burger_menu.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close_icon.svg";
import { useState } from "react";

function NavBar() {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <nav>
        <div className="naw_wrapper">
          <div
            className="nav_logo"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <NavLink to="/">
              <p>AVISO</p>
            </NavLink>
          </div>
          <div
            className="nav_list"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <NavLink to="/news">
              <div className="nav_list_item">
                <p>Новости</p>
              </div>
            </NavLink>
            <NavLink to="/pays">
              <div className="nav_list_item">
                <p>Выплаты</p>
              </div>
            </NavLink>
            <NavLink to="/top">
              <div className="nav_list_item">
                <p>Топ</p>
              </div>
            </NavLink>
            <NavLink to="/articles">
              <div className="nav_list_item">
                <p>Статьи</p>
              </div>
            </NavLink>
            <NavLink to="/competition">
              <div className="nav_list_item">
                <p>Конкурсы</p>
              </div>
            </NavLink>
            <NavLink to="/advertise">
              <div className="nav_list_item">
                <p>Сделать заказ</p>
              </div>
            </NavLink>
          </div>
          <div className="nav_auth">
            <NavLink to="/login">
              <div
                className="nav_list_item"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <p>Войти</p>
              </div>
            </NavLink>
          </div>
          <div
            onClick={() => setMenu(false)}
            className={menu ? "nav_burger_menu" : "hide_burger_menu"}
          >
            <CloseIcon />
          </div>
          <div
            onClick={() => setMenu(true)}
            className={menu ? "nav_burger_close" : "hide_close_menu"}
          >
            <MenuIcon data-aos="fade-down" data-aos-duration="1000" />
          </div>
        </div>
      </nav>

      <div
        onClick={() => setMenu(false)}
        className={menu ? "nav_mobilie_menu" : "hide_mobile_menu"}
      >
        <NavLink to="/news">
          <div className="nav_list_item">
            <p>Новости</p>
          </div>
        </NavLink>
        <NavLink to="/pays">
          <div className="nav_list_item">
            <p>Выплаты</p>
          </div>
        </NavLink>
        <NavLink to="/top">
          <div className="nav_list_item">
            <p>Топ</p>
          </div>
        </NavLink>
        <NavLink to="/articles">
          <div className="nav_list_item">
            <p>Статьи</p>
          </div>
        </NavLink>
        <NavLink to="/competition">
          <div className="nav_list_item">
            <p>Конкурсы</p>
          </div>
        </NavLink>
        <NavLink to="/advertise">
          <div className="nav_list_item">
            <p>Сделать заказ</p>
          </div>
        </NavLink>
        <NavLink to="/login">
        <div
          className="nav_list_item"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <p>Войти</p>
        </div>
      </NavLink>
      </div>

  
    </>
  );
}

export default NavBar;
