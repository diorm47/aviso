import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import "./login-auth.css";

import googleIcon from "../../assets/icons/google-icon.png";
import vkIcon from "../../assets/icons/vk-icon.png";

function LoginPage() {
  React.useEffect(() => {
    document.title = `Вход в аккаунт`;
  }, []);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onAuthorize = (data) => {
    console.log(data);
  };

  return (
    <div className="profile">
      <div className="profile_wrapper">
        <div className="autorizing_page">
          <div className="sign_in" data-aos="fade-up" data-aos-duration="1000">
            <h2>Вход в аккаунт</h2>

            <div className="signin_form">
              <form onSubmit={handleSubmit(onAuthorize)}>
                <div className="email_sign">
                  <p>E-mail или логин</p>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span>* E-mail или логин объязательны!</span>
                  )}
                </div>
                <div className="password_sign">
                  <p>Пароль</p>
                  <input
                    type="password"
                    {...register(
                      "password",

                      { required: true }
                    )}
                  />
                  {errors.password && <span>* Пароль объязательный!</span>}
                </div>
                <div className="login_links">
                  <a href="#">
                    <img src={googleIcon} alt="google icon" />
                  </a>
                  <a href="#">
                    <img src={vkIcon} alt="vk icon" />
                  </a>
                </div>

                <div className="signin_button">
                  <input
                    className="submit_button"
                    type="submit"
                    value="ВОЙТИ"
                  />
                </div>
              </form>
              <div className="password_recovery">
                <NavLink to="/auth">
                  <p>Создать новый аккаунт</p>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
