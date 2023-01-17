import React from "react";
import "./competiton-page.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function CompetitonPage() {
  React.useEffect(() => {
    document.title = `Активные конкурсы`;
  }, []);
  let competiton = [];
  return (
    <div className="competiton_page">
      <div className="competiton_page_title">
        <h1>Активные конкурсы</h1>
      </div>
      {!competiton ? (
        <div className="competiton_error">
          <p>Конкурсов пока нет.</p>
        </div>
      ) : (
        <div className="competiton_content">
          <Tabs>
            <TabList>
              <Tab>Исполнителям</Tab>
              <Tab>Рефоводам</Tab>
              <Tab>Рекламодателям</Tab>
            </TabList>

            <TabPanel>
              <p>Конкурсов пока нет</p>
            </TabPanel>
            <TabPanel>
              <p>Конкурсов пока нет</p>
            </TabPanel>
            <TabPanel>
              <p>Конкурсов пока нет</p>
            </TabPanel>
          </Tabs>
        </div>
      )}
    </div>
  );
}

export default CompetitonPage;
