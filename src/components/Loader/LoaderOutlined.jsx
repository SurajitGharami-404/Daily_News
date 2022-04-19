import React from 'react';
import styles from "./Loader.module.css";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';





const LoaderOutlined = () => {
    const antIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;
  return (
    <div className={styles.loaderOutlined}>
        <Spin indicator={antIcon} tip="Loading"/>
    </div>
  )
}

export default LoaderOutlined