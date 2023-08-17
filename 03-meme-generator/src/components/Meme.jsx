import React, { useState } from 'react';
import memesData from '../data/memesData.js'

function Meme(){

    /**
     * TODO: 
     * * Challenge: Update our state to save the meme-related
     * * data as an object called `meme`. It should have the
     * * following 3 properties:
     * * topText, bottomText, randomImage.
     * 
     * * The 2 text states can default to empty strings for now,
     * * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * * Next, create a new state variable called `allMemeImages`
     * * which will default to `memesData`, which we imported above
     * 
     * * Lastly, update the `getMemeImage` function and the markup 
     * * to reflect our newly reformed state object and array in the
     * * correct way.
     */

    //* everytime we click the button, it should return a random image
    //* from the memesData array to replace the current random image
    //* so in order to do that, we must use the state setter to update the
    //* meme state. 
    // ! DO NOT MODIFY THE STATE DIRECTLY 

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemeImages, setMemeImage] = useState(memesData);
    
    const getMemeImage = () => {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const newMemeImageURL = memesArray[randomNumber].url;
        // for debugging purposes:
        // console.log('Current memeImage:', memeImage);
        // console.log('New memeImage:', newMemeImage);
        setMeme(prevMeme => ({...prevMeme, randomImage: newMemeImageURL}));
    }
 
    // * Destructure the meme state object to access the randomImage value
    const { topText, bottomText, randomImage} = meme

    const handleChange=(event) => {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return(
        <main className="flex p-9 flex-col">
            <form action="">
                <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
                    <input 
                        type="text" 
                        className="w-full text-black sm:w-1/2 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-600 rounded-md sm:text-xs focus:border-slate-400" 
                        placeholder="Top text" 
                        name="topText"
                        value={topText}
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        className="w-full text-black sm:w-1/2 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-600 rounded-md sm:text-xs" 
                        placeholder="Bottom text" 
                        name="bottomText"
                        value={bottomText}
                        onChange={handleChange}
                    />
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
            <div className='relative'>
                <img className='w-full mt-5 relative' src={randomImage} alt="meme image"/>
                <h2 className="meme--text top">{topText}</h2>
                <h2 className="meme--text bottom">{bottomText}</h2>
            </div>

        </main>
    )
}

export default Meme;