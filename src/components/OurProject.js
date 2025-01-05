"use client"
import project1 from "@/app/images/Examtice.png";
import project2 from "../app/images/Extremeranks.png";
import project3 from "@/app/images/Savershall.png";
import project4 from "@/app/images/image-4.jpg";
import project5 from "@/app/images/project5.jpg";
import project6 from "@/app/images/project6.jpg";
import project7 from "@/app/images/project7.jpg";
import project8 from "@/app/images/project-8.jpg";

import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const OurProject = () => {
    const [products6, setProcucts9] = useState(6);
    const projects = [
        {
            img: project1,
            name: "Examtice",
            des: "Exams can be challenging and demanding. Examtice is here to guide and prepare you for your...",
            link: "https://examtice.com/"
        },
        {
            img: project2,
            name: "Extremeranks",
            des: "SEO stands for “Search Engine Optimization.” SEO is a way of making your business show up ...",
            link: "https://extremeranks.com/"
        },

        {
            img: project3,
            name: "Savershall",
            des: "Welcome to Savers Hall, where we are committed to delivering happiness to our valued custo....",
            link: "https://savershall.com/"
        },
        {
            img: project4,
            name: "Eurasiasupplies",
            des: "Eurasiasupplies.com is the best e-commerce site in Bangladesh which offers directly import",
            link: "https://eurasiasupplies.com/"
        },
        {
            img: project5,
            name: "Azanwholesale",
            des: "Demo Ecommerce Shop that would help you to sell your products from your site",
            link: "https://azanwholesale.com/"
        },
        {
            img: project6,
            name: "Devzet",
            des: "There are a team of passionate individuals who go the extra mile to create wonderful exper",
            link: "https://devzet.com/"
        },
        {
            img: project7,
            name: "Wycliffe",
            des: "William Cameron Townsend, who founded Wycliffe Bible Translators in 1942, believed everyon",
            link: "https://wycliffe.my/"
        },
        {
            img: project8,
            name: "Azanwholesale",
            des: "Demo Ecommerce Shop that would help you to sell your products from your site",
            link: "https://azanwholesale.com/"
        },
        {
            img: project6,
            name: "Devzet",
            des: "There are a team of passionate individuals who go the extra mile to create wonderful exper",
            link: "https://devzet.com/"
        },
    ]
    return (
        <div>
            <div className="container mx-auto mb-10 py-20 px-2 md:px-0">
                <div className="text-center">
                    <h1 className="text-3xl sm:text-4xl font-bold text-headingtext md:text-6xl">Our Awesome Projects</h1>
                    <p className="text-lg mt-5 md:w-2/3 mx-auto">Delve into our project showcase — a testament to blending creativity and innovation. Discover how we turn visions into impactful digital solutions across web, graphics, and marketing realms.</p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-7 md:gap-10 mt-10">
                    {projects?.slice(0, products6).map((project, index) => (
                        <Card className="mb-4" key={index}>
                            <Link href={project?.link} className="size-full">
                                <Image src={project?.img} alt={project.name} />
                                <CardBody className="text-center py-8">
                                    <h2 className="text-xl font-bold mb-2">{project.name}</h2>
                                    <p>{project.des}</p>
                                </CardBody>
                            </Link>
                        </Card>
                    ))}
                </div>
                <div className="flex justify-center mt-10">
                    {products6 < 7 && <button onClick={() => setProcucts9(9)} className="bg-primaryGradient rounded-lg px-5 md:px-8 py-3 text-white">Less More</button>}
                </div>



            </div>
            {/* Ready To Grow Your Business?*/}
            <section className="bg-gray-100 py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h4 className="text-2xl font-extrabold sm:text-4xl md:text-text-6xl text-headingtext mb-4">Ready To Grow Your Business?</h4>
                        <p className="text-gray-600 mb-6">
                            Just take a step ahead and contact us today or get a free quote to discuss how we can help you.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 font-bold">
                            <a href="/contactUsPage"
                                className="text-white py-4 px-6 md:px-9 rounded bg-primary hover:bg-blue-700 transition">
                                Book an Appointment
                            </a>
                            <p className="text-gray-700">or</p>
                            <button
                                onClick={() => window.location.href = 'tel:+8801737316384'}
                                className="text-white py-4 px-6 md:px-9 rounded bg-primary hover:bg-primaryGradient transition">
                                Call: +8801737316384
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurProject;