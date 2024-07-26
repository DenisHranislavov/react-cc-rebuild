import React from "react";

const Post = ({ author, body }) => {
  return (
    <div className="flex flex-col items-start justify-center gap-3 px-10 py-8 shadow-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 max-w-[300px] min-w-fit min-h-fit rounded-xl opacity-80">
      <h1 className="font-extrabold uppercase">{author}</h1>
      <p className="text-xl italic font-extralight">{body}</p>
    </div>
  );
};

export default Post;
