import { Link, NavLink } from "react-router-dom";
import { customFetch, imgs } from "../utils/utils";
import { useQuery } from "@tanstack/react-query";
import { featuredInt } from "../interface/allinterface";
import { nanoid } from "@reduxjs/toolkit";

function Landing() {
  const url = "/products?featured=true";

  const { isLoading, data: featured } = useQuery({
    queryKey: ["featured"],
    queryFn: async () => {
      const { data }: featuredInt = await customFetch(url);
      return data;
    },
  });

  return (
    <>
      {isLoading ? (
        <span className="loading loading-spinner flex mx-auto mt-7 loading-xs"></span>
      ) : (
        <>
          <div className="grid grid-cols-2 mt-16 justify-between">
            <div>
              <h2 className="text-6xl mt-9 font-bold opacity-65 tracking-wide">
                We are changing the way people shop
              </h2>
              <p className="opacity-75 tracking-wide max-w-[450px] w-full my-8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore repellat explicabo enim soluta temporibus asperiores aut
                obcaecati perferendis porro nobis.
              </p>
              <NavLink
                to={"/products"}
                className="uppercase btn btn-info animation rounded-md bg-blue-600 px-2 py-1  text-white hover:bg-blue-700 md:px-3 md:py-2"
              >
                our products
              </NavLink>
            </div>
            <div className="carousel h-[460px] ml-auto carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
              <div className="carousel-item gap-x-4">
                {imgs.map((img) => (
                  <img
                    className="rounded-md w-80 object-cover"
                    key={img.id}
                    src={img.photo}
                  />
                ))}
              </div>
            </div>
          </div>
          <>
            <p className="my-8 tracking-wide opacity-90 capitalize text-3xl">
              featured products
            </p>
            <hr />
          </>
          <div className="grid grid-cols-3 my-9">
            {featured?.data.map((item) => (
              <Link key={nanoid()} to={`/products/${item?.id}`}>
                <div className="card w-[330px] mx-auto bg-base-100 shadow-lg">
                  <figure className="p-3">
                    <img
                      src={item?.attributes.image}
                      alt="Shoes"
                      className="rounded-xl h-[250px] w-full object-cover"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title capitalize font-medium">
                      {item?.attributes.title}
                    </h2>
                    <p className="">${item?.attributes.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
}
export default Landing;
