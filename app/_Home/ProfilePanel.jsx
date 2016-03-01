import React from 'react';
import styles from './ProfilePanel.scss';

class MainPanel extends React.Component {

  render() {
    return (
      <div className={styles.panelContainer}>
        <div className={styles.panelContent}>
          <div className={styles.media}>
              <a href="#" className={styles.img}>
                <img src="/assets/images/profile_photo3.png" alt="" />
              </a>
              <div className={styles.bd}>
                <div className={styles.heading}>
                  Jeffrey Hicks
                </div>
                <div className={styles.description}>
                  Developer, designer, & mentor of web technologies and databases
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }

}

module.exports = MainPanel;
