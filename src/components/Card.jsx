import { FaQuoteLeft , FaQuoteRight } from "react-icons/fa";


export default function Card(props){
    let review = props.review
    return (
        <div className="flex flex-col md:relative">
            <div className="absolute top-[-7rem] mx-auto z-10">
                <img 
                className="aspect-square rounded-full w-[140px] h-[140px] z-20"
                src={review.image}/>
                <div className="w-[140px] h-[140px] rounded-full absolute top-[-6px] left-[10px] bg-violet-500 z-[-1]"></div>
            </div>

            <div className="text-centre mt-7">
                <p className="font-bold capitalize text-2xl">{review.name}</p>
            </div>

            <div className="text-centre mt-0">
                <p className="text-violet-300 text-sm uppercase">{review.job}</p>
            </div>

            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteLeft />
            </div>

            <div className="text-centre mt-4 text-slate-500">
                {review.text}
            </div>

            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteRight/>
            </div>

            
        </div>
    )
}