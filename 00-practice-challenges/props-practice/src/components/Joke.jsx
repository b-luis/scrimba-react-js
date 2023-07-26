
function Joke(props) {
    return (
        <div className="mx-auto max-w-sm px-6 py-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.setup}</h5>
            <p className="mt-5 font-normal text-xl text-gray-700 dark:text-gray-400">{props.punchline}</p>
        </div>
    )
}

export default Joke;