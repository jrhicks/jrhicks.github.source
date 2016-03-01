import React from 'react';
import Body from './Body';
import google from 'google';
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

  componentDidMount() {
    if(this.props.content.latitude && this.props.content.longitude) {
      let coords = {lat: this.props.content.latitude, lng: this.props.content.longitude};
      let map;
      map = new google.maps.Map(document.getElementById('map'), {
        center: coords,
        zoom: 18
      });
      var marker = new google.maps.Marker({
        position: coords,
        map: map,
        title: this.props.content.location
      });
    }
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

  renderMap(content) {
    let results;
    if (content.location) {
      results = <div id="map" className={styles.map}></div>;
    } else {
      results = null;
    }
    return results;
  }

  render() {
    return (
      <div>
        <div className={styles.titleBox}>
          {this.renderMap(this.props.content)}
          <h1>{this.props.content.title}</h1>
          <h3>{this.props.content.subtitle}</h3>
          <div className={styles.publishedOn}>
            {this.renderPublishedOn(this.props.content)}
            By&nbsp;
            {this.renderAuthor(this.props.content)}
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = propTypes;
Post.childContextTypes = childContextTypes;
module.exports = Post;
