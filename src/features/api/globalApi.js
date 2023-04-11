import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const globalApi = createApi({
    reducerPath: 'globalApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://apidevelopment.hari-bhari.com', prepareHeaders: async (headers, { getState, endpoint }) => {

            const token = JSON.parse(localStorage.getItem("token"));

            if (token) {
                headers.set("Authorization", `Bearer ${token}`)
            }

            return headers

        }
    }),
    endpoints: (builder) => ({}),

})
