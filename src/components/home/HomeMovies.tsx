import TitleText from "../TitleText";
import HomeFilter from "./HomeFilter";
import MoviesCard from "../MovieCard";

const DUMMY_DATA = [
  {
    id: 'm1',
    img: '/images/posters/wonder_woman.png',
    title: 'Wonder Woman 1984',
    year: '2020',
    category: 'Action',
    rating: 7.0,
    link: '/'
  },
  {
    id: 'm2',
    img: '/images/posters/below_zero.png',
    title: 'Below Zero',
    year: '2021',
    category: 'Action',
    rating: 6.4,
    link: '/'
  },
  {
    id: 'm3',
    img: '/images/posters/the_little_things.png',
    title: 'The Little Things',
    year: '2021',
    category: 'Action',
    rating: 6.3,
    link: '/'
  },
  {
    id: 'm4',
    img: '/images/posters/outside_the_wire.png',
    title: 'Outside the Wire',
    year: '2021',
    category: 'Action',
    rating: 6.5,
    link: '/'
  },
  {
    id: 'm5',
    img: '/images/posters/black_water_abyss.png',
    title: 'Black Water: Abyss',
    year: '2020',
    category: 'Action',
    rating: 5.1,
    link: '/'
  },
  {
    id: 'm6',
    img: '/images/posters/breach.png',
    title: 'Breach',
    year: '2021',
    category: 'Action',
    rating: 4.6,
    link: '/'
  },
  {
    id: 'm7',
    img: '/images/posters/soul.png',
    title: 'Soul',
    year: '2020',
    category: 'Action',
    rating: 8.3,
    link: '/'
  },
  {
    id: 'm8',
    img: '/images/posters/fast_and_furious.png',
    title: 'Fast & Furious Present: Hobss & Shaw',
    year: '2019',
    category: 'Action',
    rating: 6.9,
    link: '/'
  },
  {
    id: 'm9',
    img: '/images/posters/the_croods.png',
    title: 'The Croods: A New Age',
    year: '2020',
    category: 'Action',
    rating: 7.6,
    link: '/'
  },
  {
    id: 'm10',
    img: '/images/posters/vanguard.png',
    title: 'Vanguard',
    year: '2020',
    category: 'Action',
    rating: 6.3,
    link: '/'
  },
]

const HomeMovies = () => {
  return (
    <div className="home-movies movies-container pt-[90px] pb-[115px]">
      <div className="container">
        <div className="flex justify-between items-center text-primary mb-11">
          <TitleText text="Discover Movies" className="text-2xl"/>
          <HomeFilter/>
        </div>
        <div className="flex flex-wrap justify-between gap-y-9">
          {
            DUMMY_DATA.map(data => (
              <MoviesCard key={data.id} poster={data.img} title={data.title} year={data.year} category={data.category} rating={data.rating} link={data.link}/>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default HomeMovies;