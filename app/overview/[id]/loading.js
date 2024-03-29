import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (

    <main className="OverviewMainContainer w-full  max-w-6xl p-5">
    <div className="TitleContainer mt-5">
      <h1 className="font-black leading-10  text-4xl">
      <Skeleton className="h-4 w-[250px] bg-slate-300" />
      </h1>
    </div>

    <div className='SelectionOptions flex space-x-5 py-2 px-1 mt-5 border-b'>
    <Skeleton className="h-4 w-[550px] bg-slate-300" />

      </div>

      <div className='CountryOverviewPage  mt-6'>
  <div className="TitleContainer mt-5">
  <h1 className="font-bold text-2xl">        <Skeleton className="h-4 w-[150px] bg-slate-300" />
</h1>
</div>

    <p className='overViewTextContainer py-5 font-normal text-base leading-7 max-w-5xl'>
    <Skeleton className="h-4 w-2/3 bg-slate-300" />
    <Skeleton className="h-4 w-2/4 mt-2 bg-slate-300" />
    <Skeleton className="h-4 w-2/5 mt-2 bg-slate-300" />
    <Skeleton className="h-4 w-2/3 mt-2 bg-slate-300" />

    </p>


  </div>

  <p className='overViewTextContainer py-5 font-normal text-base leading-7 max-w-5xl'>
    <Skeleton className="h-4 w-2/3 bg-slate-300" />
    <Skeleton className="h-4 w-2/4 mt-2 bg-slate-300" />
    <Skeleton className="h-4 w-2/5 mt-2 bg-slate-300" />
    <Skeleton className="h-4 w-2/3 mt-2 bg-slate-300" />

    </p>


    <p className='overViewTextContainer py-5 font-normal text-base leading-7 max-w-5xl'>
    <Skeleton className="h-4 w-2/3 bg-slate-300" />
    <Skeleton className="h-4 w-2/4 mt-2 bg-slate-300" />
    <Skeleton className="h-4 w-2/5 mt-2 bg-slate-300" />
    <Skeleton className="h-4 w-2/3 mt-2 bg-slate-300" />

    </p>

    <p className='overViewTextContainer py-5 font-normal text-base leading-7 max-w-5xl'>
    <Skeleton className="h-4 w-2/3 bg-slate-300" />
    <Skeleton className="h-4 w-2/4 mt-2 bg-slate-300" />
    <Skeleton className="h-4 w-2/5 mt-2 bg-slate-300" />
    <Skeleton className="h-4 w-2/3 mt-2 bg-slate-300" />

    </p>

    <p className='overViewTextContainer py-5 font-normal text-base leading-7 max-w-5xl'>
    <Skeleton className="h-4 w-2/3 bg-slate-300" />
    <Skeleton className="h-4 w-2/4 mt-2 bg-slate-300" />
    <Skeleton className="h-4 w-2/5 mt-2 bg-slate-300" />
    <Skeleton className="h-4 w-2/3 mt-2 bg-slate-300" />

    </p>
  </main>
    )
  }