import Image from "next/image";
import image01 from '@/public/0_euJheFm9EXi5MJMq.jpg'
import image02 from '@/public/3045040-eye-collage-art-and-paper-craft-artwork-for-security-spyware-and-magazine-advertising.-colourful-vibrant-pop-and-creative-graphic-design-poster-for-background-wallpaper-and-backdrop-mockup-f.jpg'
import image03 from '@/public/1707735835502.webp'
import image04 from '@/public/background-butterfly-butterflies-graphic-design-concept-bright-colorful-art-abstract-colored-artistic-202374083.webp'
import image05 from '@/public/12495eed3eab10d38cc5d041381993fa.jpg'
import image06 from '@/public/knowledge-exploration-diversity-mixed-media-artwork_1332470-416.webp'
import image07 from '@/public/Creative-graphic-design-studios-in-Delhi-Pune-Mumbai-Bangalore-999x999-1.jpg'
import image08 from '@/public/507-5076520_creative-photography-logo-design-png-transparent-png.png'
import image09 from '@/public/674-6749363_graphic-designer-creative-logo-png-download-logo-design.png'
import image11 from '@/public/4711bc6638d17fe5abb0043a0a110ea6.jpg'
import image12 from '@/public/best-design-logo-for-your-company.jpg'
import image13 from '@/public/images.webp'



const ImageGallery = () => {
  return (
    <div className="container border border-gray-300 max-w-6xl py-8 p-4 lg:p-12 relative rounded-lg mx-auto my-20">
      <h2 className="absolute -top-5" >
        <span className="bg-white px-5 text-black font-bold text-2xl">RECENT WORK</span>
      </h2>
      <div className="columns-1 md:columns-2 xl:columns-3 gap-7">
        <div className="break-inside-avoid mb-8">
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://pagedone.io/asset/uploads/1688031162.jpg"
            alt="Gallery image"
            width={600}
            height={400}
          />
        </div>
        <div className="break-inside-avoid mb-8">
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://pagedone.io/asset/uploads/1688031232.jpg"
            alt="Gallery image"
            width={600}
            height={400}
          />
        </div>
        <div className="break-inside-avoid mb-8">
          <Image
            className="h-auto max-w-full rounded-lg"
            src={image01}
            alt="Gallery image"
            width={600}
            height={400}
          />
        </div>
        <div className="break-inside-avoid mb-8">
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://pagedone.io/asset/uploads/1688031375.jpg"
            alt="Gallery image"
            width={600}
            height={400}
          />
        </div>
        <div className="break-inside-avoid mb-8">
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://pagedone.io/asset/uploads/1688031396.jpg"
            alt="Gallery image"
            width={600}
            height={400}
          />
        </div>
        <div className="break-inside-avoid mb-8">
          <Image
            className="h-auto max-w-full rounded-lg"
            src={image13}
            alt="Gallery image"
            width={600}
            height={400}
          />
        </div>
        <div className="break-inside-avoid mb-8">
          <Image
            className="h-auto max-w-full rounded-lg"
            src={image03}
            alt="Gallery image"
            width={600}
            height={400}
          />
        </div>
        <div className="break-inside-avoid mb-8">
          <Image
            className="h-auto max-w-full rounded-lg"
            src={image02}
            alt="Gallery image"
            width={600}
            height={400}
          />
        </div>
        <div className="break-inside-avoid mb-8">
          <Image
            className="h-auto max-w-full rounded-lg"
            src={image04}
            alt="Gallery image"
            width={600}
            height={400}
          />
        </div>
        <div className="break-inside-avoid mb-8">
          <Image
            className="h-auto max-w-full rounded-lg"
            src={image05}
            alt="Gallery image"
            width={600}
            height={400}
          />
        </div>
        <div className="break-inside-avoid mb-8">
          <Image
            className="h-auto max-w-full rounded-lg"
            src={image06}
            alt="Gallery image"
            width={600}
            height={400}
          />
        </div>
        <div className="break-inside-avoid mb-8">
          <Image
            className="h-auto max-w-full rounded-lg"
            src={image08}
            alt="Gallery image"
            width={600}
            height={400}
          />
        </div>
        <div className="break-inside-avoid mb-8">
          <Image
            className="h-auto max-w-full rounded-lg"
            src={image07}
            alt="Gallery image"
            width={600}
            height={400}
          />
        </div>
        <div className="break-inside-avoid mb-8">
          <Image
            className="h-auto max-w-full rounded-lg"
            src={image09}
            alt="Gallery image"
            width={600}
            height={400}
          />
        </div>
        <div className="break-inside-avoid mb-8">
          <Image
            className="h-auto max-w-full rounded-lg"
            src={image11}
            alt="Gallery image"
            width={600}
            height={400}
          />
        </div>
        <div className="break-inside-avoid mb-8">
          <Image
            className="h-auto max-w-full rounded-lg"
            src={image12}
            alt="Gallery image"
            width={600}
            height={400}
          />
        </div>
        <div className="break-inside-avoid mb-8">
          <Image
            className="h-auto max-w-full rounded-lg"
            src='https://pagedone.io/asset/uploads/1688031414.png'
            alt="Gallery image"
            width={600}
            height={400}
          />
        </div>
        <div className="break-inside-avoid mb-8">
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://www.alrahaprint.com/wp-content/uploads/2024/07/graphic-design.jpg"
            alt="Gallery image"
            width={600}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
