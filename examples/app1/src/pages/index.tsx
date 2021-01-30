import React from 'react';
import { Link } from 'umi';
import styles from './index.less';

export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <Link to={'/hello'}>跳转到hello</Link>
    </div>
  );
}
