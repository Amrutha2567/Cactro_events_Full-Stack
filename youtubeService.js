const axios = require("axios");

const API_KEY = process.env.YOUTUBE_API_KEY;

exports.getVideo = async (videoId) => {
  const res = await axios.get(`https://www.googleapis.com/youtube/v3/videos`, {
    params: { part: "snippet", id: videoId, key: API_KEY },
  });
  return res.data.items[0];
};

exports.updateVideo = async (videoId, title, description) => {
  // In real app, requires OAuth2 token
  return { videoId, title, description, status: "updated" };
};

exports.addComment = async (videoId, text) => {
  return { videoId, text, status: "comment added" };
};

exports.replyComment = async (commentId, text) => {
  return { commentId, text, status: "reply added" };
};

exports.deleteComment = async (commentId) => {
  return { commentId, status: "comment deleted" };
};
