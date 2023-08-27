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
    const [tempNoteText, setTempNoteText] = useState("");

     /**
     * Challenge:
     * 1. Set up a new state variable called `tempNoteText`. Initialize 
     *    it as an empty string
     * 2. Change the Editor so that it uses `tempNoteText` and 
     *    `setTempNoteText` for displaying and changing the text instead
     *    of dealing directly with the `currentNote` data.
     * 3. Create a useEffect that, if there's a `currentNote`, sets
     *    the `tempNoteText` to `currentNote.body`. (This copies the
     *    current note's text into the `tempNoteText` field so whenever 
     *    the user changes the currentNote, the editor can display the 
     *    correct text.
     * 4. TBA
     */

    const currentNote = 
        notes.find(note => note.id === currentNoteId) 
        || notes[0]

    const sortedNotes = notes.sort((a, b) => b.updatedAt - a.updatedAt);
    
    // ! Web hooks are functions that run when a component mounts or unmounts
    useEffect(() => {
        const unsubscribe = onSnapshot(notesCollection, (snapshot) => {
            // ! Sync up our local notes array with the snapshot data
            const notesArr = snapshot.docs.map(doc => (
                {...doc.data(), id: doc.id}
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

    //  * Create a useEffect that, if there's a `currentNote`, sets
    //  *    the `tempNoteText` to `currentNote.body`. (This copies the
    //  *    current note's text into the `tempNoteText` field so whenever 
    //  *    the user changes the currentNote, the editor can display the 
    //  *    correct text.

    useEffect(() => {
        if (currentNote) {
            setTempNoteText(currentNote.body)
        }
    }, [currentNote])

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
        console.log("New note added with ID:", newNoteRef.id);
    }

    /**
     * Create an effect that runs any time the tempNoteText changes
     * Delay the sending of the request to Firebase
     *  uses setTimeout
     * use clearTimeout to cancel the timeout
     */

    // ! DEBOUNCING
    // waits 500 milliseconds before it updates the firebase
    useEffect(()=>{
        const timeoutId = setTimeout(() => updateNote(tempNoteText), 500)
        return () => clearTimeout(timeoutId)
    }, [tempNoteText])
    
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
                    tempNoteText={tempNoteText} 
                    setTempNoteText={setTempNoteText} 
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
