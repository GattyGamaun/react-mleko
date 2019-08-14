import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from '../article';
import accordion from '../../decorators/accordeon';

class ListOfArticles extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    //from accordion
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func.isRequired
  };

  render() {
    const { articles, openItemId, toggleOpenItem } = this.props;
    if (!articles.length) return null;
    const list = articles.map(article =>
      <li key={article.id}>
        <Article
          article={article}
          isOpen={article.id === openItemId}
          toggleOpen={toggleOpenItem(article.id)}
        />
      </li>);
    return (
      <ul>{list}</ul>
    );
  }
}

export default accordion(ListOfArticles);
