import Link from 'next/link';

const Footer = () => {
  return (
    <footer className=" w-full p-4 bg-black border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 ">
      <span className="text-sm text-gray-300 sm:text-center ">
        © 2024 Menahil Qasim. Developed by <Link href="https://www.linkedin.com/in/aleezarubab/" className="underline text-[#4ad1f2]">Aleeza R.</Link>. All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white  sm:mt-0">
        <li>
          <Link href="/" className="hover:underline me-4 md:me-6">Home</Link>
        </li>
        <li>
          <Link href="/shop" className="hover:underline me-4 md:me-6">Shop</Link>
        </li>
        <li>
          <Link href="/events" className="hover:underline me-4 md:me-6">Events</Link>
        </li>    
      </ul>
    </footer>
  );
};

export default Footer;
