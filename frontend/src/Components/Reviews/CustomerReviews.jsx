import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CustomerReviews = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const reviews = [
    {
      name: "JanDGe D",
      role: "CEO",
      avatar: "https://pagedone.io/asset/uploads/1696229969.png",
      feedback: "The user interface of this pagedone is so intuitive, I was able to start using it without any guidance.",
      rating: 5,
    },
    {
      name: "Ab P.",
      role: "Product Designer",
      avatar: "https://pagedone.io/asset/uploads/1696229994.png",
      feedback: "I used to dread doing my taxes every year, but pagedone has made the process so much simpler and stress-free.",
      rating: 5,
    },
    {
      name: "Vi K.",
      role: "Design Lead",
      avatar: "https://pagedone.io/asset/uploads/1696230027.png",
      feedback: "Pagedone stands out as the most user-friendly and effective solution I've ever used.",
      rating: 5,
    },
    {
        name: "As K.",
        role: "Design Lead",
        avatar: "https://pagedone.io/asset/uploads/1696230027.png",
        feedback: "Pagedone stands out as the most user-friendly and effective solution I've ever used.",
        rating: 5,
      },
      {
        name: "Dv K.",
        role: "Design Lead",
        avatar: "https://pagedone.io/asset/uploads/1696230027.png",
        feedback: "Pagedone stands out as the most user-friendly and effective solution I've ever used.",
        rating: 5,
      },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl font-semibold text-gray-500">Testimonial</h2>
        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-8">
          23k+ Customers gave their{" "}
          <span className="text-indigo-600">Feedback</span>
        </h1>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {reviews.map((review, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-md">
              <div className="flex items-center gap-4">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src={review.avatar}
                  alt={review.name}
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
              <div className="my-4">
                {Array.from({ length: review.rating }, (_, i) => (
                  <span key={i} className="text-yellow-400">&#9733;</span>
                ))}
              </div>
              <p className="text-gray-700">{review.feedback}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CustomerReviews;
