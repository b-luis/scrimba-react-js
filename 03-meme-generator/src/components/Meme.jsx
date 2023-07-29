
function Meme(){
    return(
        <main className="flex p-9 flex-col ">
            <form action="">
                <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
                    <input type="text" className="w-full sm:w-1/2 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-700 rounded-md sm:text-xs  focus:border-slate-400" placeholder="Shut up" />
                    <input type="text" className="w-full sm:w-1/2 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-700 rounded-md sm:text-xs" placeholder="and take my money" />
                </div>
                <button className="p-2 w-full rounded-md bg-gradient-to-r from-[#672280] to-[#A626D3]">Get a new meme image 🖼️</button>
            </form>
        </main>
    )
}

export default Meme;