import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './_style.scss';

class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.array.isRequired,
      src: PropTypes.string,
    }),
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func,
  };

  render() {
    const { article, isOpen, toggleOpen } = this.props;
    return (
      <article>
        <h3>{article.title}</h3>
        <p className="text">{article.description}</p>
        {/* {(!article.src) ? <a href={article.src} rel="noopener noreferrer">Источник</a> : null} */}
        {this.openText()}
        <button onClick={toggleOpen} className="button">
          {(!isOpen) ? 'читать целиком' : 'закрыть'}
        </button>
      </article>
    );
  }

  openText() {
    const { article, isOpen } = this.props;
    if (!isOpen) return null;
    const paragraphs = [];
    // TODO check text is array
    article.text.forEach((paragraph, key) => {
      paragraphs.push(<p className="text expanded" key={key}>{paragraph}</p>);
    });
    return paragraphs;
  }
}

export default Article;
