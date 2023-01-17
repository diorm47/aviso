import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "./news-page.css";

function NewsPage() {
  React.useEffect(() => {
    document.title = `Новости`;
  }, []);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  let news = [];
  return (
    <div className="news_page">
      <div
        className="news_page_title"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1>Новости</h1>
      </div>
      {news ? (
        <div className="news_error">
          <p data-aos="fade-up" data-aos-duration="1000">
            Новостей пока нет.
          </p>
        </div>
      ) : (
        <div className="news_content"></div>
      )}
    </div>
  );
}

export default NewsPage;
