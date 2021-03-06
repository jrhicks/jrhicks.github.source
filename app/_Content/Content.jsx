import React from 'react';
import wikismith from '../wikismith';
import styles from './Content.scss';

class Content extends React.Component {

  render() {
    const slug = this.props.params.slug;
    return (
      <div className={styles.panelContainer}>
        <div className={styles.panelContent}>
          <div className={styles.homeNav}>
            &larr; <a href="#/">Home</a>
          </div>

          {wikismith.renderBySlug(slug)}
        </div>
      </div>
    );
  }

}

module.exports = Content;
