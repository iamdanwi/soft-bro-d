import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const Hero = () => {
    return (
        <>
            <section id="home" className=" hidden md:flex flex-col items-center space-y-16 text-center mt-16 h-full">
                <div className='flex flex-col space-y-6'>
                    <h1 className='text-3xl md:text-6xl font-extrabold '>
                        Empowering Brands to <br />Succeed
                    </h1>
                    <h3 className=''>
                        Unlock your brand&apos;s potential with our innovative solutions. Together, we can create impactful <br /> strategies that drive success.
                    </h3>
                    <div>
                        <Button className='mr-5 py-5'>Get Started</Button>
                        <Button className='bg-transparent text-black border-[1px] hover:bg-black hover:text-white border-black py-5'>Learn more</Button>
                    </div>
                </div>
                <div>
                    <Image src="/dashboardMockup.png" height={1000} width={1000} alt={''} />
                </div>
            </section>
            <section id="home" className="md:hidden flex flex-col items-center space-y-16 text-center mt-16 h-full">
                <div className='flex flex-col space-y-6'>
                    <h1 className='text-3xl md:text-6xl font-extrabold '>
                        Empowering Brands to <br />Succeed
                    </h1>
                    <h3 className=''>
                        Unlock your brand&apos;s potential with our innovative solutions. Together, we can create impactful <br /> strategies that drive success.
                    </h3>
                    <div>
                        <Image src="/dashboardMockup.png" height={1000} width={1000} alt={''} />
                    </div>
                    <div>
                        <Button className='mr-5 py-5'>Get Started</Button>
                        <Button className='bg-transparent text-black border-[1px] hover:bg-black hover:text-white border-black py-5'>Learn more</Button>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Hero