import whiskerson from '../assets/mr-whiskerson.png'
import phone from '../assets/phone-icon.png'
import mail from '../assets/mail-icon.png'

function Contact() {
    return (
        <div className='flex justify-center my-6'>
            <div className="flex flex-col p-4 pb-6 w-54 sm:max-w-xs rounded-lg shadow-2xl p-2">
                <img className="w-full h-auto rounded-lg" src={whiskerson} alt="Mr. Whiskerson" />
                <h3 className='font-bold text-xl py-4'>Mr. Whiskerson</h3>
                <div className='flex items-center'>
                    <img className='h-3 mr-2' src={phone} alt="phone icon" />
                    <p className='text-sm'>(212) 555-1234</p>
                </div>
                <div className='flex items-center'>
                    <img className='h-3 mr-2' src={mail} alt="mail icon" />
                    <p className='text-sm'>mr.whiskaz@catnap.meow</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;