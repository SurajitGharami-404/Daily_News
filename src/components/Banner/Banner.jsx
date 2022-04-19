import React,{memo} from 'react';
import { Typography,Carousel } from 'antd';
import styles from './Banner.module.css';

const Banner = ({articles}) => {

    const {Title,Text} = Typography;
  return (
    <>
        <Carousel autoplay>
            {articles?.map((article,idx)=>(
                <div className={styles.banner} key={idx}>
                <img className={styles.bannerImage} src={article?.urlToImage} alt={article?.title}/>
                <div className={styles.overlay}/>
                <div className={styles.bannerTextContainer}>
                    <Title level={3} className={styles.bannerTitle}><a href={article?.url} target="_blank" rel='noreferrer'>{article?.title}</a></Title>
                    <Text className={styles.bannerSourceName}>{article?.source?.name}</Text>
                </div>
            </div>
            ))}
        </Carousel>
        
    </>
  )
}

export default memo(Banner);