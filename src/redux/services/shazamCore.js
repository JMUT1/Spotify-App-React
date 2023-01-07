import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: ()=>{
        headers.set("X-RapidAPI-Key", "0dffac33f3msh50d5340da92ceb3p185c5ajsn4f99c3c51f30")
    }
  })
});
