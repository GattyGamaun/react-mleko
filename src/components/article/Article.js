import React, {Component} from 'react';
import './Article.css';
import divider from './img/divider-gold.png';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }
  render() {
  const {article} = this.props;

    return (
      <article>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        {this.openText()}
        <button onClick={this.toggleOpen}>
          {(!this.state.isOpen) ? 'читать целиком' : 'закрыть'}
        </button>
      </article>
    );
  }

  openText() {
    if (!this.state.isOpen) return null;
    const {article} = this.props;
  return <section>{article.text}</section>
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
}

export default Article;
