import create from '@ant-design/icons/lib/components/IconFont';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders={
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': 'd43d17e85emshd3243c4bd5f510cp11733ejsn829485a00280'
}

const baseUrl= 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoApiHeaders})


export const cryptoApi= createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptos: builder.query({
            query: (count) => createRequest(`./coins?limit=${count}`)
        })
    })
});

export const{
    useGetCryptosQuery,
} = cryptoApi