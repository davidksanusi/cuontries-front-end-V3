'use client';
import React from 'react'
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Link from 'next/link'
import {
  useQuery,
} from '@tanstack/react-query';
function ExploreCountries() {

    async function fetchData(){
      const reqRandomCountries = await fetch('https://countries-backend-y8w2.onrender.com/api/get_random_countries', {cache: 'no-store'});
      
      const {random_countries} =  await reqRandomCountries.json();
      return random_countries;
  }


const {data, loading} = useQuery({
  queryKey: ['coutries-random'],
  queryFn: async () => await fetchData(),  
})



  return (
    <div className='ExploreCountries'>
      {
        !loading && data && (
          <>

          <div className="TitleContainer mt-5">
      <h1 className="font-bold text-2xl">Explore Countries</h1>
      </div>

<div className="CountriesContainer mt-8 p-2 grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5">

{
data.map((country, index) => (
      <Link href={`/overview/${country.code}`} key={index} >
    <div className="countryCard w-fit max-w-[240px] flex flex-col items-center justify-center">
    <div className="w-[200px] imageContainer">
      <AspectRatio ratio={`${16 / 9}`}>
        <img src={country.flag_png} alt={`Flag of ${country.name}`} className="w-full h-full rounded-2xl object-cover cursor-pointer" />
      </AspectRatio>
    </div>
    <div className="countryDetailsContainer flex flex-col items-center px-5 w-full justify-center">
      <h1 className="title font-bold">{country.name}</h1>
    </div>
  </div>
      </Link>

  ))
}

  </div>
</>

        )
      }
      



    </div>

  )
}

export default ExploreCountries