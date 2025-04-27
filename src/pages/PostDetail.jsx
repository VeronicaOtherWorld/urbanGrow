// src/pages/PostDetail.jsx

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import planting from "@/assets/homePic/planting.png";

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const foundPost = storedPosts.find((p) => p.id === postId);
    setPost(foundPost);
  }, [postId]);

  if (!post) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-24 p-4">
      {/* return button */}
      <Link
        to="/community"
        className="text-green-600 text-sm mb-6 inline-block"
      >
        ← Back to Community
      </Link>

      {/* cover pic */}
      <img
        src={post.image}
        alt={post.title || "Post Image"}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      {/* info */}
      <div className="flex items-center mb-6">
        <img
          src={planting}
          alt={post.person?.name || "Anonymous"}
          className="w-10 h-10 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="text-base font-semibold">
            {post.person?.name || "Anonymous"}
          </h3>
          {post.person?.title && (
            <p className="text-sm text-gray-500">{post.person.title}</p>
          )}
        </div>
      </div>

      {/* title */}
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>

      {/*  content */}
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
};

export default PostDetail;
