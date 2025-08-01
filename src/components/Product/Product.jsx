import { useState } from "react"
import SectionTitle from "../SectionTitle/SectionTitle"
import { ShoppingCart } from "lucide-react";

const Product = () =>{
   const [active,setActive] = useState({
      id:0,
      product:"all"
   })
    const productTitle=[
         {
            id:0,
            title:"all",
            product:"all"
         },
           {
            id:1,
            title:"newest",
            product:"newest"
         },
           {
            id:2,
            title:"trending",
            product:"trending"
         },
           {
            id:3,
            title:"best_seller",
            product:"best_seller"
         },
    ];

 const products = [
        {
            title:'library stool',
            status:'New',
            price:'₹1000',
            image:'/src/assets/Products/product_1.png',
            currentPrice:'₹800',
            product:'newest'
        },
         {
            title:'library stool chair',
            status:'Sales',
            price:'₹1500',
            image:'/src/assets/Products/product_2.png',
            currentPrice:'₹100',
            product:'newest'
        },
         {
            title:'library stool',
            status:'New',
            price:'₹1000',
            image:'/src/assets/Products/product_3.png',
            currentPrice:'₹800',
            product:'newest'
        },
         {
            title:'library stool',
            status:'Sales',
            price:'₹1000',
            image:'/src/assets/Products/product_4.png',
            currentPrice:'₹800',
            product:'newest'
        },
          {
            title:'library stool',
            status:'Sales',
            price:'₹1000',
            image:'/src/assets/Products/product_5.png',
            currentPrice:'₹800',
            product:'trending'
        },
         {
            title:'library stool chair',
            status:'New',
            price:'₹1500',
            image:'/src/assets/Products/product_6.png',
            currentPrice:'₹100',
            product:'trending'
        },
         {
            title:'library stool',
            status:'Sales',
            price:'₹1000',
            image:'/src/assets/Products/product_7.png',
            currentPrice:'₹800',
            product:'trending'
        },
         {
            title:'library stool',
            status:'Sales',
            price:'₹1000',
            image:'/src/assets/Products/product_8.png',
            currentPrice:'₹800',
            product:'trending'
        },
                {
            title: 'library stool',
            status: 'New',
            price: '$250',
            image: '/src/assets/Products/product_1.png',
            currentPrice: '$200',
            product: 'best_seller',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: '$250',
            image: '/src/assets/Products/product_2.png',
            product: 'best_seller',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: '$250',
            image: '/src/assets/Products/product_3.png',
            product: 'best_seller',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: '$250',
            image: '/src/assets/Products/product_5.png',
            product: 'best_seller',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: '$250',
            image: '/src/assets/Products/product_6.png',
            product: 'featured',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: '$250',
            image: '/src/assets/Products/product_7.png',
            product: 'featured',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: '$250',
            image: '/src/assets/Products/product_8.png',
            product: 'featured',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: '$250',
            image: '/src/assets/Products/product_1.png',
            product: 'featured',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: '$250',
            image: '/src/assets/Products/product_2.png',
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: '$250',
            image: '/src/assets/Products/product_3.png',
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: '$250',
            image: '/src/assets/Products/product_4.png',
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: '$250',
            image: '/src/assets/Products/product_5.png',
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: '$250',
            image: '/src/assets/Products/product_6.png',
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: '$250',
            image: '/src/assets/Products/product_7.png',
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: '$250',
            image: '/src/assets/Products/product_8.png',
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: '$250',
            image: '/src/assets/Products/product_1.png',
            product: 'all',
        },
    ];

    const productFilter = active.product === "all"
  ? products
  : products.filter(product => product.product === active?.product);


    return(
        <div className="lg:container mx-auto">
             <div className="flex flex-col items-center justify-center">
                <SectionTitle title="Our Products" textAlign={'center'} mb={'mb-5'} ></SectionTitle>
               <div className="flex items-center justify-center gap-6 mb-11">
                  {
                     productTitle?.map((title,index)=>(
                        <button key={title?.id} onClick={()=> setActive({
                           id:title?.id,
                           product:title?.product
                        })} className={`text-base font-black uppercase font-inter cursor ${
                        active?.id===index? 'text-[#272343]':'text-[#9a9caa]'}`}
                        >{title?.title}</button>
                     ))
                  }
               </div>
             </div>

             <div className="grid grid-cols-4 items-center gap-6">
                {
                  productFilter?.map((product,index)=>(
                     <div key={index} className="p-4">
                       <div className="feature_image mb-4 relative">
                            <img className="w-full max-h-[312px] rounded-lg h-full object-cover" src={product?.image} alt={product?.title}></img>
                             {
                                product?.status &&(
                                    <div className="absolute top-4 left-4 bg-[#007580] text-white px-2 py-3 rounded-lg"> 
                                        <button className="text-sm font-inter font-normal">{product?.status}</button>
                                    </div>
                                )
                             }
                       </div>
                       <div className="feature_content">
                         <div className="flex items-center justify-between">
                            <h4 className="text-base text-[#007580] capitalize font-inter font-normal mb-4"> {product?.title}</h4>
                            <span className="bg-[#007580] h-[44px] w-[44px] rounded-lg flex items-center justify-center">
                              <ShoppingCart size="1.5rem" color="#fff"/>
                            </span>
                         </div>
                            <p className="text-xl flex fles-center gap-2 text-[#272343] font-semibold font-inter">{product?.price}
                                {
                                    product?.currentPrice && (
                                        <span className="text-sm text-[#9a9caa] font-inter font-normal">{product?.currentPrice}</span>
                                    )
                                }
                            </p>
                       </div>
                  </div>
                  ))
                }
             </div>
        </div>
    );
};

export default Product