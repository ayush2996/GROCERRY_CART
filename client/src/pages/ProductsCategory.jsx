import React from 'react'
import { useAppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';
import { categories } from '../assets/assets';
import ProductCard from '../components/productCard';


const ProductsCategory = () => {
    const {Products} = useAppContext();
    const {category} =useParams ();
    const searchCategory = categories.find((items)=>(items.path.toLowerCase()===category))
    const filteredProducts =Products.filter((product)=>(product.category.toLowerCase()=== category))
  return (
    <div className='mt-16'>
      {searchCategory && (
        <div className='flex flex-col items-end w-max'>
            <p className='text-2xl font-medium'>{searchCategory.text.toUpperCase()}</p>
            <div className='w-16 h-0.5 bg-[#4fbf8b] rounded-full'></div>
            </div>

      )}
      {filteredProducts.length > 0 ? (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-8 mt-6'>
            {filteredProducts.map((product)=>(<ProductCard key={product._id} product={product}/>))}
        </div>

      ) : (
        <div className='flex items-center justify-center h-[60vh]'>
            <p className='text-2xl font-medium text-[#4fbf8b]'>No products found in this Category.</p>
        </div>
      ) }
    </div>
  )
}

export default ProductsCategory
