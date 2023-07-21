import { apiSlice } from "../../api/apiSlice";



export const videosApi =apiSlice.injectEndpoints({
  endpoints:(builder) =>({
    getVideos:builder.query({
      query:() =>"/videos"
    }),
    getVideo:builder.query({
      query:(videoId) => `/videos/${videoId}`
    })
    
  })
})

export const {useGetVideoQuery,useGetVideosQuery} =videosApi