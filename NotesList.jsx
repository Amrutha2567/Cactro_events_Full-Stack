import { useEffect, useState } from "react";
import api from "../services/api";

export default function NotesList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    api.get("/notes").then((res) => setNotes(res.data));
  }, []);

  return (
    <ul>
      {notes.map((n) => (
        <li key={n.id}>{n.content} ({n.tags})</li>
      ))}
    </ul>
  );
}
