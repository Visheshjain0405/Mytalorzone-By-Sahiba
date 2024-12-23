import React from 'react';

const OccasionCard = ({ image, title }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg">
      {/* Image with Gradient Overlay */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-[450px] object-cover transform transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>
      {/* Title with Styled Background */}
      <div className="absolute bottom-0 left-0 right-0 text-center py-3">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
    </div>
  );
};

const ShopByOccasion = () => {
  const occasions = [
    {
      title: 'Mehendi Magic',
      image: 'https://i.pinimg.com/736x/cf/97/35/cf97351bdccb6841c1ad204fc4dee731.jpg',
    },
    {
      title: 'Haldi Hues',
      image: 'https://i.pinimg.com/736x/4a/07/bb/4a07bb7df934df5fd7f0f4216a56efe6.jpg',
    },
    {
      title: 'Sangeet Night',
      image: 'https://i.pinimg.com/736x/16/0f/c5/160fc52d104da0b3595639f76cb61bc0.jpg',
    },
    {
      title: 'Shaadi Styles',
      image: 'https://i.pinimg.com/736x/01/4b/45/014b45c6d4a1d5085d53d48ceafd81f6.jpg',
    },
  ];

  return (
    <div className="py-8 px-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Shop by Occasion</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {occasions.map((occasion, index) => (
          <OccasionCard key={index} image={occasion.image} title={occasion.title} />
        ))}
      </div>
    </div>
  );
};

export default ShopByOccasion;
