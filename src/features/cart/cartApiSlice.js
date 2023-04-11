import { globalApi } from '../api/globalApi';

export const cartApi = globalApi.injectEndpoints({
    endpoints: (builder) => ({
        getCart: builder.query({
        
            query: () => ({
              url: `/cart`,
              method: 'GET',
            }),
     
     }),
}),

}) ;

export const { useGetCartQuery} = cartApi;
