import { IconContext } from "react-icons";
import { FaLocationDot } from "react-icons/fa6";

function Card(props){
    return (
        <section className="flex border-b-[1px] border-slate-200 py-4">
            <img className="w-32 h-48 object-cover rounded-lg" src={props.imageUrl} />
            <div className="px-4 py-4">
                <IconContext.Provider value={{ color: "#F55A5A", className: "inline-block text-xs m-1" }}>
                    <FaLocationDot /> 
                </IconContext.Provider>
                <small className="uppercase tracking-widest">{props.location}</small>
                <a className='ml-4 text-xs text-slate-400 underline' href={props.googleMapsUrl} target="_blank">
                    View on Google Maps
                </a>
                <h2 className="text-2xl font-bold mb-4">{props.title}</h2>
                <p className="text-[10px] font-bold mb-2">{props.startDate} - {props.endDate}</p>
                <p className="text-xs">{props.description}</p>
            </div> 
        </section>
    )
}

export default Card;