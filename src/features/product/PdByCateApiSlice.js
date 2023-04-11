import { globalApi } from '../api/globalApi';

export const pdBycateApi = globalApi.injectEndpoints({
    endpoints: (builder) => ({
        getPdByCate: builder.mutation({
        
            query: (categoryId) => ({
              url: `product/find/${categoryId}`,
              method: 'GET',
            }),
            
     
     }),
}),

}) ;

export const { useGetPdByCateMutation} = pdBycateApi;
