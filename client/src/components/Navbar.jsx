import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';
import axios from 'axios';
import toast from 'react-hot-toast';

const Navbar = () => {
    
  const [open, setOpen] = useState();
  const {user ,setUser ,setShowUserLogin,navigate , setSearchQuery, searchQuery,getCartCount , axios} =useAppContext();
  const logout = async () => {
  try {
    const { data } = await axios.get('/api/user/logout', {
      withCredentials: true, // important if you're using cookies
    });

    if (data.success) {
      toast.success(data.message);
      setUser(null);
      navigate('/');
    } else {
      toast.error(data.message);
    }

  } catch (error) {
    toast.error(error.response?.data?.message || error.message);
  }
};

  useEffect(()=>{
    if(searchQuery.length > 0){
      navigate("/products")
    }
  },[searchQuery])
   
  const handleLinkClick = () => setOpen(false);

  return (
    <nav className="bg-white text-black flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 relative transition-all">
      {/* Logo */}
      <NavLink to="/"  onClick={()=> setOpen(false)}>
        <img className="h-9" src={assets.logo} alt="logo" />
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <NavLink to="/" className="hover:text-[#4fbf8b]">Home</NavLink>
        <NavLink to="/products" className="hover:text-[#4fbf8b]">All Product</NavLink>
        <NavLink to="/contact" className="hover:text-[#4fbf8b]">Contact</NavLink>

        {/* Search */}
        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input onChange={(e)=>(setSearchQuery(e.target.value))}
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
         
           <img src={assets.search_icon} alt="search bar" className='w-4 h-4'/>
       
        </div>

        {/* Cart Icon */}
        <div className="relative cursor-pointer" onClick={()=>navigate("/cart")}>
          <img src={assets.nav_cart_icon} alt='cart' className='w-6 opacity-80' />
          <button className="absolute -top-2 -right-3 text-xs text-black bg-[#4fbf8b] w-[18px] h-[18px] rounded-full">
            {getCartCount()}
          </button>
        </div>

        {/* Login Button */}
        {!user ? (
        <button onClick={ ()=>setShowUserLogin(true)} className="cursor-pointer px-8 py-2 bg-[#4fbf8b] hover:bg-[#44ae7c] transition text-black rounded-full">
          Login
        </button>)
        :(
            <div className='relative group'>
              <img  src={assets.profile_icon} className='w-10' alt="" />
              <ul className= 'hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-grey-200 py-2.5 w-30 rounded-md text-sm z-40'>
                <li className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer' onClick={()=>navigate("my-orders")}>My Orders</li>
                <li className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer' onClick={logout}>Logout</li>
              </ul>
            </div>
        )}
      </div>
      <div className='flex items-center gap-6 sm:hidden'>
         {/* Cart Icon */}
        <div className="relative cursor-pointer" onClick={()=>navigate("/cart")}>
          <img src={assets.nav_cart_icon} alt='cart' className='w-6 opacity-80' />
          <button className="absolute -top-2 -right-3 text-xs text-black bg-[#4fbf8b] w-[18px] h-[18px] rounded-full">
            {getCartCount()}
          </button>
        </div>
        
         {/* Hamburger Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Menu"
        className="sm:hidden"
      >
        <img src={assets.menu_icon} alt='menu'/>
       
      </button>

      </div>

     

      {/* Mobile Menu */}
      {open &&(
        <div
        className={`${
          open ? 'flex' : 'hidden'
        } absolute top-[60px] left-0 w-full bg-white text-black shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
      >
        <NavLink to="/" className="block" onClick={()=>setOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/products" className="block" onClick={()=>setOpen(false)}>
          All Product
        </NavLink>
        {user &&
        <NavLink to="/" className="block" onClick={()=>setOpen(false)}>
          My Order
        </NavLink>
        }
        {!user ? (<button onClick={()=>{
            setOpen(false);
            setShowUserLogin(true);
        }}
        className="cursor-pointer px-6 py-2 mt-2 bg-[#4fbf8b] hover:bg-[#44ae7c] transition text-black rounded-full text-sm">
          Login
        </button>) :
        (
            <button onClick={logout}
            className="cursor-pointer px-6 py-2 mt-2 bg-[#4fbf8b] hover:bg-[#44ae7c] transition text-black rounded-full text-sm">
          Logout
        </button>
        )
        }
        
      </div>)}
    </nav>
  );
};

export default Navbar;
