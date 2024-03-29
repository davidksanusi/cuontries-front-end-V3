import React from 'react'

function Overview({text}) {
  return (
    <div className='CountryOverviewPage  mt-6'>
    <div className="TitleContainer mt-5">
    <h1 className="font-bold text-2xl">Overview</h1>
  </div>

      <p className='overViewTextContainer py-5 font-normal text-base leading-7 max-w-5xl'>
      {text}
      </p>


    </div>
  )
}

export default Overview