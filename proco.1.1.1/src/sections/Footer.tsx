import Logo from "@/assets/logosaas.png";
import Image from "next/image";
export const Footer = () => {
  return (
    <div className="bg-black py-10 text-center text-sm text-[#BCBCBC]">
      <div className="container">
        <div className="before:content-[' '] relative inline-flex before:absolute before:bottom-0 before:top-2 before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD98,#C2F0B1,#2FD8FE)] before:blur">
          <Image src={Logo} alt="Sass Logo" height={40} className="relative" />
        </div>
        <p className="mt-6">
          &copy; Proco 2024, Inc. All rights reserved.
          
        </p>
        <p>
        Dehradun , Uttarakhand.
        </p>
        <p>
          +91-9528968510
        </p>
      </div>
    </div>
  );
};