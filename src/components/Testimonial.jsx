import { useState } from "react";
import Card from "./Card";
import { FiChevronRight,FiChevronLeft } from "react-icons/fi";



export default function Testimonial(props){
    let reviews = props.reviews;
    const [index, setIndex] = useState(0);

    function leftShiftHandler(){
        if(index - 1 < 0){
            setIndex(reviews.length - 1 );
        }else{
            setIndex(index-1);
        }
    }

    function rightShiftHnadler(){
        if(index + 1 >= reviews.length){
            setIndex(0);
        }else{
            setIndex(index + 1);
        }
    }

    function surpriseHandler(){
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }

    return (
        <div className="w-[85vw] md:w-[700px] flex flex-col bg-white justify-center items-center mt-10 p-10 transition-all 
        duration-500 hover:shadow-xl rounded-md">
            <Card review = {reviews[index]}/>

            <div className="flex justify-center text-3xl text-violet-400 mt-5 font-bold gap-3">
                <button onClick={leftShiftHandler} className="cursor-pointer hover:text-violet-500">
                    <FiChevronLeft/>
                </button>
                <button onClick={rightShiftHnadler} className="cursor-pointer hover:text-violet-500">
                    <FiChevronRight/>
                </button>
            </div>

            <div>
                <button onClick={surpriseHandler} className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 px-10 py-2 rounded-md font-bold
                text-white text-lg mt-2 cursor-pointer">
                    Surprise Me
                </button>
            </div>
        </div>
    )
}