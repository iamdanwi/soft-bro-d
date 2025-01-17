import React from 'react'
import { Button } from './ui/button'

const Cta = () => {
    return (
        <section className='space-y-7 text-center'>
            <h1 className='text-3xl md:text-6xl font-extrabold '>
                Ready to Elevate Your Brand?
            </h1>
            <p>Connect with us today to discover how we can help your business thrive and grow.</p>
            <div>
                <Button className='mr-5 py-5'>Get Started</Button>
                <Button className='bg-transparent text-black border-[1px] hover:bg-black hover:text-white border-black py-5'>Learn more</Button>
            </div>
        </section>
    )
}

export default Cta