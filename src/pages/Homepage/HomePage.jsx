import React,{useContext,memo} from 'react';
import { CountryContext } from '../../contexts/countryContext';
import { Select,Typography } from 'antd';
import styles from './HomePage.module.css';
import { useGetAllNewsQuery } from '../../services/newsApi';
import {Banner,Slider} from '../../components';
import { countries } from '../../options/countryOption';
import { Loader } from '../../components';

const HomePage = () => {
  const [country,setCountry] = useContext(CountryContext);

  const {data,isFetching,isError} = useGetAllNewsQuery({country:country.value,count:20});
  const articles = data?.articles;
  const {Option} = Select;
  const {Title} = Typography;
  
  if(isFetching) return (<Loader size='large' tip='Loading....'/>)
  if(isError) return (<Title>Sorry Some Error Please Try Out Later</Title>)
  

  return (
    <>
      <Banner articles={articles}/>
      <div className={styles.selectContainer}>
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
      </div>
      <Slider title="Entertainment" path="/category" query="entertainment"/>
      <Slider title="Health" path="/category" query="health"/>
      <Slider title="Business" path="/category" query="business"/>
      <Slider title="Science" path="/category" query="science"/>
      <Slider title="Technology" path="/category" query="technology"/>
    </>
  )
}

export default memo(HomePage);