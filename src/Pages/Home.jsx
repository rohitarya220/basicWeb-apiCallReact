import React, { useEffect, useState } from 'react';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/product');
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className='grid grid-cols-3 w-[80vw] mx-auto gap-10 pb-12' >
      {products.map((item, index) => (
        <div key={index} className='bg-gray-100 w-[21vw] min-h-[350px]  rounded-md overflow-hidden ml-4'>
          <img className='hover:scale-105 transition-all w-[100%] h-[200px]' src={item.thumbnail} alt='' />
          <div className='p-2'>
            <h2 className='font-bold uppercase'>{item.title}</h2>
            <p className='text-xs'>{item.description}</p>
            <div className='flex justify-between mt-2 text-center'>
              <span className='font-bold text-gray-600'>{item.price}</span>
              <button className='bg-black hover:bg-slate-300 hover:text-black transition-all border-2 hover:border-black text-white font-bold px-3 rounded-md py-1'>
                Purchase
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
