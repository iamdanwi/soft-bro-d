import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const testimonials = [
    { id: 1, rating: "⭐️⭐️⭐️⭐️⭐️", message: "The team exceeded our expectations and transformed our brand!", name: "Jane Doe", position: "CEO, Tech Innovations", image: "/women.jpg" },
    { id: 2, rating: "⭐️⭐️⭐️⭐️⭐️", message: "Their creativity and dedication made all the difference!", name: "Jhone Smith", position: "Marketing Director, BrandCo", image: "/man.png" }
]

const Testimonial = () => {
    return (
        <section className='text-center space-y-16'>
            <div>
                <h1 className='text-3xl md:text-6xl font-bold'>Client Testimonials</h1>
                <p>Our clients love the results we deliver every time.</p>
            </div>
            <div className='flex flex-col md:flex-row space-y-3 md:space-y-0 justify-evenly items-center'>
                {testimonials.map((item) => (
                    <div key={item.id} className='text-left space-y-4 border-[1px] border-black p-3'>
                        <p className='px-4 grayscale text-black'>{item.rating}</p>
                        <p>&quot; {item.message} &quot;</p>
                        <div className='flex space-x-3'>
                            <Avatar>
                                <AvatarImage src={item.image} alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div>
                                <p>{item.name}</p>
                                <p>{item.position}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    )
}

export default Testimonial