import ViewBanner from "@/components/view/ViewBanner";
import ViewMovies from "@/components/view/ViewMovies";
import ViewOverview from "@/components/view/ViewOverview";
import ViewReview from "@/components/view/ViewReview";

const DUMMY_MOVIE = {
  id: 'm1',
  banner: '/images/banner/banner_wonder_woman.png',
  poster: '/images/posters/wonder_woman.png',
  title: 'Wonder Woman 1984',
  year: '2020',
  category: ['Fantasy, Action, Adventure'],
  rating: 7.0,
  vote: 3621,
  status: 'Released',
  language: 'english',
  budget: 200000000,
  production: 'DC Entertainment',
  overview: 'Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.'
}

const DUMMY_REVIEW = [
  {
    id: 'r1',
    avatar: '/images/dummy_pp.jpg',
    username: 'SWITCH.',
    created_at: 'December 18, 2020',
    rating: 7.0,
    review: `It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adore, but it does come across as a bit of a mess, even though the action sequences are breathtaking. If you're a fan of the original film, you'll be more willing to take the ride, but for those more indifferent, it may be a bit of a blander sit. If you can and are planning to watch it, the theatrical experience is the way to go - there is nothing like seeing these stunning sets, fun action scenes and hearing Zimmer's jaw-dropping score like on the big screen. - Chris dos Santos...`
  },
  {
    id: 'r2',
    avatar: '/images/dummy_pp.jpg',
    username: 'msbreviews',
    created_at: 'December 18, 2020',
    rating: 8.0,
    review: `If you enjoy reading my Spoiler-Free reviews, please follow my blog @ https://www.msbreviews.com
    The superhero genre has been growing exponentially during the last decade, so it's bizarre to go through an entire year with only Birds of Prey and The New Mutants instead of literally dozens of films from both Marvel and DC. Thankfully, Warner Bros. decided to release Wonder Woman 1984 before the year's end, but not without a catch. Most people will only have the possibility of watching one of the few blockbusters of 2020 through HBO Max, a streaming service only`
  },
]

const DUMMY_MOVIES = [
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
  }
]

export default function View() {
  return (
    <div className="view-page -mt-[66px]">
      <ViewBanner backgroundImg={DUMMY_MOVIE.banner}/>
      <div className="bg-white flex flex-col">
        <ViewOverview data={DUMMY_MOVIE}/>
        <ViewReview data={DUMMY_REVIEW}/>
      </div>
      <ViewMovies data={DUMMY_MOVIES}/>
    </div>
  )
}