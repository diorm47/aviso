import React from "react";
import "./faq-page.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

function FaqPage() {
  React.useEffect(() => {
    document.title = `Помощь`;
  }, []);
  return (
    <div className="faq_page">
      <div className="faq_page_title">
        <h1>Помощь</h1>
      </div>

      <div className="faq_content">
        <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Система '----' - это современная система активной рекламы.
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Система '----' - это современная система активной рекламы. С
                помощью системы '----' можно не только привести на свой сайт
                тысячи посетителей и тем самым увеличить свои продажи, но и
                неплохо заработать просматривая сайты других пользователей.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Как можно зарабатывать тут?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Зарабатывать в системе aviso.bz очень интересно. <br />
                Для того, чтобы зарабатывать, Вам необходимо выбрать более
                подходящую для Вас рекламу для заработка.
                <br />
                Есть четыре способа заработать:
                <br />
                1. Просматривать платные ссылки рекламодателей.
                <br />
                2. Выполнять задания рекламодателей.
                <br />
                3. Читать письма рекламодателей.
                <br />
                4. Выполнять тесты рекламодателей.
                <br />
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Могу ли я иметь несколько аккаунтов?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Категорически нет. В системе '-----' разрешается иметь только
                один аккаунт.
              </p>
              <p>
                Если вы потеряли пароль от вашей учётной записи, Вы можете его
                восстановить пройдя процедуру восстановления пароля.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Сколько всего я могу заработать?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>Мы не устанавливаем лимитов на ваш максимальный заработок.</p>
              <p>
                Также как и не устанавливаем рамки на Ваш возраст и
                профессиональные навыки.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Почему моя статистика не обновляется?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Сайт рекламодателя Вы должны просматривать до момента
                перенаправления на сайт рекламодателя. <br /> <br />
                Если вы этого не сделаете - средства не будут зачислены на ваш
                счёт. Обычно статистика обновляется в течении времени от 2 до 10
                минут
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Как я могу получить заработанные деньги?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                В аккаунте есть ссылка "Вывод средств" <br />
              </p>
              <p>
                Все выплаты мы делаем через наших партнёров электронных денег
                WebMoney, ЮMoney и Payeer в автоматическом режиме. Выплату можно
                получить один раз в сутки. Максимальная сумма для выплаты
                составляет 1000 рублей в сутки.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Когда я получу платеж?</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                После создания запроса на вывод средств администрация '----'
                проверит ваш аккаунт на нарушение правил.
              </p>
              <p>
                Если всё соответствует правилам системы '----', то вы получите
                платёж в течение 24 часов.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Почему при просмотре некоторых ссылок таймер не идёт?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>Вы просматриваете ссылку в активном окне.</p>
              <p>
                С такого окна нельзя уходить такие ссылки помечаются значком
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Как повысить или понизить карму пользователю?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Понижать и повышать карму пользователям могут только те
                пользователи, которые достигли статуса "Рабочий" и только 1 раз.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default FaqPage;
