import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";

const CommonSlider = ({ sliderData }) => {
  const [autoplay, setAutoplay] = useState(true);
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:1000px)');
  
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={5}
        slidesPerView={isMobile ? 1 : isTablet ? 3 : 5}
        loop={true}
        autoplay={autoplay ? { delay: 2500, disableOnInteraction: false } : false}
        speed={1000} // Transition speed in milliseconds
        effect="fade"
        onMouseEnter={() => setAutoplay(false)} // Stop autoplay on hover
        onMouseLeave={() => setAutoplay(true)} // Resume autoplay when not hovering
        pagination={{ 
          clickable: true,
          el: '.swiper-pagination', // Specify the custom class for pagination
        }}
      >
        {sliderData?.map((item, index) => (
          <SwiperSlide 
            key={index} 
            style={{ 
              backgroundImage: `url(${item.image})`, 
              position: "relative", 
              minHeight: isMobile ? 180 : 150,
              backgroundSize: 'cover', // Ensure the background image covers the slide
              backgroundPosition: 'center', // Center the background image
              overflow: 'hidden', // Prevent content overflow
            }}
          >
            <div 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Tint background
                transition: 'opacity 0.3s ease', // Smooth transition
              }}
              className="slide-overlay"
            >
              {item.title}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination"  style={{ display: "flex", justifyContent: "center",paddingTop:"0px"}}/> {/* Custom pagination container */}
    </div>
  );
};

export default CommonSlider;