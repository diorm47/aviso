import React from "react";
import "./articles-page.css";

function ArticlesPage() {
  React.useEffect(() => {
    document.title = `Статьи`;
  }, []);
  let articles = [];
  return (
    <div className="articles_page">
      <div className="articles_page_title">
        <h1>Статьи</h1>
      </div>
      {articles ? (
        <div className="articles_error">
          <p>Статей пока нет.</p>
        </div>
      ) : (
        <div className="articles_content"></div>
      )}
    </div>
  );
}

export default ArticlesPage;
