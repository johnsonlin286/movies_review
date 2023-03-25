import TitleText from "@/components/TitleText";
import MoviesFilter from "@/components/movies/MoviesFilter";
import MoviesList from "@/components/movies/MoviesList";

const DUMMY_DATA = [
  {
    id: 'm1',
    img: '/images/posters/wonder_woman.png',
    title: 'Wonder Woman 1984',
    year: '2020',
    category: 'Action',
    rating: 7.0,
    link: '/view'
  },
  {
    id: 'm2',
    img: '/images/posters/below_zero.png',
    title: 'Below Zero',
    year: '2021',
    category: 'Action',
    rating: 6.4,
    link: '/view'
  },
  {
    id: 'm3',
    img: '/images/posters/the_little_things.png',
    title: 'The Little Things',
    year: '2021',
    category: 'Action',
    rating: 6.3,
    link: '/view'
  },
  {
    id: 'm4',
    img: '/images/posters/outside_the_wire.png',
    title: 'Outside the Wire',
    year: '2021',
    category: 'Action',
    rating: 6.5,
    link: '/view'
  },
  {
    id: 'm5',
    img: '/images/posters/black_water_abyss.png',
    title: 'Black Water: Abyss',
    year: '2020',
    category: 'Action',
    rating: 5.1,
    link: '/view'
  },
  {
    id: 'm6',
    img: '/images/posters/breach.png',
    title: 'Breach',
    year: '2021',
    category: 'Action',
    rating: 4.6,
    link: '/view'
  },
  {
    id: 'm7',
    img: '/images/posters/soul.png',
    title: 'Soul',
    year: '2020',
    category: 'Action',
    rating: 8.3,
    link: '/view'
  },
  {
    id: 'm8',
    img: '/images/posters/fast_and_furious.png',
    title: 'Fast & Furious Present: Hobss & Shaw',
    year: '2019',
    category: 'Action',
    rating: 6.9,
    link: '/view'
  },
  {
    id: 'm9',
    img: '/images/posters/the_croods.png',
    title: 'The Croods: A New Age',
    year: '2020',
    category: 'Action',
    rating: 7.6,
    link: '/view'
  },
  {
    id: 'm10',
    img: '/images/posters/vanguard.png',
    title: 'Vanguard',
    year: '2020',
    category: 'Action',
    rating: 6.3,
    link: '/view'
  },
  {
    id: 'm11',
    img: '/images/posters/tenet.png',
    title: 'Tenet',
    year: '2020',
    category: 'Action',
    rating: 7.3,
    link: '/view'
  },
  {
    id: 'm12',
    img: '/images/posters/100_percent_wolf.png',
    title: '100% Wolf',
    year: '2020',
    category: 'Action',
    rating: 5.9,
    link: '/view'
  },
]

export default function Movies() {
  return (
    <div className="movies-page movies-container py-14">
      <div className="container">
        <TitleText text="Movies" className="text-4xl"/>
        <div className="movies-page__content flex gap-x-[30px] mt-[60px]">
          <MoviesFilter/>
          <MoviesList data={DUMMY_DATA}/>
        </div>
      </div>
    </div>
  )
}