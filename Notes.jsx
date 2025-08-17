import NotesList from "../components/NotesList";
import NoteForm from "../components/NoteForm";

export default function Notes() {
  return (
    <div>
      <h1>Notes</h1>
      <NoteForm />
      <NotesList />
    </div>
  );
}
