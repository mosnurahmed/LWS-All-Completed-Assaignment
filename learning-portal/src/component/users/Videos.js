import React from "react";
import VideoList from "./VideoList";
import { useGetVideosQuery } from "../../features/auth/videos/videosApi";

function Videos() {
  const { data: videos, isLoading, isError, error } = useGetVideosQuery();

  let content = null;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (!isLoading && isError) {
    content = <div>........{error}.......</div>;
  } else if (!isLoading && !isError && videos?.length === 0) {
    content = <div>No videos found!</div>;
  } else if (!isLoading && !isError && videos?.length > 0) {
    content = videos.map((video) => <VideoList video={video} key={video.id} />);
  }

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto bg-secondary p-4 rounded-md border border-slate-50/10 divide-y divide-slate-600/30">
      {content}
    </div>
  );
}

export default Videos;
