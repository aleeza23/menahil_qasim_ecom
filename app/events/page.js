import React from 'react'
import image01 from '@/public/8c9b50ad772c1eb0b42dfb28cc2dc638.jpg'
import image02 from '@/public/71MgvVrL+sL.jpg'
import image03 from '@/public/81mXL8JpBuL._AC_UF894,1000_QL80_.jpg'
import image04 from '@/public/83488143-e3af-45b3-9a51-bed665dcf08c.webp'
import image05 from '@/public/port-img-27.jpg'
import image06 from '@/public/port-img-30.jpg'
import image07 from '@/public/eb4c70dee66ae9cf9da8ef95320ac876.jpg'
import galleryImg01 from '@/public/h3-gallery-img1.jpg'
import galleryImg02 from '@/public/h3-gallery-img2.jpg'
import galleryImg03 from '@/public/h3-gallery-img3.jpg'
import galleryImg04 from '@/public/h3-gallery-img4.jpg'
import galleryImg05 from '@/public/h3-gallery-img5.jpg'
import galleryImg06 from '@/public/h3-gallery-img6.jpg'

import Image from 'next/image'
import Link from 'next/link'



const page = () => {
    return (
        <>
            <div className="relative overflow-hidden pb-96 lg:pb-0 mb-12 lg:my-16 bg-white">
                <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                        <div className="sm:max-w-lg">
                            <h1 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">Elegant Event Decor Solutions</h1>
                            <p className="mt-4 text-xl text-gray-500">
                                Transform your event into a stunning experience with our bespoke decor services. From weddings and corporate events to birthdays and themed parties, our expertly crafted decor is designed to impress. Explore our gallery and get inspired by our previous work.
                            </p>
                        </div>

                        <div>
                            <div className="mt-10">
                                <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                        <div className="flex items-center space-x-6 lg:space-x-8">
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                    <Image src={image01} alt='' className="h-full w-full object-cover object-center" />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <Image src={image03} alt="" className="h-full w-full object-cover object-center" />
                                                </div>
                                            </div>
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <Image src={image05} alt="" className="h-full w-full object-cover object-center" />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <Image src={image04} alt="" className="h-full w-full object-cover object-center" />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <Image src={image07} alt="" className="h-full w-full object-cover object-center" />

                                                </div>
                                            </div>
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <Image src={image06} alt="" className="h-full w-full object-cover object-center" />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <Image src={image02} alt="" className="h-full w-full object-cover object-center" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link href="#gallery" className="inline-block rounded-md border border-transparent underline py-3  text-center font-medium text-[#0a9cdd] ">View Gallery</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* images */}
            <div className="container mx-auto mb-16" id='gallery'>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2">
                    <div>
                        <Image className="object-cover object-center w-full h-auto max-w-full "
                            src={galleryImg01}
                            alt="gallery-photo" />
                    </div>
                    <div>
                        <Image className="object-cover object-center w-full h-auto max-w-full "
                            src={galleryImg02}
                            alt="gallery-photo" />
                    </div>
                    <div>
                        <Image className="object-cover object-center w-full h-auto max-w-full "
                            src={galleryImg03}
                            alt="gallery-photo" />
                    </div>
                    <div>
                        <Image className="object-cover object-center w-full h-auto max-w-full "
                            src={galleryImg04}
                            alt="gallery-photo" />
                    </div>
                    <div>
                        <Image className="object-cover object-center w-full h-auto max-w-full "
                            src={galleryImg05}
                            alt="gallery-photo" />
                    </div>
                    <div>
                        <Image className="object-cover object-center w-full h-auto max-w-full "
                            src={galleryImg06}
                            alt="gallery-photo" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default page