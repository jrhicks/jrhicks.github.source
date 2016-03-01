import React from 'react';

class PostLink extends React.Component {

  render() {
    return (
      <a href={`#/content/${this.props.content.slug}`}>
        {this.props.content.title}
      </a>
    );
  }
}

module.exports = PostLink;
