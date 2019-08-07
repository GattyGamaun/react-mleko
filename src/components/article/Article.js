import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './_Article.scss';
import toggleOpen from '../../decorators/toggleOpen';

class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  };

  render() {
    const { article, isOpen, toggleOpen } = this.props;

    return (
      <article>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        {this.openText()}
        <button onClick={toggleOpen}>
          {(!isOpen) ? 'читать целиком' : 'закрыть'}
        </button>
      </article>
    );
  }

  openText() {
    const { article, isOpen } = this.props;
    if (!isOpen) return null;
    return <section>{article.text}</section>;
  }
}

export default toggleOpen(Article);
