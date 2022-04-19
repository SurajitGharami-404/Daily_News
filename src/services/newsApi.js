

import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const newsApiHeader ={
    "X-Api-Key": process.env.REACT_APP_NEWS_API_KEY
}

const createRequest = (url)=>({url,headers:newsApiHeader});

export const newsApi = createApi({
    reducerPath:"newsApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://newsapi.org/v2"}),
    endpoints:(builder)=>({
        getAllNews:builder.query({
            query: ({country,count})=>createRequest(`top-headlines?country=${country}&pageSize=${count}`)
        }),
        getCategory:builder.query({
            query:({country,category,count})=>createRequest(`top-headlines?country=${country}&category=${category}&pageSize=${count}`)
        }),
        getSearch:builder.query({
            query:(query)=>createRequest(`everything?q=${query}&pageSize=50`)
        })
    })
})

export const {
    useGetAllNewsQuery,
    useGetCategoryQuery,
    useGetSearchQuery
} = newsApi