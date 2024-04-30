"use client";

import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../packages/ui/src/carousel";

const ImageItem = ({ initialImage, hoverImage }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  return (
    <>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img
          src={initialImage}
          alt="initial"
          className="absolute inset-0 top-2 h-[95%] w-full cursor-pointer object-cover"
          style={{
            transition: "opacity 0.5s ease-in-out",
            opacity: isHovered ? 0 : 1,
          }}
        />
        <img
          src={hoverImage}
          alt="hover"
          className="absolute inset-0 top-2 h-[95%] w-full cursor-pointer  object-cover"
          style={{
            transition: "opacity 0.5s ease-in-out",
            opacity: isHovered ? 1 : 0,
          }}
        />
      </div>
    </>
  );
};

export const ImageMockup = () => {
  const images = [
    {
      initialImage:
        "https://images.unsplash.com/photo-1713972085027-706e345e7215?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8",
      hoverImage:
        "https://plus.unsplash.com/premium_photo-1713803863170-436be4feb510?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      initialImage: "/_static/whale.svg",
      hoverImage:
        "https://plus.unsplash.com/premium_photo-1713803863170-436be4feb510?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      initialImage: "/_static/whale.svg",
      hoverImage:
        "https://plus.unsplash.com/premium_photo-1713803863170-436be4feb510?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      initialImage: "/_static/whale.svg",
      hoverImage:
        "https://plus.unsplash.com/premium_photo-1713803863170-436be4feb510?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const nextImage = () => {
    console.log("nexct");

    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };
  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      nextImage();
    } else if (event.key === "ArrowLeft") {
      prevImage();
    }
  };
  useEffect(() => {
    // This code will run after currentIndex is updated
    console.log(`Current index: ${currentIndex}`);
    // You can perform additional actions here, such as fetching new data based on the currentIndex
  }, [currentIndex]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 786);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  });
  return (
    <section className="mb-8 mt-24 flex h-screen flex-col items-center justify-center gap-12">
      <h2 className="font-display bg-gradient-to-r from-primary to-secondary-foreground bg-clip-text text-center text-4xl font-extrabold leading-tight text-transparent sm:text-5xl sm:leading-tight">
        <span className="">Flexible</span>
        <br />
        customization options
      </h2>
      <Carousel className="max-w-full md:max-w-4xl">
        <div className=" ">
          <CarouselContent className="overlow-x-hidden flex">
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="md:w-full/3 flex w-full  flex-shrink-0 gap-6"
              >
                {isSmallScreen ? (
                  <>
                    <div
                      className={`carousel-item-${index === currentIndex ? "active" : ""}  relative mx-auto h-[600px] w-[330px] rounded-[2.5rem] border-[14px] border-gray-800 bg-gray-800 dark:border-gray-800`}
                      // style={{
                      //   transform: `translateX(-${currentIndex * 100}%)`,
                      //   transition: "transform 0.5s ease-in-out",
                      // }}
                    >
                      <div className="absolute -left-[17px] top-[72px] h-[32px] w-[3px] rounded-l-lg bg-gray-800 dark:bg-gray-800" />
                      <div className="absolute -left-[17px] top-[124px] h-[46px] w-[3px] rounded-l-lg bg-gray-800 dark:bg-gray-800" />
                      <div className="absolute -left-[17px] top-[178px] h-[46px] w-[3px] rounded-l-lg bg-gray-800 dark:bg-gray-800" />
                      <div className="absolute -right-[17px] top-[142px] h-[64px] w-[3px] rounded-r-lg bg-gray-800 dark:bg-gray-800" />
                      <ImageItem
                        initialImage={image.initialImage}
                        hoverImage={image.hoverImage}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className={`carousel-item-${index === currentIndex ? "active" : ""}  relative mx-auto h-[600px] w-[330px] rounded-[2.5rem] border-[14px] border-gray-800 bg-gray-800 dark:border-gray-800`}
                      // style={{
                      //   transform: `translateX(-${currentIndex * 100}%)`,
                      //   transition: "transform 0.5s ease-in-out",
                      // }}
                    >
                      <div className="absolute -left-[17px] top-[72px] h-[32px] w-[3px] rounded-l-lg bg-gray-800 dark:bg-gray-800" />
                      <div className="absolute -left-[17px] top-[124px] h-[46px] w-[3px] rounded-l-lg bg-gray-800 dark:bg-gray-800" />
                      <div className="absolute -left-[17px] top-[178px] h-[46px] w-[3px] rounded-l-lg bg-gray-800 dark:bg-gray-800" />
                      <div className="absolute -right-[17px] top-[142px] h-[64px] w-[3px] rounded-r-lg bg-gray-800 dark:bg-gray-800" />
                      <ImageItem
                        initialImage={image.initialImage}
                        hoverImage={image.hoverImage}
                      />
                    </div>
                    <div
                      className={`carousel-item-${index === currentIndex ? "active" : ""}  relative mx-auto h-[600px] w-[330px] rounded-[2.5rem] border-[14px] border-gray-800 bg-gray-800 dark:border-gray-800`}
                      // style={{
                      //   transform: `translateX(-${currentIndex * 100}%)`,
                      //   transition: "transform 0.5s ease-in-out",
                      // }}
                    >
                      <div className="absolute -left-[17px] top-[72px] h-[32px] w-[3px] rounded-l-lg bg-gray-800 dark:bg-gray-800" />
                      <div className="absolute -left-[17px] top-[124px] h-[46px] w-[3px] rounded-l-lg bg-gray-800 dark:bg-gray-800" />
                      <div className="absolute -left-[17px] top-[178px] h-[46px] w-[3px] rounded-l-lg bg-gray-800 dark:bg-gray-800" />
                      <div className="absolute -right-[17px] top-[142px] h-[64px] w-[3px] rounded-r-lg bg-gray-800 dark:bg-gray-800" />
                      <ImageItem
                        initialImage={image.initialImage}
                        hoverImage={image.hoverImage}
                      />
                    </div>
                    <div
                      className={`carousel-item-${index === currentIndex ? "active" : ""}  relative mx-auto h-[600px] w-[330px] rounded-[2.5rem] border-[14px] border-gray-800 bg-gray-800 dark:border-gray-800`}
                      // style={{
                      //   transform: `translateX(-${currentIndex * 100}%)`,
                      //   transition: "transform 0.5s ease-in-out",
                      // }}
                    >
                      <div className="absolute -left-[17px] top-[72px] h-[32px] w-[3px] rounded-l-lg bg-gray-800 dark:bg-gray-800" />
                      <div className="absolute -left-[17px] top-[124px] h-[46px] w-[3px] rounded-l-lg bg-gray-800 dark:bg-gray-800" />
                      <div className="absolute -left-[17px] top-[178px] h-[46px] w-[3px] rounded-l-lg bg-gray-800 dark:bg-gray-800" />
                      <div className="absolute -right-[17px] top-[142px] h-[64px] w-[3px] rounded-r-lg bg-gray-800 dark:bg-gray-800" />
                      <ImageItem
                        initialImage={image.initialImage}
                        hoverImage={image.hoverImage}
                      />
                    </div>
                  </>
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
        <CarouselNext className="" variant={"default"} />
        <CarouselPrevious variant={"default"} />
      </Carousel>
    </section>
  );
};
