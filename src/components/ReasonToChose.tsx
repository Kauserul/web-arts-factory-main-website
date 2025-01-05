"use client";
import { Check } from 'lucide-react';
const resons = [
    {
        title: 'Industry Experience & Expertise',
        description: 'A firm with our professional competence, abilities and track record can be found nowhere else! Simply put, our team is uniquely qualified to help you.',
    },
    {
        title: 'Credibility & Skills',
        description: 'You are in safe hands with us! Our experience has cultivated a reliable approach to digital marketing. As a result, we are now trusted by business owners around the world.',
    },
    {
        title: 'White Hat Practices',
        description: 'We are a White Hat SEO service provider and only recommend researched practices that provide value to human audiences, and not the search algorithm alone.',
    },
    {
        title: 'Cost-Effective Growth',
        description: 'Our digital marketing strategies are always focused on efficiently growing your business for the least possible cost. Rest assured that your timely investment into our SEO services will net you a profit.',
    },
    {
        title: 'Dedicated Project Manager',
        description: 'For each of our client projects, we assign a dedicated project manager. They will focus on your project alone, strategizing everything from its roadmap to its execution to its deliverable.',
    },
    {
        title: 'Client Portal',
        description: 'We give each of our clients access to an individual client portal. From your portal view, you will be able to see everything related to your project, including our work roadmap and payment history.',
    },
    {
        title: 'Hands-On Communication',
        description: 'Chat with us whenever you need to! As we complete our work, we aim to provide great customer service at every stage. We employ a hands-on communication process throughout our team and with all of our clients.',
    },
    {
        title: 'Reporting and Documentation',
        description: 'Documenting the work steps throughout our process allows you to confirm our promised services from the original roadmap. Our team takes care to keep a record of all changes to your deliverable.',
    },
    {
        title: 'On time Delivery',
        description: 'From the start of every project, we always try to stick to the deadline(s) outlined in the original roadmap. When we encounter delays or challenges, we promise to always communicate them and work through them with you.',
    },
    {
        title: 'Post-Project Support',
        description: 'After the project is completed and we have delivered on our service offering to you, the work is not yet done! We promise to provide post-project support as you begin operating your business with the implemented SEO changes.',
    },
]

const ReasonToChooseSection = () => {

    return (
        <section className='py-20'>
            <div className="container mx-auto">
                <div className="reason-to-choose-section">
                    <div className="container">
                        <div className="section-width pb-16">
                            <h2 className="title-primary my-4">Reason to Choose The Web Arts Factory as your Trusted Digital Transformation</h2>
                            <p className="subTitle-primary">
                                Are you ready to take your small business’ online presence to the next level? Invest in our SEO services
                                now and we will show you how! Here are some more reasons for you to choose us as your trusted advisors in
                                your SEO growth strategy
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 lg:gap-x-20">
                            {resons?.map((reason, index) => (
                                <div className="flex gap-3" key={index}>
                                    <div>
                                        <span className='size-9 rounded-full bg-primary text-white flex justify-center items-center'><Check /></span>
                                    </div>
                                    <div className="flex border-b items-center flex-wrap pb-4">
                                        <strong className='md:text-2xl text-lg'>{reason.title}:</strong>
                                        <p className='md:text-lg'>{reason.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReasonToChooseSection;
