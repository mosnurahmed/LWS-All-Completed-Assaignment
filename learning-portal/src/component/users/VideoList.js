import React from "react";
import { Link } from "react-router-dom";

function VideoList({ video }) {
  // const {title,description,views,duration,createdAt} =video || {}
  const { id, title, views, duration } = video || {};

  return (
    <div className="w-full flex flex-row gap-2 cursor-pointer hover:bg-slate-900 p-2 py-3">
      <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
        />
      </svg>

      <div className="flex flex-col w-full">
        <Link to={`/coursePlan/${id}`}>
          <p className="text-slate-50 text-sm font-medium">{title}</p>
        </Link>
        <div>
          <span className="text-gray-400 text-xs mt-1">{duration} Mins</span>
          <span className="text-gray-400 text-xs mt-1"> | </span>
          <span className="text-gray-400 text-xs mt-1">{views} views</span>
        </div>
      </div>
    </div>
  );
}

export default VideoList;
