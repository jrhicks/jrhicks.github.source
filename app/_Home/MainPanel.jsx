import React from 'react';
import wikismith from '../wikismith';
import styles from './MainPanel.scss';

class MainPanel extends React.Component {

  constructor(props) {
    super(props);
  }

  getPostsByYear() {
    const posts = wikismith
              .scourContent()
              .filter({ type: 'post', cover: true })
              .sortBy((p) => Date.parse(p.get('created'))).value.reverse();
    return this.groupByYear(posts);
  }

  getTalksByYear() {
    const talks = wikismith
              .scourContent()
              .filter({ type: 'post', category: 'past talks' })
              .sortBy((p) => Date.parse(p.get('created'))).value.reverse();
    return this.groupByYear(talks);
  }

  groupByYear(items) {
    const results = new Map();
    let y;
    for (const p of items) {
      y = new Date(p.created).getYear() + 1900;
      if (results.get(y) === undefined) {
        results.set(y, [p]);
      } else {
        const yItems = results.get(y);
        yItems.push(p);
        results.set(y, yItems);
      }
    }
    // Convert to an Array
    return [... results];
  }

  render() {
    return (
      <div className={styles.panelContainer}>
        <div className={styles.panelContent}>
          <div className={styles.blogColumn}>
            <h1>Blog Posts</h1>
            <div className={styles.collectionOfYears}>
              {this.getPostsByYear().map(([year, posts]) => {
                return (
                  <div>
                    <h3>{year}</h3>
                    <div className={styles.collectionOfEntries}>
                      {posts.map((post) => wikismith.linkTo(post))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.talksColumn}>
            <h1>Past Talks</h1>
            <div className={styles.collectionOfYears}>
              {this.getTalksByYear().map(([year, posts]) => {
                return (
                  <div>
                    <h3>{year}</h3>
                    <div className={styles.collectionOfEntries}>
                      {posts.map((post) => wikismith.linkTo(post))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

}

module.exports = MainPanel;
