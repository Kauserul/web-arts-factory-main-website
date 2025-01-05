import Image from "next/image";
import tecnology from "../app/images/hire expert.f951fa34.jpg"
import { Button } from "@nextui-org/button";

const HireExperts = () => {
    return (
        <div className="bg-[#f5f5f5] py-24">
            <div className="container mx-auto">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Hire Experts in Today is Leading Technologies</h1>
                    <p className="text-lg mt-5">Empower Your Digital Transformation with Expertise in
                        Cutting-Edge Tools and Frameworks</p>
                </div>
                <div className="flex md:flex-row flex-col gap-10 mt-10">
                    <div className="lg:w-6/12">
                        <Image
                            src={tecnology}
                            alt="hire experts"
                            className="h-full"
                        />
                    </div>
                    <div className="lg:w-6/12">
                        <p className="text-lg mb-4">
                            As a leading Software Solutions company, we have an in-house team of 750+ experts specializing in over 40 technologies. Our proficiency includes a wide range of programming languages, web and mobile frameworks, databases, and cloud platforms. We are also adept in containerization, orchestration, continuous integration and deployment (CI/CD), big data, and AI/ML and Blockchain ensuring we are equipped to handle all your software needs.
                            <br /><br />
                            Our team is committed to delivering high-quality solutions tailored to your specific requirements. We stay updated with the latest industry trends and technologies to provide innovative and efficient solutions. Whether you need a robust web application, a scalable mobile app, or a comprehensive enterprise software solution, we have the expertise to deliver exceptional results.
                            <br /><br />
                            We pride ourselves on our collaborative approach, working closely with our clients to understand their goals and challenges. Our agile development process ensures flexibility and transparency, allowing us to adapt to changing requirements and deliver projects on time and within budget. Partner with us to leverage our technical expertise and drive your business forward in the digital age.
                        </p>
                        <div className="text-end">
                            <Button color="primary" radius="lg" size="lg" className="py-4 text-2xl bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">Book All</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HireExperts;