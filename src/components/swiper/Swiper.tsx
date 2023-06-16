import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles

import 'swiper/swiper-bundle.min.css';
import './swiper.scss'

// importation des images
import swiper1 from '../../assets/swiper/image-1.png'
import swiper2 from '../../assets/swiper/image-2.png'
import swiper3 from '../../assets/swiper/image-3.png'
import swiper4 from '../../assets/swiper/image-4.png'
import swiper5 from '../../assets/swiper/image-5.png'
// importation des images


export default function SwiperComponent() {

  const data=[
    {
      image: swiper1,
      title: "A Trip Through Antiquity"
    },
    {
      image: swiper2,
      title: "Lisbon: A City Guide"
    },
    {
      image: swiper3,
      title: "Rock-A-Bye: The Return of the Night Train"
    },
    {
      image: swiper4,
      title: "72 Hours in Prague"
    },
    {
      image: swiper5,
      title: "A Christmas Coze"
    },
  ]


  return (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
        {data.map((item, index)=>(
          <SwiperSlide key={index} className='slide'>
            <div className='p-2 slide-content '>
              <div className="slide-img">
                <img src={item.image} width={100} alt={item.title}  />
              </div>
              <p>{item.title}</p>
            </div>
          </SwiperSlide>
        ))}
     
      </Swiper>
  )
}
