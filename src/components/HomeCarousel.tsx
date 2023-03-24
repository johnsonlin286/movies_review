import Slider from "react-slick";

import CarouselItem from "./CarouselItem";

import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";

const DUMMY_DATA = [
  {
    id: 'c1',
    img: '/images/posters/space_sweepers.png',
    title: 'Space Sweepers',
    year: '2021',
    category: 'Sci-Fi',
    rating: 7.3,
    desc: `When the crew of a space junk collector ship called The Victory discovers a humanoid robot named Dorothy that's known to be a weapon of mass destruction, they get involved in a risky business deal which puts their lives at stake.`
  },
  {
    id: 'c2',
    img: '/images/posters/to_all_the_boys.png',
    title: 'To All the Boys: Always and Forever',
    year: '2021',
    category: 'Drama',
    rating: 8.1,
    desc: `Senior year of high school takes center stage as Lara Jean returns from a family trip to Korea and considers her college plans — with and without Peter.`
  },
  {
    id: 'c3',
    img: '/images/posters/space_sweepers.png',
    title: 'News of the World',
    year: '2021',
    category: 'Drama',
    rating: 7.2,
    desc: `A Texan traveling across the wild West bringing the news of the world to local townspeople, agrees to help rescue a young girl who was kidnapped.`
  }
]

const HomeCarousel = () => {
  const settings = {
    className: "center",
    arrows: false,
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "500px",
    slidesToShow: 1,
    speed: 500
  };
  return (
    <div className="home-carousel pt-[55px] pb-[47px]">
      <Slider {...settings}>
        {
          DUMMY_DATA.map(item => (
            <div key={item.id} className="px-[18px]">
              <CarouselItem img={item.img} title={item.title} year={item.year} category={item.category} rating={item.rating} desc={item.desc}/>
            </div>
          ))
        }
      </Slider>
    </div>
  );
}

export default HomeCarousel;