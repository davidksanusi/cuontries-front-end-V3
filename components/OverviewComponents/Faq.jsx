import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { CircleHelp } from 'lucide-react';
  
function Faq({data}) {
  return (
    <div className='CountryFaqContainer'>

    <div className="TitleContainer mt-5 pb-2">
    <h1 className="font-bold text-2xl">{data.faq_title}</h1>
  </div>

      <div className='FQAsItemsContaine '>
      <Accordion type="single" collapsible className="w-full bg-white rounded-xl p-5">
        {data.faq_body.map((q) => (
          <div key={q.question} className='flex items-center space-x-3'>
        <CircleHelp />
    <AccordionItem className="flex-1" value={q.answer}>
      <AccordionTrigger>
        <p>{q.question}</p>
      </AccordionTrigger>
      <AccordionContent>
        {q.answer}
      </AccordionContent>
    </AccordionItem>
        </div>
        ))
        
        }

        

  </Accordion>
      </div>

    </div>
  )
}

export default Faq