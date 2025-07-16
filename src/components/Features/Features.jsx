import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart } from 'lucide-react';

import SectionTitle from "../SectionTitle/SectionTitle"

const Features = ()=>{
    const features = [
        {
            title:'library stool',
            status:'New',
            Price:'₹1000',
            image:'/src/assets/Features/product_1.png',
            currentPrice:'₹800'
        },
         {
            title:'library stool chair',
            status:'Sales',
            Price:'₹1500',
            image:'/src/assets/Features/product_2.png',
            currentPrice:'₹100'
        },
         {
            title:'library stool',
            status:'Sales',
            Price:'₹1000',
            image:'/src/assets/Features/product_3.png',
            currentPrice:'₹800'
        },
         {
            title:'library stool',
            status:'New',
            Price:'₹1000',
            image:'/src/assets/Features/product_4.png',
            currentPrice:'₹800'
        },
    ];
     const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
    return(
         <div>
            <div className="lg:container mx-auto">
                 <SectionTitle title="Featured Products" mb='mb-11'></SectionTitle>
                 <div className="slider-container features_slider w-full h-full">
      <Slider {...settings}>
        {
            features.map((feature,index)=>(
                  <div key={index} className="p-4">
                       <div className="feature_image mb-4 relative">
                            <img className="w-full h-full object-cover" src={feature?.image} alt={feature?.title}></img>
                             {
                                feature?.status &&(
                                    <div className="absolute top-4 left-4 bg-[#007580] text-white px-2 py-3 rounded-lg"> 
                                        <button className="text-sm font-inter font-normal">{feature?.status}</button>
                                    </div>
                                )
                             }
                       </div>
                       <div className="feature_content">
                         <div className="flex items-center justify-between">
                            <h4 className="text-base text-[#007580] capitalize font-inter font-normal mb-4"> {feature?.title}</h4>
                            <span className="bg-[#007580] h-[44px] w-[44px] rounded-lg flex items-center justify-center"><ShoppingCart size="1.5rem" color="#fff"/></span>
                         </div>
                            <p className="text-xl flex fles-center gap-2 text-[#272343] font-semibold font-inter">{feature?.Price}
                                {
                                    feature?.currentPrice && (
                                        <span className="text-sm text-[#9a9caa] font-inter font-normal">{feature?.currentPrice}</span>
                                    )
                                }
                            </p>
                       </div>
                  </div>
            ))
        }
      </Slider>
                 </div>
            </div>
         </div>
    )
}

export default Features