import React from "react";
import "./articles-page.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function ArticlesPage() {
  React.useEffect(() => {
    document.title = `Статьи`;
  }, []);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  let articles = [];
  return (
    <div className="articles_page">
      <div
        className="articles_page_title"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1>Статьи</h1>
      </div>
      {articles ? (
        <div
          className="articles_error"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p>Статей пока нет.</p>
        </div>
      ) : (
        <div className="articles_content"></div>
      )}
    </div>
  );
}

export default ArticlesPage;
