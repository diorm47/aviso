import React from "react";
import "./competiton-page.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function CompetitonPage() {
  React.useEffect(() => {
    document.title = `Активные конкурсы`;
  }, []);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  let competiton = [];
  return (
    <div className="competiton_page">
      <div
        className="competiton_page_title"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1>Активные конкурсы</h1>
      </div>
      {!competiton ? (
        <div className="competiton_error">
          <p>Конкурсов пока нет.</p>
        </div>
      ) : (
        <div
          className="competiton_content"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
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
