import HomeCarousel from '@/components/home/HomeCarousel'
import HomeMovies from '@/components/home/HomeMovies'

export default function Home() {
  return (
    <div className="home-page">
      <HomeCarousel/>
      <HomeMovies/>
    </div>
  )
}
