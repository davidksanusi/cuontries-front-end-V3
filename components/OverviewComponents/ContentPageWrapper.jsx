'use client';
import React, { useState } from 'react'
import Overview from '@/components/OverviewComponents/Overview';
import QuickFacts from '@/components/OverviewComponents/QuickFacts';

function ContentPageWrapper({data}) {

    const [selected, setSelected] = useState(data.content_pages[0]);
  return (
    <div>

<div className='SelectionOptions flex flex-wrap  py-2 px-1 mt-5 border-b'>
            {
              data.content_pages.map((i) => (
                <span onClick={() => setSelected(i)} key={i.title} className={`selectionOption mr-4 font-semibold cursor-pointer ${selected.title === i.title ? 'text-[#4A699C]' : ''}  `}>
                    {i.title}
                  </span>
              ))
            }

                 

                  
        </div>

        {
          selected.summary.length !== 0 &&
          <Overview text={selected.summary} />
        }

    
            {
              selected.facts.length !== 0 &&
     <QuickFacts FactsData={selected.facts} />
            }



    </div>
  )
}

export default ContentPageWrapper