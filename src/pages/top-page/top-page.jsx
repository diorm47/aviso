import React from "react";
import DataTable from "../../components/data-table/data-table";
import "./top-page.css";

import { ReactComponent as Pie } from "../../assets/icons/pie-chart.svg";

function TopPage() {
  React.useEffect(() => {
    document.title = `Топ пользователи`;
  }, []);
  let top = [];
  const columns = [
    { key: "id", name: "N" },
    { key: "login", name: "Логин, ID" },
    { key: "stats", name: "Статистика" },
    { key: "index", name: "Показатель" },
  ];

  const rows = [
    {
      id: "1",
      login: `veronika_jw   ID: 77705`,
      stats: <Pie />,
      index: 673902.94,
    },
    {
      id: "2",
      login: `artemmirny     ID: 39591`,
      stats: <Pie />,
      index: 591183.56,
    },
    {
      id: "3",
      login: `07bharat     ID: 838518`,
      stats: <Pie />,
      index: 279861,
    },
    {
      id: "4",
      login: `mativ88     ID: 586008`,
      stats: <Pie />,
      index: 259743,
    },
    {
      id: "5",
      login: `feelpay     ID: 579058`,
      stats: <Pie />,
      index: 231421.69,
    },
  ];
  return (
    <div className="top_page">
      <div className="top_page_title">
        <h1>Топ пользователи</h1>
      </div>
      <div className="top_page_text">
        <p>
          На данной странице приведён список участников проекта '----', которые
          добились больших результатов. Вы, наверняка, спросите себя “а как же
          достичь такой высоты и попасть в Топ?”. Ответ максимально прост! Нужно
          приложить усилия и идти к своей цели. Привлекайте рефералов, кликайте
          по ссылкам в сёрфинге, читайте письма, выполняйте различные задания и
          тесты, которые помогут вам заработать рейтинг.
        </p>
      </div>
      {!top ? (
        <div className="top_error">
          <p>Топ пользователей пока нет.</p>
        </div>
      ) : (
        <div className="top_content">
          <DataTable columns={columns} rows={rows} />
        </div>
      )}
    </div>
  );
}

export default TopPage;
