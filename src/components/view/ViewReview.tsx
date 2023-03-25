import ReviewItem from "./ReviewItem";

type Reviews = {
  id: string,
  avatar: string,
  username: string,
  created_at: string,
  rating: number,
  review: string
}

type Props = {
  data?: Reviews[]
}

const ViewReview: React.FC<Props> = ({ data }) => {
  return (
    <div className="view-review mb-[43px] ">
      <div className="container">
        <h3 className="text-sm text-danger font-semibold mb-[25px]">REVIEWS</h3>
        <ul className="view-review__list flex justify-between gap-8">
          {
            data && data.length > 0 && data.map(review => (
              <li key={review.id} className="flex-grow">
                <ReviewItem avatar={review.avatar} username={review.username} created_at={review.created_at} rating={review.rating} review={review.review}/>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default ViewReview