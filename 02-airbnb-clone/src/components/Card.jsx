import star from '../assets/star.png'
/**
 * 
 * * props 
 * * when you have a site, there's no developer that waits for a new 
 * 
 */
function Card(props) {
    let badgeText;
    props.openSpots === 0 
      ? badgeText = 'SOLD OUT' 
      : props.location === "Online" 
      ? badgeText = 'ONLINE' 
      : null;

    return (
            <section className='flex-shrink-0 relative'>
              <div className="absolute bg-white top-2 left-2 px-1 rounded-sm text-xs capitalize font-semibold">
                {badgeText}
              </div>
                <img className='rounded-lg w-full object-cover h-56' src={props.coverImg} />
                <div className='flex items-center space-x-1 py-2'>
                    <img src={star} alt="star icon" className='h-3' />
                    <span className='text-xs'>{props.stats.rating}</span>
                    <span className='text-xs text-gray-500'>({props.stats.reviewCount}) • </span>
                    <span className='text-xs text-gray-500'>{props.location}</span>
                </div>
                <p className='text-xs overflow-hidden truncate'>{props.title}</p>
                <p className='text-[13px] py-1'><span className='font-bold'>From ${props.price}</span> / person</p>
            </section>
    );
  }
  
export default Card;