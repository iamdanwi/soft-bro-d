import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const projects = [
    { id: 1, title: "Moderen Web Design", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.", image: "/dashboardMockup.png", link: "/" },
    { id: 2, title: "Brand Identity Revamp", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.", image: "/dashboardMockup.png", link: "/" },
    { id: 3, title: "Brand Identity Revamp", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.", image: "/dashboardMockup.png", link: "/" }
]

const Portfolio = () => {
    return (
        <section id='portfolio' className='text-center'>
            <div className='space-y-4'>
                <p>Portfolio</p>
                <h1 className='text-3xl md:text-6xl font-bold'>Our Recent Projects</h1>
                <p>Explore our innovative designs and successful collaborations.</p>
            </div>
            <div className='flex md:flex-row flex-col space-y-3 md:space-y-5 my-12'>
                {projects.map((item) => (
                    <Link key={item.id} href={item.link} className='flex flex-col items-center space-y-2 md:space-y-5 my-5 mx-10'>
                        <Image src={item.image} height={800} width={800} alt='services' className='w-80' />
                        <h3 className='text-xl font-semibold'>{item.title}</h3>
                        <p>{item.description}</p>
                    </Link>
                ))}
            </div>
            <Link href="/" >
                <Button className='bg-transparent text-black border-[1px] hover:bg-black hover:text-white border-black px-10 mr-4'>View all</Button>
            </Link>
        </section>
    )
}

export default Portfolio