import phoneIcon from '../assets/phone-icon.png';
import mailIcon from '../assets/mail-icon.png';

function Contact({name, phone, email, image, alt}) {
    return (
        <div className="bg-gradient-to-l to-zinc-400 hover:from-zinc-400 hover:to-gray-100 cursor-pointer p-4 pb-6 sm:max-w-md rounded-lg shadow-2xl">
            <img className="w-full h-auto rounded-lg" src={image} alt={alt} />
            <h3 className='font-bold text-2xl py-4'>{name}</h3>
            <div className='flex items-center'>
                <img className='h-3 mr-2' src={phoneIcon} alt={alt} />
                <p className='text-md'>{phone}</p>
            </div>
            <div className='flex items-center'>
                <img className='h-3 mr-2' src={mailIcon} alt={alt} />
                <p className='text-md'>{email}</p>
            </div>
        </div>
    )
}

export default Contact;