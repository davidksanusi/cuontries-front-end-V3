import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Skeleton } from './ui/skeleton';

import {
  useQuery,
} from '@tanstack/react-query';
function SelectOptionsContainer({updateFilter, initialFilterData, updateSortParams}) {

    async function fetchData(){
      const req = await fetch('https://countries-backend-y8w2.onrender.com/api/get_filters', {cache: 'force-cache', next: {revalidate: 1800}}); // Revalidate every 30 mins.
      
      const {data} = await req.json();
      return data;
  }

  const {data, loading} = useQuery({
    queryKey: ['filters'],
    queryFn: async () => await fetchData(),
    initialData: initialFilterData,
    refetchOnWindowFocus: false,
  })

    
    

  return (
    <div className="selectionContainers mt-3 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2">

      {
        (loading) && (
        [...Array(7)].map((d, i) => (
          <Skeleton key={i} className="w-[155px] h-[40px] bg-slate-200  rounded-3xl" />          
        ))
        )
      }
        {
            data?.filter_options?.map((option) => (
<Select onValueChange={(changedValue) => {
  changedValue === option.filter_title ?
  updateFilter(option.filter_key, '') : updateFilter(option.filter_key, changedValue)
}} key={option.filter_key}>
<SelectTrigger className="w-[155px] bg-slate-50  rounded-3xl">
  <SelectValue placeholder={option.filter_title} />
</SelectTrigger>
<SelectContent>
  <SelectGroup>
    {/* <SelectLabel className="text-start">{option.filter_title}</SelectLabel> */}
    <SelectItem value={option.filter_title}>{option.filter_title}</SelectItem>

    {
        option.filter_params.map((op, key) => (
          <SelectItem key={op.param_key} value={op.param_value}>{op.param_value}</SelectItem>

        ))
    }
  </SelectGroup>
</SelectContent>
</Select> 

            ))
        }
<Select
onValueChange={(changedValue) => {
  changedValue === 'sortBy' ?
  updateSortParams('sort_category', '') : updateSortParams('sort_category', changedValue)
}}
>
<SelectTrigger className="w-[155px] bg-slate-50  rounded-3xl">
  <SelectValue placeholder={'Sort By'} />
</SelectTrigger>
<SelectContent>
  <SelectGroup>
    <SelectItem value={'sortBy'}>Sort By</SelectItem>

    {
        data.sort_options.map((op, key) => (
          <SelectItem key={op.sort_key} value={op.sort_key}>{op.sort_title}</SelectItem>

        ))
    } 
  </SelectGroup>
</SelectContent>
</Select> 


<Select
onValueChange={(changedValue) => {
  changedValue === 'sortOrder' ?
  updateSortParams('sort_order', '') : updateSortParams('sort_order', changedValue)
}}
>
<SelectTrigger className="w-[155px] bg-slate-50  rounded-3xl">
  <SelectValue placeholder={'Sort Order'} />
</SelectTrigger>
<SelectContent>
  <SelectGroup>
    {/* <SelectLabel className="text-start">{option.filter_title}</SelectLabel> */}
    <SelectItem value={'sortOrder'}>Sort Order</SelectItem>

    {
        data.sort_order.map((op, key) => (
          <SelectItem key={op.sort_order_key} value={op.sort_order_key}>{op.sort_order_title}</SelectItem>

        ))
    } 
  </SelectGroup>
</SelectContent>
</Select> 




    </div>
  )
}

export default SelectOptionsContainer