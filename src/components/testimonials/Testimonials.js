import React from 'react'
import Isaac from '../../assets/isaac.jpg'
import Duro from '../../assets/duro.jpg'
import Rose from '../../assets/rose.jpg'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'



import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'



const data = [
    {
        avatar: Duro,
        name: "Durosinmi Victory",
        review: " As a graphic designer working with Daniel has been a wholehearted privilege, I look forward to working more with him  "
    },
    {
        avatar: Rose,
        name: "Reuben Rose",
        review: "He is a lifesaver! I came to him with an important project and a tight turnaround and not only did he come through, he rocked it."
    },
    {
        avatar: Isaac,
        name: "Isaac Ugwu",
        review: "Extremely good service, easy to approach and relate with. I am satisfied with my decision for choosing Daniel"
    },
   /* {
       avatar: Dan,
        name: "Olivia Stackhouse",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione odio tempora labore necessitatibus qui quis possimus assumenda." 
    }*/
]

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"   modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}

      pagination={{ clickable: true }} >
                {
                    data.map(({name, review, avatar}, index) =>{
                        return(
                              <SwiperSlide className="testimonial" key={index}>  
                    <div className="client__avatar">
                    <img src={avatar} alt="Dan" />
                    </div>
                    <h5 className="client__name">{name}</h5>
                    <small className="client__review">{ review}</small>
                </SwiperSlide>
                        )
                    })
                }
               
            </Swiper>
        </section>
    )
}

export default Testimonials
