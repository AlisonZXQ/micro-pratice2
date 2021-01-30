import React from 'react';
import styles from './index.less';

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>我是app1</h1>

      <div>
        {props.children}
      </div>
    </div>
  );
};

export default BasicLayout;
