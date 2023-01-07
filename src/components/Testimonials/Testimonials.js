import "./Testimonials.css";
import AVR1 from "../../assets/avatar1.jpg";
import AVR2 from "../../assets/avatar2.jpg";
import AVR3 from "../../assets/avatar3.jpg";
import AVR4 from "../../assets/avatar4.jpg";
// import required modules
import { Pagination } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const data = [
  {
    avatar: AVR1,
    nm: "Tina Snow",
    review:
      "lorem ipsum odor amet, consectureur adipiscing elit. Ac purus in massa egestas mollis varius; dignissim mattis henderit dolor eros enim, nisi ligula ornare.",
  },
  {
    avatar: AVR2,
    nm: "Shatta Wale",
    review:
      "lorem ipsum odor amet, consectureur adipiscing elit. Ac purus in massa egestas mollis varius; dignissim mattis henderit dolor eros enim, nisi ligula ornare.",
  },
  {
    avatar: AVR3,
    nm: "Kate Moss",
    review:
      "lorem ipsum odor amet, consectureur adipiscing elit. Ac purus in massa egestas mollis varius; dignissim mattis henderit dolor eros enim, nisi ligula ornare.",
  },
  {
    avatar: AVR4,
    nm: "Maximilian Smith",
    review:
      "lorem ipsum odor amet, consectureur adipiscing elit. Ac purus in massa egestas mollis varius; dignissim mattis henderit dolor eros enim, nisi ligula ornare.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container container__testimonials"
        slidesPerView={1}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar-1" />
              </div>
              <h5>{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
