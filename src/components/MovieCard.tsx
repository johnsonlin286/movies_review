import Link from "next/link";
import Image from "next/image";

import LinkButton from "./LinkButton";

import IconStar from '../../public/images/iconstar.svg';
import Poster from '../../public/images/posters/space_sweepers.png'

type Props = {
  poster: string,
  title: string,
  year: string,
  category: string,
  rating: number,
  link: string
}

const MoviesCard: React.FC<Props> = ({ poster, title, year, category, rating, link }) => {
  return (
    <div className="movie-card">
      <div className="movie-card__thumbnail relative">
        <Image src={poster} alt={title} width="0" height="0" sizes="100vw" className="w-full h-auto max-w-[220px] mb-3"/>
        <strong className="movie-card__score absolute top-0 right-0 bg-black/80 text-white text-lg text-center font-bold py-[5px] px-[12px]">
          {rating.toFixed(1)}
        </strong>
        <div className="movie-card__overlay absolute w-full h-full bg-black/80 top-0 left-0 opacity-0 hover:opacity-100 transition-opacity flex flex-col justify-evenly items-center">
          <strong className="flex items-center text-primary">
            <Image src={IconStar} alt="iconstar" width={32} height={32} className="mr-[10px]"/>
            {rating.toFixed(1)}
          </strong>
          <p className="text-primary text-lg font-semibold">{category}</p>
          <LinkButton href={link} className="font-bold">View</LinkButton>
        </div>
      </div>
      <div className="movie-card__info">
        <h3 className="font-semibold text-primary mb-[3px]">{title}</h3>
        <p className="text-secondary text-sm">{year}</p>
      </div>
    </div>
  );
};

export default MoviesCard;