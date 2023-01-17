import React from "react";
import "./news-page.css";

function NewsPage() {
  React.useEffect(() => {
    document.title = `Новости`;
  }, []);
  let news = [];
  return (
    <div className="news_page">
      <div className="news_page_title">
        <h1>Новости</h1>
      </div>
      {news ? (
        <div className="news_error">
          <p>Новостей пока нет.</p>
        </div>
      ) : (
        <div className="news_content"></div>
      )}
    </div>
  );
}

export default NewsPage;
