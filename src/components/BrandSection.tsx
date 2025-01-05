import React from 'react'
import brand1 from '@/app/images/brand1.svg';
import brand2 from '@/app/images/brand2.jpg';
import brand3 from '@/app/images/brand3.jpg';
import brand4 from '@/app/images/brand4.png';
import brand5 from '@/app/images/brand5.png';
import brand6 from '@/app/images/brand6.png';
import brand7 from '@/app/images/brand7.png';
import brand8 from '@/app/images/brand8.png';
import brand9 from '@/app/images/brand9.png';
import brand10 from '@/app/images/brand10.svg';
import brand11 from '@/app/images/brand11.svg';
import brand12 from '@/app/images/brand12.svg';
import Image from 'next/image';

const BrandSection = () => {
    const brands = [
        { id: 1, brandImg: brand1 },
        { id: 2, brandImg: brand2 },
        { id: 3, brandImg: brand3 },
        { id: 4, brandImg: brand4 },
        { id: 5, brandImg: brand5 },
        { id: 6, brandImg: brand6 },
        { id: 7, brandImg: brand7 },
        { id: 8, brandImg: brand8 },
        { id: 9, brandImg: brand9 },
        { id: 10, brandImg: brand10 },
        { id: 11, brandImg: brand11 },
        { id: 12, brandImg: brand12 },
    ];
    return (
        <section className='py-14 md:py-20 px-2 md:px-0'>
            <div className="container mx-auto">
                <div>
                    <h2 className="title-primary pb-4">Local & International Brands We Work With</h2>
                    <p className="subtitle-primary">We have extensive experience in delivering top-notch tailored SEO solutions across a wide range of industries. Uncover all the brands we have worked with so far from here and let the results speak on our behalf.</p>
                </div>
                <div className='mt-16'>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-6 md:gap-8 px-4">
                        {brands?.map((brand) => (
                            <div key={brand.id} className="flex justify-center items-center bg-white shadow-lg rounded-lg p-4 border border-gray-50">
                                <Image
                                    width={300}
                                    height={200}
                                    src={brand.brandImg} // Use `.src` to render the imported image
                                    alt={`Brand ${brand.id}`}
                                    className="w-[150px] h-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BrandSection