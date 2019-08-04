import React from 'react';
import Article from '../article/Article';

function ListOfArticles({ articles }) {
  const list = articles.map(article => {
    return <li key={article.id}><Article article={article}/></li>;
  });
  return (
    <ul>{list}</ul>
  );
}

export default ListOfArticles;
