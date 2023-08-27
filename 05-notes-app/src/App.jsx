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

    const [notes, setNotes] = useState(() => [])
    const [currentNoteId, setCurrentNoteId] = useState("")

    const currentNote = notes.find(note => note.id === currentNoteId) || notes[0]
    
    // web hook, so it's important to unsubscribe to avoid memory leaks
    useEffect(() => {
        // ? onSnapshot
        // ? imagine you have a camera, and take a photo on a given time
        // ? whenever something changes, we get up-to-date data
        const unsubscribe = onSnapshot(notesCollection, (snapshot) => {
            // Sync up our local notes array with the snapshot data
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
        const newNote = {
            // ! will be managed by firebase
            // id: nanoid(),
            body: "# Type your markdown note's title here",
            createdAt: Timestamp.fromDate(new Date()),
            updatedAt: Timestamp.fromDate(new Date())
        }
        const newNoteRef = await addDoc(notesCollection, newNote)
        setCurrentNoteId(newNoteRef.id)
    }
    
    async function updateNote(text) {
        const docRef = doc(db, "notes", currentNoteId)
        await setDoc(docRef, { body: text, updatedAt: Timestamp.fromDate(new Date())}, {merge: true})
    }

    async function deleteNote(noteId) { 
        const docRef = doc(db, "notes", noteId)
        await deleteDoc(docRef)
    }

    console.log(notes)
    
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
