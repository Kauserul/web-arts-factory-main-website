"use client"

import { Accordion, AccordionItem } from "@nextui-org/react";
import { div } from "framer-motion/client";
import { title } from "process";

export default function FAQ() {
    const items = [
        {
            id : 1,
            title : "What do software developers do?",
            content : "Software developers retrieve, store, and alter data to analyze a system’s requirements and capability. They design, program, build, deploy and maintain software using different skills and tools. Also, they meet with clients, determine needs, help develop, ensure usability, and complete quality assurance. Equipped with a team of talented and tech-savvy software developers, we offer unmatchable development services to our clients."
        },
        {
            id : 2, 
            title : "What is digital transformation?",
            content : "Digital transformation enables companies to integrate digital technology smartly into all business areas to drive fundamental change and deliver value to customers. And the benefits include greater business agility, increased efficiency, and unlocking the new value of employees, customers, and shareholders. Capital Numbers is a digital transformation consultancy offering digital solutions at competitive prices. Equipped with a team of 700+ expert developers, we help businesses transform and evolve quickly to seize opportunities and spark innovation and growth."
        },
        {
            id : 3,
            title : "Why is digital transformation important?",
            content : "Digital transformation changes the way an organization works. There can be several reasons why a business wishes to transform digitally. But the most likely reason to take the path is the need of the hour. Other ones include better data collection, more robust resource management, enhanced customer experience, increased profits, better agility, improved productivity, data-driven customer insights, and better security."
        },
        {
            id : 4,
            title : "What is agile software development?",
            content : "Agile software development emphasizes streamlining the procedure and producing minimum viable products (MVPs) that go through numerous iterations before being finalized. Feedback is gathered and implemented continually. We also use this methodology to ensure improved quality, satisfied customers, better control, increased flexibility, reduced risks, etc."
        },
        {
            id : 5,
            title : "What technologies enable digital transformation?",
            content : "Technology and digital transformation go hand-in-hand. It is an enabler that supports business drivers for digital transformation, like using real-time data for business processes and improving the customer experience. Technology trends fostering a more rapid pace of digital transformation in business are mobile, cloud, blockchain, augmented reality, API-based integrations, machine learning, IoT, etc."
        },
        {
            id : 6,
            title : "How to set up a software development team?",
            content : "We offer you a 3-step process to set up a software development team - choose software developers, integrate the team into your projects, and scale on-demand."
        },
        {
            id : 7,
            title : "What is the software development life cycle?",
            content : "Software development life cycle refers to the structured process used to design, develop, and test high-quality software. Our software development life cycle is divided into six steps - conducting a software discovery workshop, software development consultation, wireframing and designing, development, testing, and deployment."
        },
        {
            id : 8,
            title : "What are the four main areas of digital transformation?",
            content : "The four primary areas of digital transformation are cycle is divided into six steps - conducting a software discovery workshop, software development consultation, wireframing and designing, development, testing, and deployment."
        },
        {
            id : 9,
            title : "How does the cloud enable digital transformation?",
            content : "Successful digital transformation is made possible by the cloud. Delivering flexible, on-demand access to the resources and supporting these new digital business offerings requires a cloud-based architecture. It enables enterprises to scale infrastructure as necessary to accommodate changing business goals while lowering the risks of wasted IT resources that inhibited past investments in new digital services."
        },
        {
            id : 10,
            title : "How to outsource software development?",
            content : "When outsourcing software development, you need to follow a few steps - define your goals, prepare a scope for work documentation, define your tech stack, opt for a development company, and manage project scope, budget, and timeline. We are a leading organization offering high-quality software development outsourcing services. With us, you can work with the top 1% of developers and get superior results."
        },
        {
            id : 11,
            title : "Why do digital transformations fail?",
            content : "Digital transformation is essential to business survival, but companies keep failing. The chief reasons for this failure are But taking some practical steps, including bringing clarity to your business case, promoting a culture of transformation adoption, setting priorities, focusing on customers, fostering collaboration, etc., can help you avoid failure. And top of this, you can partner Capital Numbers, a leading digital transformation solution provider, and take the giant leap forward toward digital transformation successfully."
        },
        {
            id : 12,
            title : "How much does digital transformation cost?",
            content : "The cost of digital transformation differs depending on the kind of business, its goals, capabilities, and needs. However, the 'cost' is nothing compared to its benefits. At Capital Numbers, we offer digital solutions at competitive prices. Get in touch with our digital transformation consultants to know in detail."
        },
    ]

    return (
        <div className="bg-[#f9f9f9] py-28">
            <div className="container mx-auto my-10">
                <h1 className="text-4xl font-bold mb-5 text-center">Frequently Asked Questions</h1>
                <Accordion variant="splitted">
                    {
                        items.map((item) => (
                            <AccordionItem key={item.id} aria-label={item.title} title={item.title}>
                                {item.content}
                            </AccordionItem>
                        ))
                    }
                </Accordion>
            </div>
        </div>

    );
}
