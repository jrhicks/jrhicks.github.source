import React from 'react';
import { Link } from 'react-router';
import styles from './<%=ctx.componentName()%>.scss'

class <%=ctx.componentName()%> extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.panelContainer}>
        <div className={styles.panelContent}>
<%for (var i=0; i < ctx.columns().length; i++) { -%>
          <div className={styles.<%=ctx.columns()[i].name%>}>
            <h1><%=ctx.columns()[i].name%></h1>
          </div>
<%} -%>
        </div>
      </div>
    );
  }

}

module.exports = <%=ctx.componentName()%>;
