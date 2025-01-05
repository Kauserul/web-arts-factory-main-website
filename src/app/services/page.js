import { Card } from "@nextui-org/react";
import icon from "../../../public/images/services-img3.png";
import Image from "next/image";


const services = () => {
    return (
        <div>
            <div className="bg-custom-gradient">
                <div className="container mx-auto lg:p-28 p-4 text-white text-center">
                    <h1 className="lg:text-6xl text-2xl lg:mb-8 mb-4 font-bold">Software Development Services</h1>
                    <p>As a top software development company, Capital Numbers leverages advanced tech stacks to design, develop, deploy, and launch custom apps and UI/UX designs that are profitable and serve global clients. Talk to us to learn more!</p>
                    <button className="btn btn-primary mx-auto mt-10">Book a Call</button>
                </div>
            </div>

            <div className="container mx-auto my-16">
                <div className="text-center">
                    <h1 className="lg:text-4xl text-2xl font-bold">Our Software Application Development Services</h1>
                    <p className="lg:w-8/12 mx-auto mt-5 mb-10">Bespoke mobile apps or web apps. eCommerce or chatbots. Product development or software design services. Dedicated hiring or a fixed quote. One-time or ongoing. We offer everything to cater to the unique needs of our clients.</p>
                </div>
                <div className="gap-2 grid grid-cols-12 grid-rows-2 px-8">
                    <Card className="col-span-12 sm:col-span-4 h-[350px]">
                        {/* <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-black uppercase font-bold">What to watch</p>
                            <h4 className="text-black font-medium text-large">Stream the Acme event</h4>
                        </CardHeader> */}
                        <div className="text-center p-6">
                            <Image
                                // removeWrapper
                                alt="Card background"
                                className="mx-auto"
                                src={icon}
                                width={100}
                                height={100}
                            />
                            <h2 className="text-2xl my-3">Web Application Development</h2>
                            <p>We have decade-long experience building best-in-class B2B and B2C web apps that power modern businesses and workflows.</p>
                            {/* <Button color="primary" variant="bordered" className="my-4">
                                Learn More
                            </Button> */}
                        </div>
                    </Card>
                    <Card className="col-span-12 sm:col-span-4 h-[350px]">
                        <div className="text-center p-6">
                            <Image
                                // removeWrapper
                                alt="Card background"
                                className="mx-auto"
                                src={icon}
                                width={100}
                                height={100}
                            />
                            <h2 className="text-2xl my-3">Outsourced Product Development</h2>
                            <p>Benefit from our product-building expertise and high-class engineering that get you the results without letting you struggle or put your mind to them.</p>
                            {/* <Button color="primary" variant="bordered" className="my-4">
                                Learn More
                            </Button> */}
                        </div>
                    </Card>
                    <Card className="col-span-12 sm:col-span-4 h-[350px]">
                        <div className="text-center p-6">
                            <Image
                                // removeWrapper
                                alt="Card background"
                                className="mx-auto"
                                src={icon}
                                width={100}
                                height={100}
                            />
                            <h2 className="text-2xl my-3">DevOps</h2>
                            <p>Get in touch with our ace DevOps engineers to plan, build, and test your products and ship them faster to any cloud or on-premise</p>
                            {/* <Button color="primary" variant="bordered" className="my-4">
                                Learn More
                            </Button> */}
                        </div>
                    </Card>
                    <Card isFooterBlurred className="w-full h-[350px] col-span-12 sm:col-span-5">
                        <div className="text-center p-6">
                            <Image
                                // removeWrapper
                                alt="Card background"
                                className="mx-auto"
                                src={icon}
                                width={100}
                                height={100}
                            />
                            <h2 className="text-2xl my-3">Custom Software Development</h2>
                            <p>Our customized software solutions are unique to individual needs, budgets, timelines, and target groups. and target groups. and target groups.</p>
                            {/* <Button color="primary" variant="bordered" className="my-4">
                                Learn More
                            </Button> */}
                        </div>
                    </Card>
                    <Card isFooterBlurred className="w-full h-[350px] col-span-12 sm:col-span-7">
                        <div className="text-center p-6">
                            <Image
                                // removeWrapper
                                alt="Card background"
                                className="mx-auto"
                                src={icon}
                                width={100}
                                height={100}
                            />
                            <h2 className="text-2xl my-3">Mobile Application Development</h2>
                            <p>Leave your mobile app development tasks to us because we’ve been in the business long enough to create.</p>
                            {/* <Button color="primary" variant="bordered" className="my-4">
                                Learn More
                            </Button> */}
                        </div>
                    </Card>
                    <Card className="col-span-12 sm:col-span-4 h-[350px]">
                        <div className="text-center p-6">
                            <Image
                                // removeWrapper
                                alt="Card background"
                                className="mx-auto"
                                src={icon}
                                width={100}
                                height={100}
                            />
                            <h2 className="text-2xl my-3">Dedicated Development Team</h2>
                            <p>Spreading yourself too thin? Let our dedicated team handle all your development needs so that you can put your energy to good use with, ou can put your energy to good use with</p>
                            {/* <Button color="primary" variant="bordered" className="my-4">
                                Learn More
                            </Button> */}
                        </div>
                    </Card>
                    <Card className="col-span-12 sm:col-span-4 h-[350px]">
                        <div className="text-center p-6">
                            <Image
                                // removeWrapper
                                alt="Card background"
                                className="mx-auto"
                                src={icon}
                                width={100}
                                height={100}
                            />
                            <h2 className="text-2xl my-3">Testing & QA</h2>
                            <p>What’s the point of a timely release if it’s full of bugs? We help you avoid such a case by. blockchain journey and even allow</p>
                            {/* <Button color="primary" variant="bordered" className="my-4">
                                Learn More
                            </Button> */}
                        </div>
                    </Card>
                    <Card className="col-span-12 sm:col-span-4 h-[350px]">
                        <div className="text-center p-6">
                            <Image
                                // removeWrapper
                                alt="Card background"
                                className="mx-auto"
                                src={icon}
                                width={100}
                                height={100}
                            />
                            <h2 className="text-2xl my-3">Blockchain</h2>
                            <p>Hire expert Blockchain developers from us to tap into expertise that can get you started with your blockchain journey and even allow.</p>
                            {/* <Button color="primary" variant="bordered" className="my-4">
                                Learn More
                            </Button> */}
                        </div>
                    </Card>
                </div>
                <button className="btn btn-primary mx-auto mt-10">Book a Call</button>
            </div>
        </div>
    );
};

export default services;