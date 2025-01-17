import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';

const services = [
    { id: 1, title: "Strategic Marketing Solutions", description: "Tailored marketing strategies that resonate with your audience.", image: "/dashboardMockup.png" },
    { id: 2, title: "Creative Web Design", description: "Stunning websites that engage users and enhance experience.", image: "/dashboardMockup.png" },
    { id: 3, title: "Data-Driven Analytics", description: "Insights that inform decisions and optimize performance.", image: "/dashboardMockup.png" }
]

const Services = () => {
    return (
        <section id='services' className='space-y-10'>
            <div className='space-y-4 text-center'>
                <p>Services</p>
                <h1 className='text-3xl md:text-6xl font-bold'>Explore Our Core Offerings</h1>
                <p>Our services are designed to elevate your brand. We focus on delivering innovative solutions <br /> that drive results.</p>
            </div>
            <div className='flex md:flex-row flex-col space-y-3 md:space-y-5 my-24'>
                {services.map((item) => (
                    <div key={item.id} className='flex flex-col items-center space-y-2 md:space-y-5 text-center my-5'>
                        <Image src={item.image} height={320} width={320} alt='services' className='w-80' />
                        <h3 className='text-xl font-semibold'>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
            <div className='text-center space-y-4'>
                <Button className='bg-transparent text-black border-[1px] hover:bg-black hover:text-white border-black py-5 mr-4'>Learn more</Button>
                <Link href="/" className='inline-flex space-x-5'>Get started <ArrowRight /> </Link>
            </div>
        </section>
    )
}

export default Services;