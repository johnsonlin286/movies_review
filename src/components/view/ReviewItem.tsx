import Image from "next/image";

import Iconstar from '../../../public/images/iconstar.svg'

type Props = {
  avatar: string,
  username: string,
  created_at: string,
  rating: number,
  review: string
}

const ReviewItem: React.FC<Props> = ({ avatar, username, created_at, rating, review }) => {
  return (
    <div className="review-item flex flex-col bg-[#F9F9F9] rounded-2xl shadow-md py-[20px] px-6">
      <div className="review-item__top flex justify-between">
        <div className="flex items-center">
          <Image src={avatar} alt="user_avatar" width={48} height={48} className="rounded-full"/>
          <div className="flex flex-col justify-center ml-[18px]">
            <strong className="text-sm">{username}</strong>
            <time className="text-xs text-secondary">{created_at}</time>
          </div>
        </div>
        <div className="bg-[#C4C4C447] rounded-md flex p-2">
          <Image src={Iconstar} alt="iconstar" width={17} height={17} className="relative mr-2 -top-2"/>
          <strong className="text-4xl font-semibold">{rating.toFixed(1)}</strong>
        </div>
      </div>
      <div className="review-item__body mt-6">
        <p className="italic text-sm">
          {`${review} `}
          <button className="text-danger underline italic">read the rest</button>
        </p>
      </div>
    </div>
  );
};

export default ReviewItem;