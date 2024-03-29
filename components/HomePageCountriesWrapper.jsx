'use client';
import React, { useEffect, useState } from 'react'
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from 'next/link'
import SelectOptionsContainer from './SelectOptionsContainer';
import { LoaderCircle } from 'lucide-react';
import {
  useQuery,
  useQueryClient
} from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation'

function HomePageCountriesWrapper({initialFilterData}) {
  const queryClient = useQueryClient();

  const searchParam = useSearchParams();
  let slug = searchParam.get('slug');

    const [filter, setFilter] = useState({
        "filter_params": {
          "independent": 0, // 1 - yes 0 - no
          "unMember":0,
          "landlocked": 0,
          "currency": "",
          "languages": "",
          "continents": "",
          "borders": ""
        },
        "sort_params": {
          "sort_category": "",
          "sort_order": ""
        }
      })

      const updateFilter = (filterKey, value) => {

        setFilter(prevFilter => ({
          ...prevFilter,
          filter_params: {
            ...prevFilter.filter_params,
            [filterKey]: value === 'Yes' ? 1 : value === 'No' ? 0 : value
          }
        }));
      };

      const updateSortParams = (key, value) => {
        setFilter(prevFilter => ({
            ...prevFilter,
            sort_params: {
              ...prevFilter.sort_params,
                [key]: value
            }
        }));

    };

     

      async function fetchData(){
          

        const req = await fetch('https://countries-backend-y8w2.onrender.com/api/filter_names', {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(slug ? {slug: slug} : filter),
        },
        );
        
        const HomeCountriesData = await req.json();
        return HomeCountriesData;
    }
  

  const {data, loading, isFetching} = useQuery({
    queryKey: ['coutries-home'],
    queryFn: async () => await fetchData(),
    refetchOnWindowFocus: false,
    })


   useEffect(() => {
    slug = undefined;
    if(isFetching){
      return;
    }
     queryClient.refetchQueries({
       queryKey: ['coutries-home'],
      });

      }, [filter])

  return (
    <section className='relative'>
<SelectOptionsContainer initialFilterData={initialFilterData} updateFilter={updateFilter} updateSortParams={updateSortParams} />
          
    <div className="CountriesContainer w-full mt-8 p-2 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">

            {
                (loading || isFetching) ? (
                    <LoaderCircle height={50} width={50} className='animate-spin absolute -transform-x-[50%] left-[50%]' />
                    ) : data?.data?.countries?.map((country) => (
                    <Link key={country.code} href={`/overview/${country.code}`}>
                    <div  className="countryCard flex items-center justify-center space-x-3 p-3">
                      <div className="w-[120px] imageContainer">
                        <AspectRatio ratio={`${16 / 9}`}>
                          <img src={country.country_flag_png} alt={`Flag of ${country.name}`} className="w-full h-full rounded-xl object-cover cursor-pointer" />
                        </AspectRatio>
                      </div>
                      <div className="countryDetailsContainer flex flex-col self-start px-3 w-[200px]">
                        <h1 className="title font-normal">{country.name}</h1>
                        {
                          (filter.sort_params.sort_category !== '' && !isFetching) ? (
                            <h1 className="title text-xs text-slate-400">{filter.sort_params.sort_category}: {country[`${filter.sort_params.sort_category}`] ? country[`${filter.sort_params.sort_category}`] : 'N/A'}</h1>
                          ) : (
                            <>
                            {
                              (!isFetching && country.population) && (

                                <h1 className="title text-xs text-slate-400">Population: {country.population}</h1>
                              )
                            }
                            </>
                          )
                        }

                      </div>
                    </div>
                    </Link>
                  ))
            }


 
        </div>
    </section>
  )
}

export default HomePageCountriesWrapper