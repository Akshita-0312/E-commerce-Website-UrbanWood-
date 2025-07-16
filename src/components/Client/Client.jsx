import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart } from 'lucide-react';
import SectionTitle from "../SectionTitle/SectionTitle";
import { User } from 'lucide-react';

const Client = () => {
   
    const clientSays=[
        {
           id:1,
           description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
           name:"John Doe",
           position:'CEO,Company'
        },
          {
           id:2,
           description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
           name:"John Doe",
           position:'CEO,Company'
        },
          {
           id:3,
           description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
           name:"John Doe",
           position:'CEO,Company'
        },
          {
           id:4,
           description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
           name:"John Doe",
           position:'CEO,Company'
        },
    ]

         const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000
  };
  return (
    <div className="lg:container mx-auto">
      <SectionTitle
        title="What is client says about us"
        mb="mb-11"
      ></SectionTitle>

      <div className="slider-container features_slider w-full h-full">
        <Slider {...settings}>
            {
                clientSays?.map((client,index)=>(
                    <div key={index} className="p-12 border-[1px] border-[#e1e1e3] rounded-lg">
                        <p className="text-2xl mb-4 text-[#636270] font-inter font-normal client_says_description">{client?.description}</p>
                        <div className="flex items-center">
                            <h4><User size='4rem'/></h4>
                            <div>
                                <h4 className="text-2xl text-[#272343] font-inter font-medium capitalize mb-1.5">{client?.name}</h4>
                                <h4 className="text-base text-[#9a9caa] font-inter font-normal capitalize">{client?.position}</h4>
                            </div>
                        </div>
                    </div>
                ))
            }
          {/* {clientSays.map((client, index) => (
            <div key={index} className="p-4">
              <div className="feature_image mb-4 relative">
                <img
                  className="w-full h-full object-cover"
                  src={client?.image}
                  alt={client?.title}
                ></img>
                {client?.status && (
                  <div className="absolute top-4 left-4 bg-[#007580] text-white px-2 py-3 rounded-lg">
                    <button className="text-sm font-inter font-normal">
                      {client?.status}
                    </button>
                  </div>
                )}
              </div>
              <div className="feature_content">
                <div className="flex items-center justify-between">
                  <h4 className="text-base text-[#007580] capitalize font-inter font-normal mb-4">
                    {" "}
                    {client?.title}
                  </h4>
                  <span className="bg-[#007580] h-[44px] w-[44px] rounded-lg flex items-center justify-center">
                    <ShoppingCart size="1.5rem" color="#fff" />
                  </span>
                </div>
                <p className="text-xl flex fles-center gap-2 text-[#272343] font-semibold font-inter">
                  {client?.Price}
                  {client?.currentPrice && (
                    <span className="text-sm text-[#9a9caa] font-inter font-normal">
                      {client?.currentPrice}
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))} */}
        </Slider>
      </div>
    </div>
  );
};

export default Client;
