import Image from "next/image";

import Footerlogo from '../../public/images/footerlogo.svg';

const Footer = () => {
  return (
    <footer className="footer flex items-center h-[160px] bg-black/30">
      <div className="container flex justify-between items-center">
        <div className="w-4/12">
          <p className="text-secondary text-sm">©  2021 MoovieTime. All rights reserved.</p>
        </div>
        <div className="w-4/12">
          <Image src={Footerlogo} alt="movie time" className="mx-auto"/>
        </div>
        <div className="w-4/12">
          <p className="text-secondary text-right text-sm">Made with Next.js</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;