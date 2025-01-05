import BrandSection from "@/components/BrandSection";
import OurProject from "@/components/OurProject";

const page = () => {
    return (
        <div>
            <div className="bg-custom-gradient">
                <div className="container mx-auto lg:p-28 p-4 text-white text-center">
                    <h1 className="lg:text-6xl text-2xl lg:mb-8 mb-4 font-bold">Projects We Completed</h1>
                    <p>Bringing Your Ideas to Life with Top-notch Solutions. Explore a World of Possibilities with Us!</p>
                    <button className="btn btn-primary mx-auto mt-10">Book a Call</button>
                </div>
            </div>
            <BrandSection />
            <OurProject />
        </div>
    );
};

export default page;