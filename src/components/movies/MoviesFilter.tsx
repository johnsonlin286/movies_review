import Checkbox from "../Checkbox";
import SelectMenu from "../SelectMenu";

const filterSort = ['Popularity Ascending', 'Popularity Descending', 'Release Date Ascending', 'Release Date Descending', 'Rating Ascending', 'Rating Descending']
const filterGenre = ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'History', 'Horror'];

const MoviesFilter = () => {
  return (
    <div className="movies-filter flex-shrink-0 w-60">
      <ul className="w-full rounded-lg bg-gradient-to-b from-[#0E1723] to-dark text-primary">
        <li className="py-5 px-[18px] border-b border-white/[0.07]">
          <strong className="font-semibold">
            Sort Result By
          </strong>
        </li>
        <li className="py-5 px-[18px] border-b border-white/[0.07]">
          <SelectMenu options={filterSort}/>
        </li>
        <li className="py-5 px-[18px] border-b border-white/[0.07]">
          <strong className="font-semibold">
            Genres
          </strong>
        </li>
        <li className="py-5 px-[18px]">
          {
            filterGenre.map((genre, i) => (
              <Checkbox key={i} id={genre.toLocaleLowerCase()} label={genre} checked={genre === 'Action' ? true : false} className="mb-4 last:mb-0"/>
            ))
          }
        </li>
      </ul>
    </div>
  );
};

export default MoviesFilter;