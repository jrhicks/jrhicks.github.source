import React from 'react';
import wikismith from '../wikismith';
import styles from './MainPanel.scss';

class MainPanel extends React.Component {

  constructor(props) {
    super(props);
    this.renderYearOfTalks = this.renderYearOfTalks.bind(this);
    this.renderTalk = this.renderTalk.bind(this);

    this.talksByYear = [
      {
        year: '2015',
        talks: [
          {
            title: 'Styling React Components',
            link: false
          },
          {
            title: 'Confidently Setting Up A React Project',
            link: false
          },
          {
            title: 'Intro to Flux',
            link: false
          },
          {
            title: 'Intro to ReactJS',
            link: false
          }
        ]
      },
      {
        year: '2014',
        talks: [
          {
            title: 'Javascript Build Ecosystem',
            link: false
          }
        ]
      },
      {
        year: '2012',
        talks: [
          {
            title: 'Using OmniAuth In Rails To Create More Value',
            link: false
          }
        ]
      }
    ];
  }

  renderTalk(talk) {
    return (
      <div>
        {talk.title}
      </div>
    );
  }

  sortedPosts() {
    // console.log(wikismith);
    return wikismith
      .scourContent()
      .filter({type: 'post', cover: true})
      .sortBy((p) => Date.parse(p.get('created'))).value.reverse();
  }

  renderYearOfTalks(year) {
    return (
      <div>
        <h3>{year.year}</h3>
        <div className={styles.collectionOfEntries}>
          { year.talks.map(this.renderTalk) }
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className={styles.panelContainer}>
        <div className={styles.panelContent}>
          <div className={styles.blogColumn}>
            <h1>Blog Posts</h1>
            <div className={styles.collectionOfYears}>
              <h3>2015</h3>
              <div className={styles.collectionOfEntries}>
                {this.sortedPosts().map(wikismith.linkTo)}
              </div>
            </div>
          </div>
          <div className={styles.talksColumn}>
            <h1>Past Talks</h1>
            <div className={styles.collectionOfYears}>
              {this.talksByYear.map( this.renderYearOfTalks )}
            </div>
          </div>
        </div>
      </div>
    );
  }

}

module.exports = MainPanel;
