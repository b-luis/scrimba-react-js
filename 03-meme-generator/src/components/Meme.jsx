import { useState, useEffect } from 'react';
// import memesData from '../data/memesData.js'

function Meme(){

    //* everytime we click the button, it should return a random image
    //* from the memesData array to replace the current random image
    //* so in order to do that, we must use the state setter to update the
    //* meme state. 
    // ! DO NOT MODIFY THE STATE DIRECTLY 

    /**
     * Challenge: 
     * As soon as the Meme component loads the first time,
     * make an API call to "https://api.imgflip.com/get_memes".
     * 
     * When the data comes in, save just the memes array part
     * of that data to the `allMemes` state
     * 
     * Think about if there are any dependencies that, if they
     * changed, you'd want to cause to re-run this function.
     * 
     * Hint: for now, don't try to use an async/await function.
     * Instead, use `.then()` blocks to resolve the promises
     * from using `fetch`. We'll learn why after this challenge.
     */

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemes, setAllMemes] = useState([])
    
    // useEffect(() => {
    //     fetch("https://api.imgflip.com/get_memes")
    //         .then(res => res.json())
    //         .then(data => setAllMemes(data.data.memes))
    // }, [])

    // * Converted promise chaining to async/await function
    useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes");
            const data = await res.json();
            setAllMemes(data);
        }
        getMemes();

    }, []);

    // * Destructure the meme state object to access the randomImage value
    const { topText, bottomText, randomImage } = meme
    
    const getMemeImage = () => {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const newMemeImageURL = allMemes[randomNumber].url;
        // for debugging purposes:
        // console.log('Current memeImage:', memeImage);
        // console.log('New memeImage:', newMemeImage);
        setMeme(prevMeme => ({...prevMeme, randomImage: newMemeImageURL}));
    }
    
    // * Handling input data
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
                <button 
                    onClick={(e) => {e.preventDefault(); getMemeImage()}} 
                    className="p-2 w-full rounded-md bg-gradient-to-r from-[#672280] to-[#A626D3]">
                    Get a new meme image 🖼️
                </button>
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