import React from 'react';
import { Link } from 'react-router';
import { Spring } from 'react-motion';
import wikismith from '../wikismith';
import styles from './AgendaPanel.scss'

class AgendaPanel extends React.Component {

  constructor(props) {
    super(props);
  }

  sortedContent() {
    // console.log(wikismith);
    return wikismith
      .scourContent()
      .filter({ type: 'post', category: 'upcoming talk' })
      .sortBy((p) => Date.parse(p.get('date'))).value;
  }

  renderTitle(t) {
    let results;
    if (t.ready) {
      results = wikismith.linkTo(t);
    } else {
      results = t.title;
    }
    return results;
  }

  renderAction(t) {
    const results = [];
    if (t.register) {
      results.push(
        <a className={styles.button} href={t.register}>Register</a>
      );
    }
    if (t.video) {
      results.push(
          <a className={styles.button} href={t.video}>Hangout</a>
      );
    }
    return results
  }

  render() {
    return (
      <div className={styles.panelContainer}>
        <div className={styles.panelContent}>
          <div className={styles.heading}>
            Upcoming Talks
          </div>
          <table className={styles.responsiveTable}>
            <thead>
              <tr>
                <th key="topic">
                  Topic
                </th>
                <th key="where">
                  Where
                </th>
                <th key="when">
                  When
                </th>
                <th key="acion">

                </th>
              </tr>
            </thead>
            <tbody>
              {this.sortedContent().map((t) => {
                return <tr key={t.slug}>
                  <td key="topic" value="topic" className={styles.titleCell}>
                    { this.renderTitle(t)}
                  </td>
                  <td k="where" value="where">
                    { t.location }
                  </td>
                  <td key="when" value="when" className={styles.dateCell}>
                    { t.date }
                  </td>
                  <td key="action" value="" className={styles.buttonCell}>
                    { this.renderAction(t)}
                  </td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

}

module.exports = AgendaPanel;
