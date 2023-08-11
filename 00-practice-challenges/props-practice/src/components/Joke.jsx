import { useState } from "react"

function Joke(props) {
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     * - Only display the punchline paragraph if `isShown` is true
     */

    const [isShown, setShown] = useState(false);

    function toggle(){
        setShown(prevShown => !prevShown);
        console.log(isShown);
    }

    return (
        <div className="mx-auto max-w-sm px-6 py-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
            {props.setup && <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.setup}</h5>}
            {isShown && <p className="mt-5 font-normal text-xl text-gray-700 dark:text-gray-400">{props.punchline}</p>}
            <button onClick={toggle} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-3 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Show Joke</button>
        </div>
    )
}

export default Joke;