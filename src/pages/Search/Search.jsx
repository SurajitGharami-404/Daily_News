import React,{useState,memo} from 'react';
import { Typography } from 'antd';
import { Content } from '../../components';
import { useGetSearchQuery } from '../../services/newsApi';
import { Loader } from '../../components';

const Search = () => {
  const [query,setQuery] = useState('cryptocurrency');
  const {data,isFetching,isError} = useGetSearchQuery(query);
  const {Title} = Typography;
  if(isFetching) return(<Loader size="large" tip="Loading..."/>)
  if(isError) return (<Title>Sorry Some Error Please Try Out Later</Title>)
   
  const articles = data?.articles;

  return (
    <>
      <Content pageTitle="Search News" articles={articles} setQuery={setQuery} showAll showSearchBar/>
    </>
  )
}

export default memo(Search);