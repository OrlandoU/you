import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-coverflow';
import Slidex from './Slidex';
import { Fade } from 'react-awesome-reveal';

export default function Slider() {
  const sources = [
    "./edits/0.MOV",
    "./edits/1.jpg",
    "./edits/2.MP4",
    "./edits/3.jpg",
    "./edits/4.MP4",
    "./edits/5.jpg",
    "./edits/6.mp4",
    "./edits/7.jpg",
    "./edits/8.MP4",
    "./edits/9.jpg",
    "./edits/10.MP4",
    "./edits/11.jpg",
    "./edits/12.MP4",
    "./edits/13.jpg",
    "./edits/14.MP4",
    "./edits/15.MP4",
  ];

  return (
    <div className='z-10 bg-white flex items-center justify-center w-full h-full p-4'>
      <div className='z-10 w-full h-full container max-w-3xs md:max-w-xs p-0'>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          modules={[EffectCoverflow]}
          className="mySwiper"
          autoplay
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 250,
            modifier: 1,
            slideShadows: true,
          }}
          initialSlide={5}
        >
            {
              sources.map((source, index) => (
                <SwiperSlide key={index}>

                  {({ isActive }) => {
                    return <Slidex source={source} isActive={isActive} />
                  }}
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </div>
  )
}