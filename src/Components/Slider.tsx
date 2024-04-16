import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { FC } from 'react';

interface Iprops{
  images:string[]
}


const Slider:FC<Iprops>=({images})=> {
 console.log(images);
 
  

  return (
    <Swiper
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    className="mySwiper"
    >
      <div className="product__left">
        {images?.map((image,index)=>(
          <SwiperSlide key={index}>
            <img className='product__img' src={image} alt="" />
          </SwiperSlide>
        ))}
      </div>
      ...

    </Swiper>
  )
}

export default Slider