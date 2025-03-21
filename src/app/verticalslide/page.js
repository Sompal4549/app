"use client";
import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import * as motion from "motion/react-client";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination, EffectFade } from "swiper/modules";
const Page = () => {
  return (
    <Box pos="relative" height="100%">
      <Box maxWidth={1200} mx="auto" w="100%" pos="relative">
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination, EffectFade]}
          className="mySwiper"
        >
          {Array.from({ length: 8 }).map((_, index) => {
            return (
              <SwiperSlide key={index}>
                <Box height="100%" width="100%">
                  <Box>
                    <Heading>Slide {index}</Heading>
                    <motion.div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                      }}
                    >
                      <motion.div
                        initial={{ y: "100%", opacity: 0 }}
                        whileInView={{ y: "0", opacity: 1 }}
                        style={{
                          width: "40%",
                          height: "100%",
                          minWidth: "300px",
                        }}
                        transition={{
                          type: "tween",
                          duration: 1.5,
                          delay: 0,
                          // ease: [0, 0.71, 0.2, 1.01],
                        }}
                      >
                        <Box width="100%" height="300px" bg="red" />
                      </motion.div>
                      <motion.div
                        initial={{ x: "100%", y: 100, opacity: 0 }}
                        whileInView={{ x: "0", y: 0, opacity: 1 }}
                        style={{
                          width: "40%",
                          height: "100%",
                          marginLeft: "20px",
                          minWidth: "300px",
                        }}
                        transition={{
                          type: "tween",
                          duration: 1.5,
                          delay: 0,
                          ease: [0, 0.71, 0.2, 1.01],
                        }}
                      >
                        <Box width="100%" height="250px" bg="blue" />
                      </motion.div>
                    </motion.div>
                  </Box>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
      <Box>
        <style>
          {`
                .mySwiper {
                width: 80vw;
                height: 100vh;
                }

                .swiper-slide {
                text-align: center;
                font-size: 18px;
                background: #fff;
                width:100%;
                height:100%;
                display: flex;
                justify-content: center;
                align-items: center;
                }

                .swiper-slide img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
                }
                    `}
        </style>
      </Box>
    </Box>
  );
};
export default Page;
