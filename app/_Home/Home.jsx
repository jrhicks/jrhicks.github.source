import MainPanel from './MainPanel.jsx';
import React from 'react';
import ProfilePanel from './ProfilePanel';
import AgendaPanel from './AgendaPanel';
import styles from './Home.scss';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.panelCollection}>
        <ProfilePanel />
        <AgendaPanel />
        <MainPanel />
      </div>
    );
  }

}

module.exports = Home;
