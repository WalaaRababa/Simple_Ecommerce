import React from 'react'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
  const navigate=useNavigate();
  return (
    <section className='mt-10'>
    <div className="bg-gray-50 dark:bg-gray-900 mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="bg-gray-50 dark:bg-gray-900 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-2xl font-bold  text-gray-900 md:text-3xl  dark:text-white">
            Paradise Nursery: Your One-Stop 
      <strong className="text-teal-600"> One-Stop </strong>
      E-Commerce Destination for Plants
            </h2>
  
            <p className="hidden dark:text-white text-gray-900 sm:mt-4 sm:block">
            Paradise Nursery is a leading e-commerce platform for plant lovers, offering a wide selection of indoor and outdoor plants, succulents, flowers, and gardening essentials. With a user-friendly website, customers can easily browse, filter, and purchase plants suited to their needs. Committed to sustainability, the nursery uses eco-friendly practices and biodegradable packaging. Fast and reliable delivery ensures plants arrive fresh and healthy. Whether for home, office, or gifting, Paradise Nursery makes plant shopping effortless, bringing nature closer to you with just a click. 🌿
            </p>
  
            <div className="mt-4 md:mt-8">
            <button onClick={()=>navigate('/shop')}
          class="inline-block rounded-full bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-teal-600 focus:ring-3 focus:outline-hidden"
        >
          Get Started
        </button>
            </div>
          </div>
        </div>
  
        <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
          <img
            alt=""
            src="https://images.pexels.com/photos/31347753/pexels-photo-31347753/free-photo-of-charming-outdoor-plant-and-flower-market-display.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="h-40 w-full object-cover sm:h-56 md:h-full"
          />
  
          <img
            alt=""
            src="https://images.pexels.com/photos/29085774/pexels-photo-29085774/free-photo-of-young-woman-in-garden-holding-sunflower-pot.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="h-40 w-full object-cover sm:h-56 md:h-full"
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Banner