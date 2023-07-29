import troll from '../assets/troll-face.png'

function Header(){
    return (
        <header className='flex justify-between space-x-2
         p-4 text-white bg-gradient-to-r from-[#672280] to-[#A626D3]'>
            <div className='flex'>
                <img className='w-9' src={troll} alt="troll face" />
                <h2 className='font-karla font-semibold text-md self-center sm:text-xl mx-2'>Meme Generator</h2>
            </div>
            <h4 className='text-xs self-center'>React Course - Project 3</h4>
        </header>
    )
}

export default Header;