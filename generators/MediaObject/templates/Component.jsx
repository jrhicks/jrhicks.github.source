import React from 'react';
import styles from './<%=ctx.componentName()%>.scss';
import loremIpsum from 'lorem-ipsum';

class <%=ctx.componentName()%> extends React.Component {

  render() {
    const randomUrl = `http://lorempixel.com/100/100/people?x=${Math.random()}`;

    return (
      <div className={styles.media}>
          <a href="#" className={styles.img}>
            <img src={randomUrl} alt="" />
          </a>
          <div className={styles.bd}>
            <div className={styles.heading}>
              {loremIpsum({ count: 1, units: 'sentences' })}
            </div>
            <div className={styles.description}>
              {loremIpsum({ count: 4, units: 'sentences' })}
            </div>
          </div>
      </div>

    );
  }
}

module.exports = <%=ctx.componentName()%>;
