import HomeCarousel from '@/components/HomeCarousel'
import HomeMovies from '@/components/HomeMovies'

export default function Home() {
  return (
    <div className="home-page">
      <HomeCarousel/>
      <HomeMovies/>
    </div>
  )
}
