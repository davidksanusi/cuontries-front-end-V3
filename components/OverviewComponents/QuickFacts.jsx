import React from 'react'
import { Separator } from '../ui/separator'

function QuickFacts({FactsData}) {
  return (
    <div className='CountryQuickFactsContainer '>

    <div className="TitleContainer  pt-3 pb-10">
    <h1 className="font-bold text-2xl">Quick Facts</h1>
  </div>

  <Separator />
  <div className='factsContainer grid grid-cols-2 max-w-2xl'>

      {
            FactsData.map((f) => (
                 
                  <div key={f.title} className='factItem p-5 space-y-2 flex flex-col items-start justify-start'>
                        <span className='factKey text-[#4A699C]'>{f.title}</span>
                        <p className='factValue'>{f.content}</p>
                        <Separator />

                  </div>
            ))
      }

      </div>



    </div>
  )
}

export default QuickFacts