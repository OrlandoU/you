import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useInView } from "react-intersection-observer";

export default function CollagePhoto({source, index}) {
    const [className, setClassName] = useState("");

    const [ref, inView, entry] = useInView({
        threshold: 1,
    });

    useEffect(() => { 
        setClassName(inView ? "" : "grayscale");
    }, [inView])

    return (
        <Fade duration={800} key={index} triggerOnce className="">
            <div ref={ref} className={className + " duration-600 ease-in-out relative w-full h-full"}>
                <span className="absolute w-full h-full inset-shadow-sm inset-shadow-indigo-50"></span>
                {source.source[source.source.length - 3] !== "M" ?
                    <img key={index} src={source.source} alt="" className="w-full  h-full object-cover" /> :
                    <video src={source.source} autoPlay muted loop></video>
                }
            </div>
        </Fade>
    )
}