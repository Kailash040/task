"use client";
import axios from "axios";

import { useState} from "react";
import Image from "next/image";
import { useQuery } from "react-query";

export default function Home() {
  const [getData, setGetData] = useState([]);
 

  const { data, isLoading, error } = useQuery("data", async () => {
    const response = await axios.get("data.json");
    setGetData(response.data);
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(getData);
  //

  

  return (
    <>
      <main className="flex flex-wrap justify-center p-5 ">
        {Object.values(getData.data).map((item, id) => (
          <div class=" flex-wrap w-96 md:w-48 lg:w-96 p-1" key={id}>
            <Image
              src={item.coverImage}
              alt=""
              className="w-75 h-48 object-cover"
              width={500}
              height={500}
            />
            <div class="px-2 py-2">
              <div class="font-bold text-xl mb-2">{item.title}</div>
            </div>
            <div className="flex justify-between  items-center  px-2 ali">
              <p class="text-gray-700 text-base">{item.discountRate}%</p>

              <p class="text-green-500 text-xl mt-2">
                {}
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </main>
      
    </>
  );
}
