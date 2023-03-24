import Image from "next/image";

import Iconstar from '../../public/images/iconstar.svg';
import Ellipse from '../../public/images/ellipse.svg';

type Props = {
  img: string,
  title: string,
  year: string,
  category: string,
  rating: number,
  desc: string
}

const CarouselItem: React.FC<Props> = ({ img, title, year, category, rating, desc }) => {
  return (
    <div className="carousel-item ">
      <div className="carousel-item__container w-full flex items-center">
        <Image src={img} alt={title} width={243} height={365} />
        <div className="carousel-item__content flex-grow bg-black h-[324px] text-white p-6">
          <p className="flex items-center">
            <Image src={Iconstar} alt="iconstar" width={17} height={17} className="mr-[5px]"/>
            <strong className="font-bold text-lg">{rating}</strong>
          </p>
          <h3 className="font-medium text-[28px] mb-3">{title}</h3>
          <p className="flex items-center mb-3">
            {year}
            <Image src={Ellipse} alt="ellipse" width={7} height={7} className="mx-[5px]"/>
            {category}
          </p>
          <p className="text-xs leading-[18px]">
            {desc}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CarouselItem;