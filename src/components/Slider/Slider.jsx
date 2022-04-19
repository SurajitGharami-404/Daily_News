import React, { useContext,memo } from 'react';
import styles from "./Slider.module.css";
import { Typography,Card } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import  {useNavigate}  from 'react-router-dom';
import moment from 'moment';
import { useGetCategoryQuery } from '../../services/newsApi';
import { CountryContext } from '../../contexts/countryContext';
import { CategoryContext } from '../../contexts/categoryContext';
import {LoaderOutlined} from "../../components"




const Slider = ({title,path,query}) => {
    const navigate = useNavigate();
    const [country] = useContext(CountryContext);
    const categoryContextArray = useContext(CategoryContext);
    const setCategory = categoryContextArray[1];
    const {data,isFetching,isError} = useGetCategoryQuery({category:query,country:country.value,count:10});
    const {Text,Title} = Typography;
    const demo = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

    if(isError) return(<Title level={1}>Sorry Some Error try out later</Title>)

    const handleClick = ()=>{
        const queryName=query[0].toUpperCase()+query.substring(1);
        setCategory({name:queryName,value:query});
        navigate("/category");
        return;
    }

  return (
    <div className={styles.slider}>
      
        <div className={styles.sliderText}>
            <Text>{title}</Text>
            <Text onClick={handleClick} style={{color:"#4D77FF",cursor:"pointer"}}>See all <RightOutlined/></Text>
        </div>
        {isFetching?<LoaderOutlined/>:(
        <div className={styles.sliderContent}>
            {data?.articles?.map((article,idx)=>(
                <Card
                className={styles.newsCard}
                hoverable
                key={idx}
              >
                <a href={article?.url} target="_blank" rel='noreferrer'>
                  <img src={article?.urlToImage ?? demo} alt={article?.title} className={styles.newsCardImage} loading="lazy"/>
                  <div className={styles.newsCardText}>
                    <Title level={4} className={styles.newsCardTitle}>
                      {
                        article?.title?.length > 80 ? (`${article?.title?.substring(0, 80)}...`) : article?.title
                      }
                    </Title>
                    <Text className={styles.description}>
                      {
                        article?.description?.length > 100 ? (`${article?.description?.substring(0, 100)}...`) : article?.description
                      }
                    </Text>
                    <div className={styles.cardExtras}>
                      <Text>{article?.source?.name}</Text>
                      <Text>{moment(article?.publishedAt).startOf('ss').fromNow()}</Text>
                    </div>
                  </div>
                </a>
              </Card>
            ))}
        </div>
        )}
    </div>
  )
}

export default memo(Slider);