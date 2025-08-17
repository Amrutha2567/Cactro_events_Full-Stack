import VideoDetails from "../components/VideoDetails";
import Comments from "../components/Comments";

export default function Dashboard() {
  return (
    <div>
      <h1>YouTube Companion Dashboard</h1>
      <VideoDetails videoId="your_video_id" />
      <Comments videoId="your_video_id" />
    </div>
  );
}
