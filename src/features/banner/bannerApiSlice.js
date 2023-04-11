import { globalApi } from '../api/globalApi';

export const bannerApi = globalApi.injectEndpoints({
    endpoints: (builder) => ({
        getBanner: builder.query({
        
            query: () => ({
              url: `/banner`,
              method: 'GET',
            }),
     
     }),
}),

}) ;

export const { useGetBannerQuery} = bannerApi;
