import React, { useState } from 'react';
import memesData from '../data/memesData.js'

function Meme(){

    const [memeImage, setMemeImage] = useState("") 
    const getMemeImage = () => {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const newMemeImage = memesArray[randomNumber].url;
        // for debugging purposes:
        // console.log('Current memeImage:', memeImage);
        // console.log('New memeImage:', newMemeImage);
        setMemeImage(newMemeImage);
    }
 
    return(
        <main className="flex p-9 flex-col">
            <form action="">
                <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
                    <input type="text" className="w-full sm:w-1/2 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-700 rounded-md sm:text-xs  focus:border-slate-400" placeholder="Shut up" />
                    <input type="text" className="w-full sm:w-1/2 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-700 rounded-md sm:text-xs" placeholder="and take my money" />
                </div>
                {
                // * preventDefault is added mainly because of the default behavior of the button which is type='submit'
                // * reason the code is correct, but the images don't load.
                // * references: 
                // *    https://stackoverflow.com/questions/73119592/image-not-showing-using-usestate-hook-in-react 
                // *    https://react.dev/reference/react-dom/components/common#react-event-object-methods
                }
                <button onClick={(e) => {e.preventDefault(); getMemeImage()}} className="p-2 w-full rounded-md bg-gradient-to-r from-[#672280] to-[#A626D3]">Get a new meme image 🖼️</button>
            </form>
            { memeImage ? <img className='w-full mt-5' src={memeImage} alt="meme image" /> : ''}
        </main>
    )
}

export default Meme;