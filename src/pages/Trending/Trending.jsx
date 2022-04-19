import React,{useContext,memo} from 'react';
import { Typography } from 'antd';
import { Content } from '../../components';
import { CountryContext } from '../../contexts/countryContext';
import { useGetAllNewsQuery } from '../../services/newsApi';
import { Loader } from '../../components';

const Trending = () => {
  const [country] = useContext(CountryContext);
  const { data, isFetching,isError } = useGetAllNewsQuery({country:country.value,count:50});
  const {Title} = Typography;
  
  if(isFetching) return(<Loader size="large" tip="Loading..."/>)
  if(isError) return (<Title>Sorry Some Error Please Try Out Later</Title>)

  const articles = data?.articles;

  return (
    <>
      <Content pageTitle='Trending News' articles={articles} showAll showCountry/>
    </>
  )
}

export default memo(Trending);