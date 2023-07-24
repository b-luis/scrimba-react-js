import grid from '../assets/photo-grid.png';

function Hero() {
    return (
        <section className='flex flex-col p-5 t'>
            <img className="self-center max-w-xs md:max-w-sm" src={grid} alt="photo grid" />
            <h1 className='font-bold text-3xl my-4'>Online Experiences</h1>
            <p className='text-xs  text-left pr-20'>Join a unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero;