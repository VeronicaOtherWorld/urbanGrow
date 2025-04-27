// src/pages/Community.jsx

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { v4 as uuidv4 } from "uuid";
import PostCard from "@/components/PostCard";
import writing from "@/assets/homePic/writing.png";

const Community = () => {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  const [newPostImage, setNewPostImage] = useState(null);

  // load posts in localstorage
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }
  }, [showModal]);

  // post method
  const handleSubmitPost = () => {
    if (!newPostTitle.trim() || !newPostContent.trim()) {
      alert("Title and content cannot be empty");
      return;
    }
    const authors = [
      {
        name: "Lisa",
        title: "Urban Gardener",
        desc: "Loves planting tomatoes!",
        image: "/avatars/lisa.png",
      },
      {
        name: "Alice",
        title: "Plant Enthusiast",
        desc: "Exploring green life.",
        image: "/avatars/alice.png",
      },
      {
        name: "Bob",
        title: "Nature Lover",
        desc: "Caring for indoor plants.",
        image: "/avatars/bob.png",
      },
      {
        name: "Coco",
        title: "Nature Lover",
        image: "/avatars/bob.png",
      },
    ];

    // choose an author
    const randomAuthor = authors[Math.floor(Math.random() * authors.length)];

    const newPost = {
      id: uuidv4(),
      title: newPostTitle,
      content: newPostContent,
      person: randomAuthor,
      image: newPostImage || writing,
    };

    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));

    setShowModal(false);
    setNewPostTitle("");
    setNewPostContent("");
  };

  // upload pic
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setNewPostImage(imageUrl);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen p-4 mt-24 relative">
      {/* left user */}
      <div className="hidden md:block md:w-2/12 p-2">
        <h2 className="text-lg font-bold mb-2">Profile</h2>
        <p>Username</p>
        <p>Short Bio</p>
      </div>

      {/* mid post list */}
      <div className="md:w-7/12 p-2">
        <h1 className="text-2xl font-bold mb-4">Community Posts</h1>
        {posts.length === 0 ? (
          <p>No posts yet. Click "New Post" to create one!</p>
        ) : (
          <div className="columns-2 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {posts.map((post) => (
              <Link
                to={`/community/${post.id}`}
                key={post.id}
                className="break-inside-avoid mb-4 block"
              >
                <PostCard post={post} />
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* right products */}
      <div className="hidden md:block md:w-3/12 p-2">
        <h2 className="text-lg font-bold mb-2">Products</h2>
        <p>Plant A</p>
        <p>Plant B</p>
      </div>

      {/* post button */}
      <button
        className="fixed bottom-24 right-6 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600"
        onClick={() => setShowModal(true)}
      >
        New Post
      </button>

      {/* post Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Create a Post</h2>
            <input
              type="text"
              className="w-full border p-2 mb-4"
              placeholder="Title"
              value={newPostTitle}
              onChange={(e) => setNewPostTitle(e.target.value)}
            />
            <ReactQuill
              theme="snow"
              value={newPostContent}
              onChange={setNewPostContent}
              className="mb-16 h-60"
            />
            <input
              type="file"
              accept="image/*"
              className="mb-4"
              onChange={handleImageChange}
            />
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-200 px-4 py-2 rounded"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={handleSubmitPost}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Community;
