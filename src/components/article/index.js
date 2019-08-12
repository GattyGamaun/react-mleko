import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './_style.scss';
import toggleOpen from '../../decorators/toggleOpen';

class Index extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.array.isRequired,
    }),
  };

  render() {
    const { article, isOpen, toggleOpen } = this.props;

    return (
      <article>
        <h3>{article.title}</h3>
        <p className="text">{article.description}</p>
        {this.openText()}
        <div className="button">
          <button onClick={toggleOpen} className="button-input">
            {(!isOpen) ? 'читать целиком' : 'закрыть'}
          </button>
        </div>
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

export default toggleOpen(Index);
