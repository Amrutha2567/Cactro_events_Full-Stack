import { useState } from "react";
import api from "../services/api";

export default function Comments({ videoId }) {
  const [text, setText] = useState("");

  const addComment = () => {
    api.post(`/comments/${videoId}`, { text }).then(() => {
      alert("Comment added");
      setText("");
    });
  };

  return (
    <div>
      <h3>Comments</h3>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addComment}>Add</button>
    </div>
  );
}
