import React,{useContext,memo} from 'react';
import { Typography } from 'antd';
import { CategoryContext } from '../../contexts/categoryContext';
import { CountryContext } from '../../contexts/countryContext';
import { Content } from '../../components';
import { useGetCategoryQuery } from '../../services/newsApi';
import { Loader } from '../../components';

const Category = () => {

  const [category] = useContext(CategoryContext);
  const [country] = useContext(CountryContext);
  const {data,isFetching,isError} = useGetCategoryQuery({country:country.value,category:category.value,count:50});
  const {Title} = Typography;

  if (isFetching) return(<Loader size="large" tip="Loading..."/>);
  if(isError) return (<Title>Sorry Some Error Please Try Out Later</Title>)

  const articles = data?.articles;
  return (
    <>
      <Content pageTitle='Categories' articles={articles} showAll showCountry showCategory/>
    </>
  )
}

export default memo(Category);