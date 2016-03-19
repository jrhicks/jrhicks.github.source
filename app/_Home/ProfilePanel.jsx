import React from 'react';
import styles from './ProfilePanel.scss';

class MainPanel extends React.Component {

  render() {
    return (
      <div className={styles.panelContainer}>
        <div className={styles.panelContent}>
          <div className={styles.media}>
              <div className={styles.bd}>
                <div className={styles.heading}>
                  Jeffrey Hicks
                </div>
                <div className={styles.description}>
                  Developer, designer, & presenter
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = MainPanel;
