import grid from '../assets/photo-grid.png';

function Hero() {
    return (
        <section className='flex flex-col p-5'>
            <img className="self-center max-w-xs md:max-w-sm" src={grid} alt="photo grid" />
            <h1 className='text-2xl font-bold my-4'>Online Experiences</h1>
            <p className='text-xs'>Join a unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero;