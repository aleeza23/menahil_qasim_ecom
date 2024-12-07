import About from "@/components/About";
import ImageGallery from "@/components/ImageGallery";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <div className="relative bg-gray-100 flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-16 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
        <div className="z-0 flex  justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
          <Image
            src="https://kitwind.io/assets/kometa/laptop.png"
            className="object-cover object-right w-full h-auto lg:w-auto lg:h-full"
            alt="hero-image"
            width={1000}
            height={1000}
          />
        </div>
        <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
          <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  Meet Menahil
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Elevate your
                <br className="hidden md:block" />
                visual storytelling{' '}
                <span className="inline-block text-deep-purple-accent-400">
                  with Menahil Qasim
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Menahil Qasim brings your ideas to life through stunning video editing and captivating graphic design. Discover the difference professional artistry can make for your brand.
              </p>
            </div>

            <form>
              <div className="flex items-center mt-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#4ad1f2] hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                  Explore more
                </button>
                <Link
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-[#4ad1f2] hover:text-deep-purple-800"
                >
                  Learn more
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* about section */}
      <About />
      <div className="px-4 lg:px-0">
      <ImageGallery />
      </div>
    </>
  );
}
