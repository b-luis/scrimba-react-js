import katie from '../assets/katie-zaferes.png'
import star from '../assets/star.png'

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

function Card() {
    return (
        <div>
            <section className='py-5 pl-5  w-52'>
                <img className='rounded-lg w-48' src={katie} alt="katie zaferes photo" />
                <div className='flex items-center space-x-1 py-2'>
                    <img src={star} alt="star icon" className='h-3' />
                    <span className='text-xs'>5.0</span>
                    <span className='text-xs text-gray-500'>(6) • </span>
                    <span className='text-xs text-gray-500'>USA</span>
                </div>
                <p className='text-xs'>Life lessons with Katie Zaferes</p>
                <p className='text-[13px] py-1'><span className='font-bold'>From $136 </span> / person</p>
            </section>
        </div>
    );
  }
  
export default Card;