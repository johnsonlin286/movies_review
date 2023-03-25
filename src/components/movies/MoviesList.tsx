import Button from "../Button";
import MoviesCard from "../MovieCard";

type Movie = {
  id: string,
  img: string,
  title: string,
  year: string,
  category: string,
  rating: number,
  link: string
}

type Props = {
  data: Movie[];
}

const MoviesList: React.FC<Props> = ({ data }) => {
  return (
    <div className="movies-list flex flex-col items-center">
      <div className="flex flex-wrap gap-y-7 gap-x-[16px]">
        {
          data && data.length > 0 && data.map(movie => (
            <MoviesCard
              key={movie.id} poster={movie.img} title={movie.title} year={movie.year} category={movie.category} rating={movie.rating} link={movie.link}
            />
          ))
        }
      </div>
      <div className="mt-20">
        <Button>Load More</Button>
      </div>
    </div>
  );
};

export default MoviesList;