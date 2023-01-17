import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import "./login-auth.css";

function AuthPage() {
  React.useEffect(() => {
    document.title = `Регистрация`;
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

  const onSubmit = (data) => {
    if (data.create_password !== data.confirm_password) {
      alert("Введите пароль повторно");
    }
    console.log(data);
  };
  return (
    <div className="profile">
      <div className="profile_wrapper">
        <div className="autorizing_page">
          <div
            className="create_acc"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2>Регистрация</h2>

            <div className="create_acc_form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <p>Логин (англ.) (Изменить будет невозможно)</p>
                <input
                  type="text"
                  {...register("first_name", { required: true })}
                />
                {errors.first_name && (
                  <span>* Логин является обьязательным!</span>
                )}

                <p>E-mail (Изменить будет невозможно)</p>
                <input
                  type="email"
                  {...register("email", { required: true })}
                />
                {errors.email && <span>* E-mail является обьязательным!</span>}

                <p>Пароль (Пароль должен быть от 6 символов)</p>
                <input
                  type="password"
                  {...register(
                    "create_password",
                    { min: 4, max: 8 },
                    { required: true }
                  )}
                />
                {errors.create_password && (
                  <span>* Пароль должен быть от 6 символов!</span>
                )}

                <p>Повторите пароль</p>
                <input
                  type="password"
                  {...register(
                    "retry_password",
                    { min: 4, max: 8 },
                    { required: true }
                  )}
                />
                {errors.retry_password && <span>*Повторите пароль!</span>}
                <input
                  className="submit_button"
                  type="submit"
                  value="Зарегистрироваться"
                />
                <div className="password_recovery">
                  <p>
                    Уже есть аккаунт? <NavLink to="/login">Войти</NavLink>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
