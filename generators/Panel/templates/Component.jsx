import React from 'react';
import { Link } from 'react-router';
import styles from './<%=ctx.componentName()%>.scss'

class <%=ctx.componentName()%> extends React.Component {

  render() {
    return (
      <div className={styles.panelContainer}>
        <div className={styles.panelContent}>
        </div>
      </div>
    );
  }

}

module.exports = <%=ctx.componentName()%>;
