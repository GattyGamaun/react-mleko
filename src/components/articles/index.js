import React from 'react';
import Article from '../article';
import accordion from '../../decorators/accordeon';

const ListOfArticles = ({ articles, openItemId, toggleOpenItem }) => {
  if (!articles.length) return null;

  const list = articles.map((article) => (
    <li key={article.id}>
      <Article article={article} isOpen={article.id === openItemId} toggleOpen={toggleOpenItem(article.id)} />
    </li>
  ));

  return <ul>{list}</ul>;
};

export default accordion(ListOfArticles);
