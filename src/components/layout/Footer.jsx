import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaFacebook } from "react-icons/fa";
import Logo from "../../../public/assets/icons/Logo.png";

const Footer = () => {
  return (
    <section className="bg-[#83a6cedc] text-gray-800 font-semibold">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo + About */}
          <div className="sm:col-span-2">
            <Link href="/" className="inline-flex items-center">
              <Image src={Logo} alt="logo" width={40} />
              <h5 className="ml-2 text-2xl font-bold tracking-wide text-black">BrainStack</h5>
            </Link>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm">
                We believe education should be simple and accessible.
                Our platform connects learners with world-class instructors.
              </p>
              <p className="mt-4 text-sm">

                Start your journey today and grow with us.
              </p>
            </div>
          </div>

          {/* Contacts */}
          <div className="space-y-2 text-sm">
            <p className="text-2xl font-bold text-white">Contacts</p>
            <p className="text-gray-300">Phone: <Link href="tel:880-1930242273" className="text-gray-800">880-1930242273</Link></p>
            <p className="text-gray-300">Email: <Link href="mailto:eftajul.shadi@gmail.com" className="text-gray-800">eftajul.shadi@gmail.com</Link></p>
          </div>

          {/* Social */}
          <div>
            <p className="text-2xl font-bold text-white">Social</p>
            <div className="flex items-center mt-4 space-x-4 text-2xl">
              <Link href="https://www.facebook.com/eftajulislamshadi" target="_blank" className=" hover:scale-125 transition">
                <FaFacebook size={20} />
              </Link>
              <Link href="https://www.linkedin.com/in/eftajulislamshadi" target="_blank" className=" hover:scale-125 transition">
                <FaLinkedinIn size={20} />
              </Link>
              <Link href="https://github.com/ei-shadi" target="_blank" className=" hover:scale-125 transition">
                <FaGithub size={20} />
              </Link>
              <Link href="https://wa.me/8801930242273" target="_blank" className=" hover:scale-125 transition">
                <FaWhatsapp size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-white/40 lg:flex-row">
          <p className="text-sm">© 2025 BrainStack. All rights reserved.</p>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li><Link href="/" className="text-sm hover:underline">F.A.Q</Link></li>
            <li><Link href="/" className="text-sm hover:underline">Privacy Policy</Link></li>
            <li><Link href="/" className="text-sm hover:underline">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
