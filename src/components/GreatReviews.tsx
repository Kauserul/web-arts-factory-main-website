"use client"
// src/app/components/ReviewCarousel.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import reviewer1 from "@/app/images/carousel1.png";
import reviewer2 from "@/app/images/carousel2.png";
import reviewer3 from "@/app/images/carousel3.png";
import reviewer4 from "@/app/images/carousel4.png";
const ReviewCarousel = () => {
    const reviews = [
        {
            id: 1,
            review: "They were quick and efficient and their work was very good.They are a well-structured team and that impressed us the most.",
            image: reviewer1, // Replace with your image path
            name: "John Doe",
            designation: "Software Engineer",
        },
        {
            id: 2,
            review: "Their willingness to be flexible impressed us the most. Capital Numbers has been a trusted resource & partner for years.",
            image: reviewer2,
            name: "Jane Smith",
            designation: "UI/UX Designer",
        },
        {
            id: 3,
            review: "Their willingness to be flexible impressed us the most. Capital Numbers has been a trusted resource & partner for years.",
            image: reviewer3,
            name: "Dwyain Smith",
            designation: "UI/UX Designer",
        },
        {
            id: 4,
            review: "Their willingness to be flexible impressed us the most. Capital Numbers has been a trusted resource & partner for years.",
            image: reviewer4,
            name: "Dwyain Smith",
            designation: "UI/UX Designer",
        },
    ];

    const settings = {
        dots: true,
        speed: 6000,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
        autoplaySpeed: 0,
        autoplay: true,
        infinite: true,
        pauseOnHover: true,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
        ]
    };
    return (
        <section className="bg-[#f5f5f5] py-16 md:py-20">
            <div className="container mx-auto">
                <div className="px-4 py-8">
                    <div className="space-y-4 mb-8">
                        <h2 className="title-primary">Great Reviews</h2>
                        <p className="subtitle-primary text-center">97 Out Of 100 Clients Have Given Us A Five Star Rating On Google & Clutch</p>
                    </div>
                    <Slider {...settings} className="">
                        {reviews.map((review) => (
                            <div
                                key={review.id}
                                className="relative bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center border border-gray-100"
                            >
                                {/* Review Text */}
                                <p className="text-gray-600 italic mb-4 md:text-lg">{`"${review.review}"`}</p>

                                {/* Border */}
                                <div className="border-t border-gray-200 w-full mb-4"></div>

                                {/* Bottom Section */}
                                <div className="flex items-center justify-between w-full">
                                    {/* Left: Image */}
                                    <Image
                                        src={review.image}
                                        alt={review.name}
                                        width={64}
                                        height={64}
                                        className="w-16 h-16 rounded-full object-cover shadow-lg"
                                    />

                                    {/* Right: Name and Designation */}
                                    <div className="text-left ml-4">
                                        <h3 className="text-lg font-extrabold text-primary">{review.name}</h3>
                                        <p className="text-sm text-gray-500">{review.designation}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default ReviewCarousel;
