import React from 'react';
import Body from './Body';
import styles from './Post.scss';

const propTypes = {
  content: React.PropTypes.object,
  wikismith: React.PropTypes.object
};

const childContextTypes = {
  wikismith: React.PropTypes.object
};

class Post extends React.Component {

  constructor(props) {
    super(props);
    this.renderPublishedOn = this.renderPublishedOn.bind(this);
  }

  getChildContext() {
    return { wikismith: this.props.wikismith };
  }

  renderPublishedOn(content) {
    let results;
    if (content.publishedOn !== undefined) {
      results = (
        <span>
          Published On {content.publishedOn}
        </span>
      );
    } else {
      results = <span></span>;
    }
    return results;
  }

  renderAuthor(content) {
    let results;
    if (content.twitter !== undefined) {
      results = (
        <a href={`http://twitter.com/${content.twitter}`}>
          @{content.twitter}
        </a>
      );
    } else {
      results = <span>{content.twitter}</span>;
    }
    return results;
  }

  render() {
    return (
      <div>
        <div className={styles.titleBox}>
          <h1>{this.props.content.title}</h1>
          <h3>{this.props.content.subtitle}</h3>
          <div className={styles.publishedOn}>
            {this.renderPublishedOn(this.props.content)}
            By&nbsp;
            {this.renderAuthor(this.props.content)}
          </div>
        </div>
        <Body ast={this.props.content.ast} />
      </div>
    );
  }
}

Post.propTypes = propTypes;
Post.childContextTypes = childContextTypes;
module.exports = Post;
