import { useState, useEffect } from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import { data } from "./data/data.jsx"
import Split from "react-split"
import {nanoid} from "nanoid"

export default function App() {

    /**
     * Challenge:
     * 1. Every time the `notes` array changes, save it 
     *    in localStorage. You'll need to use JSON.stringify()
     *    to turn the array into a string to save in localStorage.
     * 2. When the app first loads, initialize the notes state
     *    with the notes saved in localStorage. You'll need to
     *    use JSON.parse() to turn the stringified array back
     *    into a real JS array.
     */

    // 2.
    // Sets an empty array if the first condition is false so that it wont
    // return an undefined on every render or break the code.
    const [notes, setNotes] = useState(() => localStorage.getItem("notes") || [])
    const [currentNoteId, setCurrentNoteId] = useState(
        (notes[0]?.id) || ""
    )

    const currentNote = notes.find(note => note.id === currentNoteId) || notes[0]
    
    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        }
        setNotes(prevNotes => [newNote, ...prevNotes])
        setCurrentNoteId(newNote.id)
    }

    // ? FOR DEMONSTRATION OF LAZY STATE INITIALIZATION
    // ? ----------------------------------------------
    // ? This can be useful when the initial value depends on some dynamic factors, 
    // ? like user preferences, data fetching, or other calculations. 
    // ? By providing a function, you ensure that the initialization logic is only executed once 
    // ? when the component is first rendered.

    // const [state, setState] = React.useState(
    //     () => console.log("State initialization")
    // )
    
    // 1.
    // Storage: {notes: "[]"}
    // Storage {notes: "[{"id":"CxFNwEtYKi57DRBbBKxRg..."}
    // will not remove created notes on refresh
    useEffect(() => localStorage("notes", JSON.stringify(notes)), [notes])

    // ! FOR DEBUGGING PURPOSES
    console.log(localStorage);

    /**
     * Challenge: When the user edits a note, reposition
     * it in the list of notes to the top of the list
     */
    function updateNote(text) {
        setNotes(oldNotes => {
            const updatedNotes = oldNotes.map(oldNote => {
                return oldNote.id === currentNoteId
                    ? { ...oldNote, body: text }
                    : oldNote
            });
            return [updatedNotes.find(note=>note.id===currentNoteId), 
                    ...updatedNotes.filter(note=> note.id !== currentNoteId)]
        });
    }

    /**
     * Challenge: complete and implement the deleteNote function
     * 
     * Hints: 
     * 1. What array method can be used to return a new
     *    array that has filtered out an item based 
     *    on a condition?
     * 2. Notice the parameters being based to the function
     *    and think about how both of those parameters
     *    can be passed in during the onClick event handler
     */

    function deleteNote(event, noteId) {
        event.stopPropagation();
        // my mistake is, i forgot im changing the state! beginner mistake lol. 
        setNotes(notes.filter(note => note.id !== noteId))
    }
    
    return (
        <main>
        {
            notes.length > 0 
            ?
            <Split 
                sizes={[30, 70]} 
                direction="horizontal" 
                className="split"
            >
                <Sidebar
                    notes={notes}
                    currentNote={currentNote}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                    deleteNote={deleteNote}
                />
                {
                    currentNoteId && 
                    notes.length > 0 &&
                    <Editor 
                        currentNote={currentNote} 
                        updateNote={updateNote} 
                    />
                }
            </Split>
            :
            <div className="no-notes">
                <h1>You have no notes</h1>
                <button 
                    className="first-note" 
                    onClick={createNewNote}
                >
                    Create one now
                </button>
            </div>
            
        }
        </main>
    )
}
