import React from 'react';
import './_style.scss';

const Article = ({ article, isOpen, toggleOpen }) => {
  const openText = () => {
    if (!isOpen) return null;
    const paragraphs = [];
    // TODO check text is array
    article.text.forEach((paragraph, key) => {
      paragraphs.push(
        <p className="text expanded" key={key}>
          {paragraph}
        </p>
      );
    });
    return paragraphs;
  };

  return (
    <article>
      <h3>{article.title}</h3>
      <p className="text">{article.description}</p>
      {/* {(!article.src) ? <a href={article.src} rel="noopener noreferrer">Источник</a> : null} */}
      {openText()}
      <button onClick={toggleOpen} className="button">
        {!isOpen ? 'читать целиком' : 'закрыть'}
      </button>
    </article>
  );
};

export default Article;
