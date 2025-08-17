import { useEffect, useState } from "react";
import api from "../services/api";

export default function VideoDetails({ videoId }) {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    api.get(`/videos/${videoId}`).then((res) => setVideo(res.data));
  }, [videoId]);

  if (!video) return <p>Loading...</p>;

  return (
    <div>
      <h2>{video.snippet.title}</h2>
      <p>{video.snippet.description}</p>
    </div>
  );
}
