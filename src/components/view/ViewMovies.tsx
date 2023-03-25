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
  data: Movie[]
}

const ViewMovies: React.FC<Props> = ({ data }) => {
  return (
    <div className="view-movies my-[50px]">
      <div className="container">
        <h3 className="text-sm text-primary font-semibold mb-[25px]">RECOMMENDATION MOVIES</h3>
        <div className="view-movies__list flex flex-wrap gap-y-9 justify-between">
          {
            data && data.map(movie => (
              <MoviesCard
                key={movie.id}
                poster={movie.img}
                title={movie.title}
                year={movie.year}
                category={movie.category}
                rating={movie.rating}
                link={movie.link}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default ViewMovies