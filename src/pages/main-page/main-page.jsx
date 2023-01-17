import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import back_img from "../../assets/images/header-img.png";

import { ReactComponent as First } from "../../assets/icons/main/first.svg";
import { ReactComponent as Second } from "../../assets/icons/main/second.svg";
import { ReactComponent as Third } from "../../assets/icons/main/third.svg";
import { ReactComponent as Fourth } from "../../assets/icons/main/fourth.svg";
import { ReactComponent as Seven } from "../../assets/icons/main/seven.svg";
import { ReactComponent as Six } from "../../assets/icons/main/six.svg";
import { ReactComponent as Five } from "../../assets/icons/main/five.svg";

import { ReactComponent as Nine } from "../../assets/icons/main/nine.svg";
import { ReactComponent as Ten } from "../../assets/icons/main/ten.svg";
import { ReactComponent as Eleven } from "../../assets/icons/main/eleven.svg";
import { ReactComponent as Tvelve } from "../../assets/icons/main/tvelve.svg";
import { ReactComponent as Thirty } from "../../assets/icons/main/thirty.svg";
import { ReactComponent as Forthy } from "../../assets/icons/main/forthy.svg";
import { ReactComponent as Team } from "../../assets/icons/main/team.svg";

import "./main-page.css";

function MainPage() {
  React.useEffect(() => {
    document.title = `Aviso - Заработок в интернете и раскрутка`;
  }, []);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <header>
        <img src={back_img} alt="back_img" />
        <div className="header_wrapper">
          <h1 data-aos="fade-up" data-aos-duration="1000">
            Продвигайте с нами
          </h1>
          <div className="header_text">
            <p data-aos="fade-up" data-aos-duration="1000">
              AVISO – это незаменимый помощник по продвижению бизнеса в
              интернете. С нами вы сможете привлечь потенциальных клиентов и
              открыть новые каналы получения прибыли для вашего бизнеса.
            </p>
          </div>
        </div>
      </header>
      <section className="header_servises_block">
        <div className="header_servises">
          <div
            className="header_service"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <First />
            <p>Многофункциональный сервис заданий</p>
          </div>
          <div
            className="header_service"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Second />
            <p>Продвижение сайтов в поисковых системах</p>
          </div>
          <div
            className="header_service"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Third />
            <p>Продвижение YouTube</p>
          </div>
          <div
            className="header_service header_second_row"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Fourth />
            <p>Продвижение VК</p>
          </div>
          <div
            className="header_service header_second_row"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Five />
            <p>Серфинг</p>
          </div>
          <div
            className="header_service header_second_row"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Six />
            <p>Контекстная реклама</p>
          </div>

          <div
            className="header_service header_second_row"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Seven />
            <p>Баннерная реклама</p>
          </div>
        </div>
      </section>
      <div></div>
      <section className="earning_section">
        <div
          className="section_title"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1>Зарабатывай с нами</h1>
        </div>

        <p data-aos="fade-up" data-aos-duration="1000">
          На AVISO – собраны самые простые и легальные методы заработка реальных
          денег. Мы платим вам за просмотр сайтов наших рекламодателей, за
          чтение писем и выполнение несложных заданий и т.д. Благодаря отличной
          реферальной системе ваш ежедневный заработок может увеличиваться в
          разы.
        </p>

        <div className="earning_servises">
          <div
            className="earning_service"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Nine />
            <p>7 методов заработка</p>
          </div>
          <div
            className="earning_service"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Ten />
            <p>Минималка 0 рублей</p>
          </div>
          <div
            className="earning_service"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Eleven />
            <p>Реф.бек и бонусы</p>
          </div>
          <div
            className="earning_service header_second_row"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Tvelve />
            <p>Конкурсы</p>
          </div>
          <div
            className="earning_service header_second_row"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Thirty />
            <p>Карьера</p>
          </div>
          <div
            className="earning_service header_second_row"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Team />
            <p>Рефералы</p>
          </div>

          <div
            className="earning_service header_second_row"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Forthy />
            <p>Удобная платформа</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainPage;
