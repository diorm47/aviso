import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer_wrapper">
        <div className="footer_logo">
          <NavLink to="/">
            <p>AVISO © 2023</p>
          </NavLink>
        </div>
        <div className="footer_list">
          <div className="footer_list_item">
            <NavLink to="/rules">
              <p>Публичная оферта</p>
            </NavLink>
          </div>
          <div className="footer_list_item">
            <NavLink to="/agreement">
              <p>Соглашения</p>
            </NavLink>
          </div>
          <div className="footer_list_item">
            <NavLink to="/privasy-policy">
              <p>Политика конфиденциальности</p>
            </NavLink>
          </div>

          <div className="footer_list_item">
            <NavLink to="/contact">
              <p>Контакты</p>
            </NavLink>
          </div>
          <div className="footer_list_item">
            <NavLink to="/faq">
              <p>Помощь</p>
            </NavLink>
          </div>
          <div className="footer_list_item">
            <NavLink to="/support">
              <p>Техподдержка</p>
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
