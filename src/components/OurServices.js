
import img1 from "../app/images/services-img3.png"
import Image from "next/image";

const OurServices = () => {
    const services = [
        {
            img: img1,
            title: "Web Development",
            des: "We use state-of-the-art technologies and development practices to create custom web applications for your business. Our web design team conceptualizes and creates each application from scratch, ensuring it meets your unique business."
        },
        {
            img: img1,
            title: "Software Development",
            des: "Get the custom functionality and features required to meet your business or industry's unique needs. Our custom software solutions help you address your present needs and, more importantly, your needs for the future."
        },
        {
            img: img1,
            title: "Backend Development",
            des: "Tap into our on-demand DevOps expertise to achieve the cloud-enabled business transformation that’s aimed at cost-saving, agility, speed-to-delivery, and innovation."
        },
        {
            img: img1,
            title: "Mobile App Development",
            des: "Our developers build native or hybrid apps for iOS and Android using the latest tech stack. We have expertise in fintech, edtech, healthcare, streaming industries, and more."
        },
        {
            img: img1,
            title: "E-Commerce Website Development",
            des: "Our digital transformation solutions help enterprises develop the right DX framework upon accessing their digital transformation readiness to induce digital capabilities using analytics, automation, and AI, modernizing their business models and processes for improved customer experiences."
        },
        {
            img: img1,
            title: "UI/UX Development",
            des: "We offer end-to-end Blockchain development solutions to help clients grow in areas like Cryptocurrency, NFT Marketplace, Smart Contract, ICO, DeFi, dApp, etc."
        },
    ]
    return (
        <div className="container mx-auto mt-10">
            <div className="text-center">
                <h1 className="text-4xl font-bold">Our Awesome Services</h1>
                <p className="text-lg mt-5">Webartsfactory, a sister concern of Morsheda PUC Ltd is a leading web solution, software management & digital marketing service provider and one of the fastest growing companies in city of Mymensingh, Bangladesh.</p>
            </div>
            <div className="grid grid-cols-2 gap-10 mt-10">
                {services.map((service, index) => (
                    <div key={index} className="flex gap-5">
                        <div className="w-1/5">
                            <Image src={service.img} alt={service.title} className="w-full"/>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                            <p className="text-justify">{service.des}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurServices;