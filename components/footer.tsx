import { Beau_Rivage } from 'next/font/google'
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react'

const monsieurLaDoulaise = Beau_Rivage({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-monsieur',
})

const navItems = [
    { title: "Home", link: "home" },
    { title: "About Us", link: "about" },
    { title: "Our Services", link: "services" },
    { title: "Portfolio", link: "portfolio" },
    { title: "Case Studies", link: "case-studies" },
    { title: "Testimonials", link: "testimonials" },
]

const services = [
    "Web Design",
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "Brand Identity",
    "Digital Marketing",
]

const Footer = () => {
    return (
        <>
            <footer className='p-4'>
                <div className="container px-4 py-12 md:py-16">
                    <Separator className="my-8 bg-black" />
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {/* Brand Section */}
                        <div className="space-y-4">
                            <h1 className={`${monsieurLaDoulaise.variable} logo text-3xl font-extrabold`}>
                                Softbro<span className="text-blue-700">-D</span>
                            </h1>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Transforming ideas into exceptional digital experiences. We craft innovative web solutions that help businesses thrive in the digital world.
                            </p>
                            <div className="flex items-center gap-4 pt-4">
                                <Link href="#" className="text-muted-foreground hover:text-blue-700 transition-colors">
                                    <Facebook size={20} />
                                </Link>
                                <Link href="#" className="text-muted-foreground hover:text-blue-700 transition-colors">
                                    <Twitter size={20} />
                                </Link>
                                <Link href="#" className="text-muted-foreground hover:text-blue-700 transition-colors">
                                    <Instagram size={20} />
                                </Link>
                                <Link href="#" className="text-muted-foreground hover:text-blue-700 transition-colors">
                                    <Linkedin size={20} />
                                </Link>
                                <Link href="#" className="text-muted-foreground hover:text-blue-700 transition-colors">
                                    <Github size={20} />
                                </Link>
                            </div>
                        </div>

                        {/* Quick Links Section */}
                        <div className="space-y-4">
                            <h4 className="font-semibold text-lg">Quick Links</h4>
                            <nav className="grid grid-cols-1 gap-2">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.link}
                                        href={item.link}
                                        className="text-sm text-muted-foreground transition-colors hover:text-blue-700"
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Services Section */}
                        <div className="space-y-4">
                            <h4 className="font-semibold text-lg">Our Services</h4>
                            <div className="grid grid-cols-1 gap-2">
                                {services.map((service) => (
                                    <span key={service} className="text-sm text-muted-foreground">
                                        {service}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div className="space-y-4">
                            <h4 className="font-semibold text-lg">Get in Touch</h4>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                                    <MapPin className="h-5 w-5 shrink-0 text-blue-700" />
                                    <p>123 Design Street, Creative City, 12345</p>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                    <Phone className="h-5 w-5 shrink-0 text-blue-700" />
                                    <p>+1 (234) 567-8900</p>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                    <Mail className="h-5 w-5 shrink-0 text-blue-700" />
                                    <p>hello@softbro-d.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Separator className="my-8 bg-black" />

                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                        <p>© {new Date().getFullYear()} Softbro-D. All rights reserved.</p>
                        <div className="flex gap-6">
                            <Link href="/privacy" className="hover:text-blue-700 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-blue-700 transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="/sitemap" className="hover:text-blue-700 transition-colors">
                                Sitemap
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer

