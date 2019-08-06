import React, { Component } from 'react';
import Article from '../article/Article';

class ListOfArticles extends Component {

  static defaultProps = {
    articles : [],
  };

  render() {
    const { articles } = this.props;
    if (!articles.length) return null;
    const list = articles.map(article => {
      return <li key={article.id}><Article article={article}/></li>;
    });
    return (
      <ul>{list}</ul>
    );
  }
}

export default ListOfArticles;
