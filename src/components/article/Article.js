import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './_Article.scss';

class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  };
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
