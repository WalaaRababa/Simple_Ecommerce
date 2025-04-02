import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../reducer/cartReducer";

const ListOfProduct = () => {
  const dispatch = useDispatch();
  const plants = [
    {
      id: 1,
      name: "Snake Plant",
      details:
        "Low-maintenance indoor plant that purifies air and thrives in low light.",
      image:
        "https://images.pexels.com/photos/4505163/pexels-photo-4505163.jpeg",
      price: 15,
      category: "Indoor",
    },
    {
      id: 2,
      name: "Monstera Deliciosa",
      details:
        "Popular tropical plant with large, split leaves, perfect for indoor decor.",
      image:
        "https://images.pexels.com/photos/3076899/pexels-photo-3076899.jpeg",
      price: 29,
      category: "Indoor",
    },
    {
      id: 3,
      name: "Aloe Vera",
      details:
        "A healing succulent plant known for its soothing gel, easy to care for.",
      image:
        "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 12,
      category: "Succulent",
    },
    {
      id: 4,
      name: "Fiddle Leaf Fig",
      details:
        "Tall and elegant plant with violin-shaped leaves, ideal for living rooms.",
      image:
        "https://images.pexels.com/photos/5825347/pexels-photo-5825347.jpeg",
      price: 45,
      category: "Indoor",
    },
    {
      id: 5,
      name: "Spider Plant",
      details:
        "Hardy indoor plant with arching green and white leaves, great for beginners.",
      image:
        "https://images.pexels.com/photos/4505160/pexels-photo-4505160.jpeg",
      price: 10,
      category: "Indoor",
    },
    {
      id: 6,
      name: "Peace Lily",
      details:
        "Beautiful flowering plant that improves indoor air quality and thrives in shade.",
      image:
        "https://images.pexels.com/photos/7429815/pexels-photo-7429815.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      price: 18,
      category: "Indoor",
    },
    {
      id: 7,
      name: "Pothos",
      details: "Fast-growing vine plant, ideal for hanging baskets or shelves.",
      image: "https://images.pexels.com/photos/708649/pexels-photo-708649.jpeg",
      price: 9,
      category: "Indoor",
    },
    {
      id: 8,
      name: "Bamboo Palm",
      details:
        "An elegant palm plant that adds a tropical touch to indoor spaces.",
      image:
        "https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg",
      price: 33,
      category: "Tropical",
    },
    {
      id: 9,
      name: "Succulent Mix",
      details:
        "A set of small, easy-care succulents perfect for desks and shelves.",
      image: "https://images.pexels.com/photos/691371/pexels-photo-691371.jpeg",
      price: 14,
      category: "Succulent",
    },
    {
      id: 10,
      name: "Lavender",
      details:
        "A fragrant herb plant known for its calming scent and medicinal uses.",
      image:
        "https://images.pexels.com/photos/16398470/pexels-photo-16398470/free-photo-of-plants-on-windowsill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: 22,
      category: "Herb",
    },
  ];

  return (
    <>
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header class="text-center">
          <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
            Product Collection
          </h2>

          <p class="mx-auto mt-4 max-w-md text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam, officia dolor
            fugit natus?
          </p>
        </header>
      </div>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        {plants.map((plant, index) => {
          return (
            <div
              key={index}
              className="relative block rounded-tr-3xl border border-gray-100"
            >
              <span className="absolute -top-px -right-px rounded-tr-3xl rounded-bl-3xl bg-rose-600 px-6 py-4 font-medium tracking-widest text-white uppercase">
                Save 10%
              </span>

              <img
                src={plant.image}
                alt=""
                className="h-80 w-full rounded-tr-3xl object-cover"
              />

              <div className="p-4 text-center">
                <strong className="text-xl font-medium text-gray-900">
                  {" "}
                  {plant.name}
                </strong>

                <p className="mt-2 text-pretty text-gray-700">
                  {plant.details}
                </p>
                <p class="text-gray-700">
                  ${plant.price}
                  <span class="text-gray-400 line-through">
                    {" "}
                    ${plant.price * 0.1 + plant.price}
                  </span>
                </p>
                <button
                  onClick={() => {
                    dispatch(addItemToCart(plant));
                  }}
                  className="mt-4 block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium tracking-widest text-white uppercase transition-colors hover:bg-white hover:text-indigo-900"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ListOfProduct;
