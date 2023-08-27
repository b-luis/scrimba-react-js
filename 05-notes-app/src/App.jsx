import { useState, useEffect } from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import Split from "react-split"
import { notesCollection, db } from "./services/firebaseConfig"
import { 
    onSnapshot, 
    addDoc, 
    doc, 
    deleteDoc, 
    setDoc,
    Timestamp
} from "firebase/firestore"

export default function App() {

    const [notes, setNotes] = useState(() => []);
    const [currentNoteId, setCurrentNoteId] = useState("");

    const currentNote = notes.find(note => note.id === currentNoteId) || notes[0]

    /**
     * Challenge:
     * 1. ✅ Add createdAt and updatedAt properties to the notes
     *    When a note is first created, set the `createdAt` and `updatedAt`
     *    properties to `Date.now()`. Whenever a note is modified, set the
     *    `updatedAt` property to `Date.now()`.
     * 
     * 2. Create a new `sortedNotes` array (doesn't need to be saved 
     *    in state) that orders the items in the array from 
     *    most-recently-updated to least-recently-updated.
     *    This may require a quick Google search.
     */

    const sortedNotes = notes.sort((a, b) => b.updatedAt - a.updatedAt);
    
    // ! Web hooks are functions that run when a component mounts or unmounts
    useEffect(() => {
        const unsubscribe = onSnapshot(notesCollection, (snapshot) => {
            // ! Sync up our local notes array with the snapshot data
            const notesArr = snapshot.docs.map(doc => (
                {...doc.data(),
                id: doc.id}
            ))
            setNotes(notesArr)
        })
        return unsubscribe
    }, [])

    useEffect(() => {
        if (!currentNoteId) {
            setCurrentNoteId(notes[0]?.id)
        }
    }, [notes])

    async function createNewNote() {
        // ! NOTE: we don't need to add id to the newNote object, because firebase will generate it for us
        const newNote = {
            body: "# Type your markdown note's title here",
            createdAt: Timestamp.fromDate(new Date()),
            updatedAt: Timestamp.fromDate(new Date())
        }
        // ! addDoc returns a promise, so we need to await it
        const newNoteRef = await addDoc(notesCollection, newNote)
        setCurrentNoteId(newNoteRef.id)
    }
    
    async function updateNote(text) {
        const docRef = doc(db, "notes", currentNoteId)
        // ! setDoc will overwrite the entire document, so we need to use merge: true to only update the body and updatedAt fields
        await setDoc(docRef, 
            { body: text, updatedAt: Timestamp.fromDate(new Date()) }, 
            { merge: true }
        );
    }

    async function deleteNote(noteId) { 
        // ! deleteDoc accepts a document reference and deletes it
        // ? docRef is a reference to the document we want to delete. Tt accepts the collection name and the document id
        const docRef = doc(db, "notes", noteId);
        await deleteDoc(docRef);
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
                    notes={sortedNotes}
                    currentNote={currentNote}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                    deleteNote={deleteNote}
                />
                <Editor 
                    currentNote={currentNote} 
                    updateNote={updateNote} 
                />
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
