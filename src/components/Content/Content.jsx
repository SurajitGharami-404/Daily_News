import React,{useContext,memo} from 'react';
import styles from './Content.module.css';
import { CountryContext } from '../../contexts/countryContext';
import { CategoryContext } from '../../contexts/categoryContext';
import { Select, Row, Col, Card, Typography,Input,AutoComplete } from "antd";
import moment from 'moment';
import { countries } from '../../options/countryOption';
import { categories } from '../../options/categoryOptions';



const Content = ({ pageTitle, articles,setQuery, showCountry,showCategory,showSearchBar }) => {

  const [country,setCountry] = useContext(CountryContext);
  const [category,setCategory] = useContext(CategoryContext);
  const { Title, Text } = Typography;
  const { Option } = Select;
  const demo = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';


  const handleSearch = (value)=>{
    setQuery(value)
  }


  return (
    <>
      <Title level={2} className={styles.trendingTitle}>{pageTitle}</Title>
      <Row gutter={[24, 24]} className={styles.newsCardContainer}>
        
          <Col span={24} className={styles.topBar}>
            {showCountry&&(
              <Select
              showSearch
              placeholder='Select Country'
              value={country?.name}
              optionFilterProp='children'
              onChange={(value, label) => setCountry({ name: label.children, value: value })}
              className={styles.select}
            >
              {countries.map(country => (
                <Option value={country.value} key={country.name}>{country.name}</Option>
              ))}
            </Select>
            )}

            {showCategory&&(
              <Select
                showSearch
                placeholder='Select Category'
                value={category?.name}
                optionFilterProp='children'
                onChange={(value, label) => setCategory({ name: label.children, value: value })}
                className={styles.select}
              >
                {categories?.map(category => (
                  <Option value={category.value} key={category.name}>{category.name}</Option>
                ))}
              </Select>
            )}

            {
              showSearchBar&&(
                <AutoComplete>
                  <Input.Search placeholder='Search News' size='large' enterButton onSearch={handleSearch}/>
                </AutoComplete>
              )
            }
          </Col>


        {articles.map((article, idx) => (
          <Col xs={24} sm={12} lg={8} key={idx}>
            <Card
              className={styles.newsCard}
              hoverable
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
          </Col>
        ))}
      </Row>

    </>
  )
}

export default memo(Content);