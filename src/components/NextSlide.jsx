import { useSwiper } from "swiper/react";

export default function ButtonSlide({ children }) {
    const swiper = useSwiper();
    return (
        <button onClick={() => swiper.slideNext()}>Slide to the next slide</button>
    )
}