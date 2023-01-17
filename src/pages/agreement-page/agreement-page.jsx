import React from "react";
import "./agreement-page.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function AgreementPage() {
  React.useEffect(() => {
    document.title = `Услуги проекта, порядок оплаты и доставки`;
  }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="agreement_page">
      <div
        className="agreement_title"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1>Услуги проекта, порядок оплаты и доставки</h1>
      </div>

      <div
        className="agreement_content"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h3>Предоставляемые услуги</h3>
        <p>
          '----' — сервис, предоставляющий качественные рекламные услуги, а так
          же возможность формирования дополнительного источника дохода. Ниже
          представлен полный перечень наших услуг : <br />
        </p>
        <p>
          Размещение рекламы в серфинге от 0.026 коп. за 1 просмотр
          <br />
          Размещение рекламы в оплачиваемых письмах (внутри проекта) От 0.040
          коп. за 1 письмо
          <br />
          Размещение оплачиваемых тестов От 0.2 коп. за 1 выполнение
          <br />
          Контекстная реклама от 0.65 коп. за 1 переход
          <br />
          Баннеры от 150 руб. в сутки
          <br />
          Каталог сайтов от 2.75 руб. в сутки
          <br />
          Реклама во фрейме от 10.75 руб. в сутки
          <br />
          Задания от 0.25 коп. за 1 выполнение
          <br />
          YouTube:
          <br />
          Просмотр видео от (0.05 коп), лайки от (0.12 коп), подписки от (0.30
          коп)
          <br />
          Вконтакте:
          <br />
          Вступить в группу от (0.2 коп), лайки от (0.1 коп), репосты от (0.25
          коп)
          <br />
          Услуги комиссионной площадки купли/продажи рефералов
          <br />
          Размещение аватара на доске почета
          <br />
          Размещение аватара на гудреф - 10 руб.
          <br />
          Массовая рассылка писем от 0.1 руб. за 1 письмо
        </p>
        <h3>Важно!</h3>
        <p>
          '----' не предоставляет иных услуг, кроме перечисленных выше. Мы не
          продаём рефералов и не используем рефботов. Мы не организуем матрицы и
          финансовые пирамиды. Мы не практикуем и не поощряем азартные игры. Мы
          также ни под каким предлогом не предоставляем услуги обмена
          электронных валют, используемых в проекте. Техническая возможность
          подобных действий на '----' отсутствуют. Попытки обмана системы
          наказываются.
        </p>
        <h3>Порядок оплаты услуг и доставка</h3>
        <p>
          Все услуги на '----' оплачиваются путём добавления их в "Корзину" и
          оплаты посредством предлагаемых платёжных систем. Услуга, выбранная
          пользователем, бронируется на определённое время, предоставляя
          пользователю возможность оплатить покупку или продолжить выбор услуг.
          Баланс аккаунта нельзя пополнить посредством платёжных систем. При
          оплате заказа вы будете переправлены на сервис платежной системы или
          кассы, которую вы выбрали. Все услуги оплачиваются и доставляются
          мгновенно, в автоматическом режиме. Все услуги подробно описаны и
          имеют недвусмысленные названия. Покупатель обязан понимать смысл своих
          действий. При оплате каких-либо услуг на нашем сервисе, а затем отказа
          от их использования, денежные средства не возвращаются. В случае
          каких-либо сбоев в оплате и/или доставке услуг, обращайтесь,
          пожалуйста, в нашу Службу технической поддержки.
        </p>
        <h3>Денежные операции</h3>
        <p>
          В системе '----' у каждого пользователя существует 2 счета:
          <br /> Основной счет - Cчет для начисления и вывода заработанных
          средств. Выплаты с Основного счета производятся посредством
          электронных платежных систем WebMoney, YandexMoney, QiWi, Perfect
          Money. <br /> Рекламный счет - Счет с которого осуществляются все
          покупки в системе. Рекламный счет можно пополнить путем перевода
          заработанных средств с Основного счета, или посредством всех доступных
          платежных систем на проекте '----'. Пополнение рекламного счета
          производится в автоматическом режиме. Вывод средств с Рекламного счета
          на кошелек пользователя, а так же перевод средств с Рекламного счета
          на Основной - не производится, что исключает обменник. Исключение,
          если услуга не была оказана, в таком случае средства могут быть
          возвращены только на те реквизиты, с которых было пополнение. Время
          возврата составляет от 1 дня до 7 дней.
        </p>
        <h3>Уведомление о рисках для пользователей WebMoney Transfer</h3>
        <p>
          Предлагаемые товары и услуги предоставляются не по заказу лица либо
          предприятия, эксплуатирующего систему WebMoney Transfer. Мы являемся
          независимым предприятием, оказывающим услуги, и самостоятельно
          принимаем решения о ценах и предложениях. Предприятия, эксплуатирующие
          систему WebMoney Transfer, не получают комиссионных вознаграждений или
          иных вознаграждений за участие в предоставлении услуг и не несут
          никакой ответственности за нашу деятельность. <br /> Аттестация,
          произведенная со стороны WebMoney Transfer, лишь подтверждает наши
          реквизиты для связи и удостоверяет личность. Она осуществляется по
          нашему желанию и не означает, что мы каким-либо образом связаны с
          продажами операторов системы WebMoney.
        </p>
        <h3>Информационная безопасность</h3>
        <p>
          Оплатить заказ можно банковскими картами Visa, Master Card, «Мир» или
          через платежные системы Apple Pay. (Вы можете указать дополнительные
          способы оплаты на своем сайте оптимально). Чтобы оплатить покупку, вы
          будете перенаправлены на сервер платежной системы Unitpay, на котором
          нужно ввести необходимые данные. При оплате банковской картой
          безопасность платежей гарантирует процессинговый центр Unitpay.
          Платежная система Unitpay обладает подтвержденным сертификатом
          соответствия требованиям стандарта PCI DSS в части хранения, обработки
          и передачи данных держателей карт. Стандарт безопасности банковских
          карт PCI DSS поддерживается международными платежными системами,
          включая MasterCard и Visa, Inc. Система Unitpay также является
          участником программы непрерывного соответствия Compliance Control PCI
          DSS Compliance Process (P.D.C.P.). Ваши конфиденциальные данные,
          необходимые для оплаты (реквизиты карты, регистрационные данные и
          др.), не поступают в интернет-магазин — их обработка производится на
          стороне процессингового центра Unitpay и полностью защищена.
        </p>
      </div>
    </div>
  );
}

export default AgreementPage;
