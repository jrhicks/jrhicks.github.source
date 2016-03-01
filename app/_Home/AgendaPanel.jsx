import React from 'react';
import { Link } from 'react-router';
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

  renderAction(t) {
    const results = [];
    if (t.register) {
      results.push(<a className={styles.button} href={t.register}>Meetup</a>);
    }
    if (t.video) {
      results.push(<a className={styles.button} href={t.video}>Hangout</a>)
    }
    return results
  }

  render() {
    return (
      <div className={styles.panelContainer}>
        <div className={styles.panelContent}>
          <div className={styles.heading}>
            Hangouts and Meetups
          </div>
          <table className={styles.responsiveTable}>
            <thead>
              <tr>
                <th>
                  Topic
                </th>
                <th>
                  Where
                </th>
                <th>
                  When
                </th>
                <th>

                </th>
              </tr>
            </thead>
            <tbody>
              {this.sortedContent().map((t) => {
                return <tr>
                  <td value="title" className={styles.titleCell}>
                    { t.title }
                  </td>
                  <td value="locaton">
                    { t.location }
                  </td>
                  <td value="date" className={styles.dateCell}>
                    { t.date }
                  </td>
                  <td value="" className={styles.buttonCell}>
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
