import React from 'react'
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

function CountryCard({countryName, shorDescription, imageSrc, centerName}) {
  return (
    <div className="countryCard w-fit max-w-[240px] flex items-center justify-center flex-col">
    <div className="w-[200px] imageContainer">
     <AspectRatio ratio={16 / 9}>
    <img src={imageSrc} alt="Image" className="rounded-2xl object-cover cursor-pointer" />
  </AspectRatio>
  </div>
      <div className="countryDetailsContainer flex flex-col items-start mt-2  px-5 w-full  justify-start">
            <h1 className="title font-medium">{countryName}</h1>
            <p className="shortDescription w-[210px] text-slate-500">{shorDescription}</p>

      </div>


    </div>
  )
}

export default CountryCard