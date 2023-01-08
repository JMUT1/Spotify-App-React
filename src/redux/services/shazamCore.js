
// COMPONENT DONDE SE ESTA CREANDO EL CONSUMO DEL API CON LOS ENDPOINTS...

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set
      ("X-RapidAPI-Key", "0dffac33f3msh50d5340da92ceb3p185c5ajsn4f99c3c51f30")
        
        return headers
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({query: ()=> 'v1/charts/world'}),
  })
});

export const {useGetTopChartsQuery,} = shazamCoreApi;