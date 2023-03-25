import Image from "next/image";

import Iconstar from '../../../public/images/iconstar.svg'

type Props = {
  data: {
    id: string,
    banner: string,
    poster: string,
    title: string,
    year: string,
    category: string[],
    rating: number,
    vote: number,
    status: string,
    language: string,
    budget: number,
    production: string,
    overview: string
  }
}

const ViewOverview: React.FC<Props> = ({ data }) => {
  return (
    <div className="view-overview relative h-[120px] mb-[43px]">
      <div className="absolute w-full h-[80px] bg-black/50 -top-20"/>
      <div className="container relative flex -translate-y-[210px]">
        <Image src={data.poster} alt={data.title} width="0" height="0" sizes="100vw" className="view-overview__poster w-auto h-[330px]"/>
        <div className="view-overview__content w-full text-primary ml-[33px]">
          <div className="pt-[6px] mb-8">
            <p className="text-lg">{data.year}</p>
            <h3 className="text-4xl font-semibold mb-1">{data.title}</h3>
            <p className="text-sm">{data.category.join(', ')}</p>
          </div>
          <div className="flex items-center h-[80px] py-5">
            <ul className="flex items-center">
              <li className="pr-8 border-r border-white/20">
                <div className="flex items-center">
                  <div className="flex items-center text-4xl mr-3">
                    <Image src={Iconstar} alt="iconstar" width={32} height={32} className="mr-4"/>
                    <strong>{data.rating.toFixed(1)}</strong>
                  </div>
                  <div className="flex flex-col justify-center text-left text-xs uppercase">
                    <p className="text-secondary">User Score</p>
                    <p className="font-medium">{data.vote} Votes</p>
                  </div>
                </div>
              </li>
              <li className="px-8 border-r border-white/20">
                <div className="flex flex-col justify-center text-left text-xs uppercase">
                  <p className="text-secondary">Status</p>
                  <p className="font-medium">{data.status}</p>
                </div>
              </li>
              <li className="px-8 border-r border-white/20">
                <div className="flex flex-col justify-center text-left text-xs uppercase">
                  <p className="text-secondary">language</p>
                  <p className="font-medium">{data.language}</p>
                </div>
              </li>
              <li className="px-8 border-r border-white/20">
                <div className="flex flex-col justify-center text-left text-xs uppercase">
                  <p className="text-secondary">budget</p>
                  <p className="font-medium">${Intl.NumberFormat().format(data.budget)}.00</p>
                </div>
              </li>
              <li className="pl-8">
                <div className="flex flex-col justify-center text-left text-xs uppercase">
                  <p className="text-secondary">production</p>
                  <p className="font-medium">{data.production}</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <h3 className="text-sm text-danger font-semibold mb-2">OVERVIEW</h3>
            <p className="max-w-[526px] text-sm text-dark leading-7">
              {data.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOverview;