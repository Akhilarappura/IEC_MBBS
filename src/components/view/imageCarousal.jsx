import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageCarousel = () => {
  const images = [
    "img/portfolio/UKRAINE.jpg",
    "img/portfolio/UKRAINE.jpg",
    "img/portfolio/UKRAINE.jpg",
    "img/portfolio/UKRAINE.jpg",
    "img/portfolio/UKRAINE.jpg",
    "img/portfolio/UKRAINE.jpg",
    "img/portfolio/UKRAINE.jpg"
  ];

  return (
    <div
      style={{
        width: "90%",
        maxWidth: "1200px",
        margin: "50px auto",
        padding: "20px",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
        background: "#fff",
        borderRadius: "10px"
      }}
    >
      <h2 className="section-title text-center">Gallery</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          // This acts like xs (mobile)
          0: {
            slidesPerView: 1,
          },
          // This acts like md (tablet)
          768: {
            slidesPerView: 2,
          },
          // This acts like lg (desktop)
          1024: {
            slidesPerView: 3,
          },
        }}
        style={{
          height: "300px",
          display: "flex",
          alignItems: "center"
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index}`}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "10px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(0, 0, 0, 0.15)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;