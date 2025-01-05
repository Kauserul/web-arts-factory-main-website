import Image from "next/image";
// import bannarImg from "../../public/images/bannar.jpg";
import bannarImg2 from "@/app/images/detailsPage.png";
import { Button } from "@nextui-org/button";

const HomeBannar = () => {
    return (
        <div className="container mx-auto">
            <div className="lg:flex justify-between items-center h-screen">
                <div className="space-y-5 lg:w-6/12"  data-aos="fade-right">
                    <h1 className="lg:text-7xl md:text-4xl text-3xl font-bold">We are Digital Agency.</h1>
                    <p>Webartsfactory stands out as a premier software development company. Since 2020, our talented team of web developers, app developers, UI/UX designers, and VOIP experts has been committed to delivering innovative solutions with a systematic approach.</p>
                    <p>Delivering top-notch, cost-effective software services with unparalleled quality in every project.</p>
                    <Button color="primary" radius="lg" size="lg" className="py-4 text-2xl bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">Get Start</Button>
                </div>
                <div className="lg:w-6/12" data-aos="fade-left">
                    <Image
                        src={bannarImg2}
                        alt="Bannar Image"
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default HomeBannar;