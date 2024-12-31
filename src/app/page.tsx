// import HomeBanner from '@/app/components/HomeBannar';
import HomeBannar from '@/components/HomeBannar';
import DigitalDreams from '@/components/DigitalDreams';
import OurServices from '@/components/OurServices';
import HireExperts from '@/components/HireExperts';
import WhyChoossUs from '@/components/WhyChoossUs';


export default function Home() {
    return (
        <div className="">
            <HomeBannar />
            <DigitalDreams/>
            <OurServices/>
            <HireExperts/>
            <WhyChoossUs/>
        </div>
    );
}
