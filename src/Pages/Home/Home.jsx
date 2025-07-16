import Banner from "../../components/Banner/Banner.jsx"
import Delivery from "../../components/Delivery/Delivery.jsx";
import Brand from "../../components/Brand/Brand.jsx"
import Features from "../../components/Features/Features.jsx"
import Categories from "../../components/Categories/Categories.jsx";
import Product from "../../components/Product/Product.jsx";
import Client from "../../components/Client/Client.jsx";
import Recent from "../../components/Recent/Recent.jsx";

const Home = () =>{
    return(
           <div>
             <div className="w-full min-h-[850px] bg-[#f0f2f3] flex items-center 
             justify-center rounded-b-3x1">
                <Banner/>
              </div>

              <div className="delivery_component w-full min-h-[#150px]">
                <Delivery/>
              </div>
  
               <div className="brand flex items-center h-[171px] justify-center w-full mt-8 mb-8">
                <Brand/>
               </div>
              
              <div className="features w-full flex items-center justify-center mb-[80px]">
                 <Features/>
              </div>

              <div className="categories w-full flex items-center justify-center mb-[80px]">
                 <Categories/>
              </div>

              <div className="products w-full flex items-center justify-center pb-[80px]">
                <Product/>
              </div>

              <div className="w-full flex items-center justify-center bg-[#f0f2f3] min-h-[589px] pb-[80px]">
                <Client/>
              </div>
              
              <div className="w-full flex items-center justify-center pb-[80px]">
                <Recent/>
              </div>

              </div>
    )
}

export default Home;