
import "./App.css";
import { NewNoteInput } from "./NewNoteInput";
import { useSelector } from "react-redux";
import { NotesState } from "./notesReducer";
import { useDispatch } from "react-redux";
import { addNote } from "./actions";

function App() {
  const dispatch = useDispatch()
  const onAddNote = (note:string) => {
    dispatch(addNote(note))
  }
  const notes = useSelector<NotesState, NotesState["notes"]>((state) => state.notes);
  return (
    <div className='main'>
      
      <NewNoteInput addNote={onAddNote} />
      <hr />
      <ul>
        {notes.map((note)=> (
          <li key={note}>{note}</li>
        ))}
       
      </ul>
    </div>
  );
}

export default App;
