import { globalApi } from '../api/globalApi';

export const categoryApi = globalApi.injectEndpoints({
    endpoints: (builder) => ({
        getCategory: builder.query({
        
            query: () => ({
              url: `/category`,
              method: 'GET',
            }),
            
     
     }),
}),

}) ;

export const { useGetCategoryQuery} = categoryApi;
