import Image from 'next/image';
import React from 'react';
import tool01 from '@/public/adobe.webp';
import tool02 from '@/public/adobe-photoshop-express-icon-filled-256.png';
import tool03 from '@/public/filmora.png';
import aboutImg from '@/public/about-img.png'

const About = () => {
    return (
        <div id="about" className="relative px-4 bg-white overflow-hidden mt-16">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row">
                {/* Left Column (Image) */}
                <div className="w-full lg:w-[25%] relative">
                    <div className="relative h-64 w-full sm:h-72 md:h-96 lg:h-72 overflow-hidden">
                        <Image
                            width={500}
                            height={500}
                            className="h-full w-full object-contain object-top"
                            src={aboutImg}
                            alt="About Image"
                        />
                        {/* White fog effect at the bottom of the image */}
                        <div className="absolute bottom-0 left-0 w-full h-16 bg-white opacity-40 blur-sm"></div>
                    </div>
                </div>

                {/* Right Column (Text) */}
                <div className="w-full lg:w-[85%] lg:pl-8">
                    <div className="sm:text-center lg:text-left">
                        <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                            About me
                        </h2>

                        <p>
                            Hi, I am Menahil Qasim, a graphic designer and video editor. I specialize in creating visually engaging designs and editing videos that tell a compelling story. My goal is to bring ideas to life through creative visuals, whether it’s crafting unique graphics or editing videos to make them more impactful.
                        </p>
                        <p className='mt-5'>
                            I believe in the power of design and video to communicate messages effectively and connect with audiences. Every project I take on is an opportunity to create something unique and memorable that resonates with people and elevates brands.
                        </p>


                    </div>
                </div>
            </div>

            {/* New Section with Two Columns */}
            <div className="max-w-6xl mx-auto mt-8 flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-8">
                {/* Left Column (Tools) */}
                <div className="w-full lg:w-[30%] rounded-lg relative">
                    <h2 className="w-full text-start" style={{ lineHeight: '0.1' }}>
                        <span className="bg-white px-3 font-bold text-lg">Tools</span>
                    </h2>
                    <div className="py-2 border-b border-t border-r border-l border-gray-200 rounded-md">
                        <div className="grid grid-cols-3 gap-4">
                            {/* Tool Images */}
                            <div className="flex justify-center">
                                <Image
                                    src={tool01}
                                    alt="Tool 1"
                                    width={50} // Small image size
                                    height={50} // Small image size
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex justify-center">
                                <Image
                                    src={tool02}
                                    alt="Tool 2"
                                    width={50} // Small image size
                                    height={50} // Small image size
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex justify-center">
                                <Image
                                    src={tool03}
                                    alt="Tool 3"
                                    width={50} // Small image size
                                    height={50} // Small image size
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column (Industries) */}
                <div className="w-full lg:w-[65%] rounded-lg relative">
                    <h2 className="w-full text-start" style={{ lineHeight: '0.1' }}>
                        <span className="bg-white font-bold text-lg">Industries</span>
                    </h2>
                    <div className="py-2 ps-2 border-b border-t border-r border-l border-gray-200 rounded-md">
                        <p>
                            Advertising | Architecture | Arts and Entertainment | Business Education | Fashion | Food and Beverage | Healthcare | Manufacturing | Non-profit Organizations | Retail | Technology | Travel and Tourism
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
