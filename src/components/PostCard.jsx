import React from "react";
import planting from "@/assets/homePic/planting.png";

const PostCard = ({ post }) => {
  if (!post || !post.person) return null;

  return (
    <div className="bg-white rounded-xl shadow overflow-hidden flex flex-col hover:shadow-lg transition duration-300">
      {/* pic */}
      <img
        src={post.image || planting}
        alt={post.title || "Post image"}
        className="w-full h-48 object-cover"
      />

      {/* title */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <h2 className="text-md font-semibold text-gray-900 mb-2 break-words line-clamp-2">
          {post.title || "Untitled"}
        </h2>

        {/* user info */}
        <div className="flex items-center mt-auto pt-2 border-t">
          <img
            src={planting}
            alt={post.person.name || "Anonymous"}
            className="w-8 h-8 rounded-full object-cover mr-2"
          />
          <div className="text-left">
            <h3 className="text-xs font-semibold">
              {post.person.name || "Anonymous"}
            </h3>
            {post.person.title && (
              <p className="text-xs text-gray-500">{post.person.title}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
