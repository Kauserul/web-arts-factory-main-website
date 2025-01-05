// import HomeBanner from '@/app/components/HomeBannar';
import HomeBannar from '@/components/HomeBannar';
import DigitalDreams from '@/components/DigitalDreams';
import OurServices from '@/components/OurServices';
import HireExperts from '@/components/HireExperts';
import WhyChoossUs from '@/components/WhyChoossUs';
import OurProject from '@/components/OurProject';
import ReasonToChooseSection from '@/components/ReasonToChose';
import ReviewCarousel from '@/components/GreatReviews';
import BrandSection from '@/components/BrandSection';
import FAQ from '@/components/FAQ';
import 'aos/dist/aos.css';

export default function Home() {
    return (
        <div className="">
            <HomeBannar />
            <DigitalDreams />
            <OurServices />
            <HireExperts />
            <WhyChoossUs />
            <OurProject />
            <ReasonToChooseSection />
            <ReviewCarousel />
            <BrandSection />
            <FAQ />
        </div>
    );
}
