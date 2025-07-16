import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart } from 'lucide-react';
import SectionTitle from "../SectionTitle/SectionTitle";

const Recent = () => {
  const features = [
    {
      title: 'library stool',
      status: 'New',
      Price: '₹1000',
      image: '/src/assets/Features/product_1.png',
      currentPrice: '₹800',
    },
    {
      title: 'library stool chair',
      status: 'Sales',
      Price: '₹1500',
      image: '/src/assets/Features/product_2.png',
      currentPrice: '₹1000',
    },
    {
      title: 'library stool',
      status: 'Sales',
      Price: '₹1000',
      image: '/src/assets/Features/product_3.png',
      currentPrice: '₹800',
    },
    {
      title: 'library stool',
      status: 'New',
      Price: '₹1000',
      image: '/src/assets/Features/product_4.png',
      currentPrice: '₹800',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };

  return (
    <div className="lg:container mx-auto">
        <SectionTitle title="Recently Added" mb={'mb-11'}/>
      <div className="slider-container features_slider w-full h-full">
        <Slider {...settings}>
          {features.map((feature, index) => (
            <div key={index} className="p-4">
              <div className="feature_image mb-4 relative">
                <img
                  className="w-full h-64 object-cover rounded-lg"
                  src={feature.image}
                  alt={feature.title}
                />
                {feature.status && (
                  <div className="absolute top-4 left-4 bg-[#007580] text-white px-2 py-1 rounded-md text-sm">
                    {feature.status}
                  </div>
                )}
              </div>
              <div className="feature_content">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base text-[#007580] capitalize font-inter font-medium">
                    {feature.title}
                  </h4>
                  <span className="bg-[#007580] h-11 w-11 rounded-lg flex items-center justify-center">
                    <ShoppingCart size="1.5rem" color="#fff" />
                  </span>
                </div>
                <p className="text-xl flex items-center gap-2 text-[#272343] font-semibold font-inter">
                  {feature.currentPrice}
                  <span className="text-sm text-[#9a9caa] font-normal line-through">
                    {feature.Price}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Recent;
