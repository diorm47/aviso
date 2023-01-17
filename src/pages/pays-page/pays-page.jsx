import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PaysChart from "../../components/charts/charts";
import DataTable from "../../components/data-table/data-table";
import "./pays-page.css";

function PaysPage() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  React.useEffect(() => {
    document.title = `Список выплат за последние 24 часа`;
  }, []);

  const columns = [
    { key: "id", name: "Счет пользователя" },
    { key: "summ", name: "Сумма(руб.)" },
    { key: "date", name: "Дата и время выплаты" },
    { key: "pay_sistem", name: "Платежная система" },
  ];

  const rows = [
    {
      id: "P1074XXXX",
      summ: 355,
      date: "15.01.2023 07:56:35",
      pay_sistem: "Webmoney",
    },
    {
      id: "7999537XXXX",
      summ: 5585,
      date: "15.01.2023 07:56:06",
      pay_sistem: "PAYEER",
    },
    {
      id: "359037XXXX",
      summ: 5655,
      date: "15.01.2023 07:56:06",
      pay_sistem: "QIWI",
    },
    {
      id: "2599037XXXX",
      summ: 55255,
      date: "15.01.2023 07:56:06",
      pay_sistem: "PAYEER",
    },

    {
      id: "4999037XXXX",
      summ: 524,
      date: "15.01.2023 07:56:06",
      pay_sistem: "VISA",
    },
    {
      id: "255559037XXXX",
      summ: 554,
      date: "15.01.2023 07:56:06",
      pay_sistem: "PAYEER",
    },
    {
      id: "959037XXXX",
      summ: 554,
      date: "15.01.2023 07:56:06",
      pay_sistem: "PAYEER",
    },
    {
      id: "1199037XXXX",
      summ: 4224,
      date: "15.01.2023 07:56:06",
      pay_sistem: "ЮMoney",
    },
  ];

  return (
    <div className="pays_page">
      <div className="pays_page_title">
        <h2 data-aos="fade-up" data-aos-duration="1000">
          Список выплат за последние 24 часа
        </h2>
      </div>
      <div className="charts_block" data-aos="fade-up" data-aos-duration="1000">
        <PaysChart />
        <p>Всего выплачено за 24 часа: 1484 руб. (Выплат: 397)</p>
      </div>
      <div className="pays_table" data-aos="fade-up" data-aos-duration="1000">
        <DataTable columns={columns} rows={rows} />
      </div>
    </div>
  );
}

export default PaysPage;
