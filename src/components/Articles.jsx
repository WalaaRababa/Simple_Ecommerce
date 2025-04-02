import React from 'react'

const Articles = () => {
    const plantArticles = [
        {
          name: "The Ultimate Guide to Indoor Plant Care",
          image: "https://images.pexels.com/photos/7048421/pexels-photo-7048421.jpeg?auto=compress&cs=tinysrgb&w=600",
          details: "Learn the basics of indoor plant care, including watering schedules, sunlight requirements, and common issues faced by houseplants."
        },
        {
          name: "Top 5 Low-Maintenance Plants for Beginners",
          image: "https://images.pexels.com/photos/5529587/pexels-photo-5529587.jpeg?auto=compress&cs=tinysrgb&w=600",
          details: "Discover five easy-to-care-for houseplants that thrive with minimal effort, perfect for beginners or busy plant lovers."
        },
        {
          name: "How to Prevent and Treat Common Houseplant Diseases",
          image: "https://images.pexels.com/photos/7655921/pexels-photo-7655921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          details: "Identify and treat common plant diseases such as root rot, powdery mildew, and pests to keep your indoor garden healthy."
        },
        {
          name: "The Best Lighting Conditions for Indoor Plants",
          image: "https://images.pexels.com/photos/9412437/pexels-photo-9412437.jpeg?auto=compress&cs=tinysrgb&w=600",
          details: "Understand how different lighting conditions affect plant growth and how to position your plants for optimal health."
        },
        {
          name: "The Benefits of Having Plants in Your Home",
          image: "https://images.pexels.com/photos/7513031/pexels-photo-7513031.jpeg?auto=compress&cs=tinysrgb&w=600",
          details: "Explore the numerous benefits of indoor plants, from air purification to stress reduction and improved well-being."
        }
      ];
      
  return (
   <>
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header class="text-center">
          <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
          Nursery Paradise Blog
          </h2>

          <p class="mx-auto mt-4 max-w-md text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam, officia dolor
            fugit natus?
          </p>
        </header>
      </div>
   <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
    {plantArticles.map((article,index)=>
    {
        return <article key={index}  className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs">
        <img
          alt=""
          src={article.image}
          className="h-56 w-full object-cover"
        />
      
        <div className="p-4 sm:p-6">
          <a href="#">
            <h3 className="text-lg font-medium text-gray-900">
             {article.name}
            </h3>
          </a>
      
          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
         {article.details}
          </p>
      
          <a href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
            Find out more
      
            <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
              &rarr;
            </span>
          </a>
        </div>
      </article>
    })}
   </div>
   </>
  )
}

export default Articles