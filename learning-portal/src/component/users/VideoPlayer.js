import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetVideoQuery } from "../../features/auth/videos/videosApi";

function VideoPlayer() {
  // const { videoId } = useParams();
  // const { data: video, isLoading, isError, error } = useGetVideoQuery(videoId);

  // let content = null;
  // if (isLoading) {
  //   content = <div>Loading...</div>;
  // } else if (!isLoading && isError) {
  //   content = <div>........{error}.......</div>;
  // } else if (!isLoading && !isError && video?.id) {
  //   const { title, description, views, duration, createdAt, url } = video || {};
  //   const dt = new Date(createdAt);

  //   const timeFormate = `${dt.getDate()} ${new Intl.DateTimeFormat("en-US", { month: "long" }).format(
  //     dt
  //   )} ${dt.getFullYear()}`;

  //   content = (

  //   );
  // }

  return (
    <div className="col-span-full w-full space-y-8 lg:col-span-2">
      <iframe
        width="100%"
        className="aspect-video"
        src="https://www.youtube.com/embed/dD9O8DnIBj4"
        title="Debounce Function in JavaScript - JavaScript Job Interview "
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <div>
        <h1 className="text-lg font-semibold tracking-tight text-slate-100">
          "Debounce Function in JavaScript - JavaScript Job Interview{" "}
        </h1>
        <h2 className=" pb-4 text-sm leading-[1.7142857] text-slate-400">Uploaded on </h2>

        <div className="flex gap-4">
          <a
            href="login"
            className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary"
          >
            এসাইনমেন্ট
          </a>

          <Link
            to="/quiz"
            className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary"
          >
            কুইজে অংশগ্রহণ করুন
          </Link>
        </div>
        <p className="mt-4 text-sm text-slate-400 leading-6">
          In this video, I have explained about the debounce function in JavaScript. This is a common question
          interviewers ask at Job Interviews. If you watch this video carefully, you will understand what is debounce
          and how to handle it with custom debounce function.
        </p>
      </div>
    </div>
  );
}

export default VideoPlayer;
