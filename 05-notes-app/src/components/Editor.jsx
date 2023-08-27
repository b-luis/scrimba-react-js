import { useState } from "react"
import ReactMde from "react-mde"
import Showdown from "showdown"

// eslint-disable-next-line react/prop-types
export default function Editor({ tempNoteText, setTempNoteText }) {
    const [selectedTab, setSelectedTab] = useState("write")

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
    })  

    // * Change the Editor so that it uses `tempNoteText` and 
    // *    `setTempNoteText` for displaying and changing the text instead
    // *    of dealing directly with the `currentNote` data.
    // * 

    return (
        <section className="pane editor">
            <ReactMde
                // eslint-disable-next-line react/prop-types
                value={tempNoteText}
                onChange={setTempNoteText}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={(markdown) =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
                minEditorHeight={80}
                heightUnits="vh"
            />
        </section>
    )
}
