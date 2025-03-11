import { use, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-coverflow';

export default function Slidex({source, isActive}) {
    const { ref, inView } = useInView({
        threshold: 1
    });

    const [className, setClassName] = useState("");

    const refVideo = useRef(null);
    useEffect(() => {
        if(refVideo.current && isActive && inView){
            refVideo.current.muted = false;
            refVideo.current.volume = 0.1;
        } else if(refVideo.current && (!isActive || !inView)){ {
            refVideo.current.muted = true;
            refVideo.current.volume = 0.1;
        }

        
    }}, [isActive, inView]);

    useEffect(() => {
        if(isActive){
            setClassName("");
        } else {
            setClassName("grayscale");
        }
    }, [isActive])

    return (
        <div ref={ref} className={"w-full h-full rounded-lg  ease-in duration-500 " + className}>
            {source[source.length - 3].toLowerCase() !== "m" ?
                <img src={source} alt="" className="w-full  h-full object-cover"/> :
                <video src={source} loop autoPlay muted ref={refVideo}></video>
            }
        </div>
    )
}