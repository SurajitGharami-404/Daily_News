import React from 'react';
import styles from './Loader.module.css';
import { Spin } from 'antd';

const Loader = ({size,tip}) => {
  return (
    <div className={styles.loader}>
        <Spin size={size} tip={tip}/>
    </div>
  )
}

export default Loader;