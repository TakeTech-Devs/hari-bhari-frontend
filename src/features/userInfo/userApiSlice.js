import { globalApi } from '../api/globalApi';

// Define a service using a base URL and expected endpoints
export const userApi = globalApi.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query({
        
            query: () => ({
              url: `/auth/viewprofile`,
              method: 'GET',
            }),
        //     async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        //       const projects = await queryFulfilled;
             
        //       if (projects?.data?.length > 0) {
                  
             
        //          dispatch(setcheckedCategory([...projects?.data.map(p=>p.id)]))
        
                 
        //       }
        //   },
     }),
}),

}) ;

export const { useGetUserQuery} = userApi;
