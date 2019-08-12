import React from 'react';
import Article from '../article';

/**
 * @return {null}
 */
function ListOfArticles({ articles = [] }) {
  if (!articles.length) return null;
  const list = articles.map(article => {
    return <li key={article.id}><Article article={article}/></li>;
  });
  return (
    <ul>{list}</ul>
  );
}

export default ListOfArticles;
