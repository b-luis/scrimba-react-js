import { useState, useEffect } from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import Split from "react-split"
import { nanoid } from "nanoid"
import { onSnapshot } from "firebase/firestore"
import { notesCollection } from "./services/firebaseConfig"

export default function App() {

    const [notes, setNotes] = useState(() => [])
    const [currentNoteId, setCurrentNoteId] = useState((notes[0]?.id) || ""
    )

    const currentNote = notes.find(note => note.id === currentNoteId) || notes[0]
    
    // useEffect(() => {
    //     localStorage.setItem("notes", JSON.stringify(notes))
    // }, [notes])

    // web hook, so it's important to unsubscribe to avoid memory leaks
    useEffect(() => {
        // ? onSnapshot
        // ? imagine you have a camera, and take a photo on a given time
        // ? whenever something changes, we get up-to-date data
        const unsubscribe = onSnapshot(notesCollection, (snapshot) => {
            // Sync up our local notes array with the snapshot data
            const notesArr = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }))
            setNotes(notesArr)
        })
        // cleanup sideeffects
        return unsubscribe
    }, [])

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
    
    function updateNote(text) {
        setNotes(oldNotes => {
            const updatedNotes = oldNotes.map(oldNote => {
                return oldNote.id === currentNoteId
                    ? { ...oldNote, body: text }
                    : oldNote
            });
            // reposition when somebody updates the text
            return [updatedNotes.find(note=>note.id===currentNoteId), 
                    ...updatedNotes.filter(note=> note.id !== currentNoteId)]
        });
    }

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
