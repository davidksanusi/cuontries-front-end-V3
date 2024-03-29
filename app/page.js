import Feedback from "@/components/Feedback";
import FooterHome from "@/components/FooterHome";
import HomePageCountriesWrapper from "@/components/HomePageCountriesWrapper";
import { Suspense } from "react";

export default async function Home({searchParams}) {

  // const slug = searchParams.slug;


  // const defaultFilter = {
  //   "filter_params": {
  //     "independent": 0, // 1 - yes 0 - no
  //     "unMember":0,
  //     "landlocked": 0,
  //     "currency": "",
  //     "languages": "",
  //     "continents": "",
  //     "borders": ""
  //   },
  //   "sort_params": {
  //     "sort_category": "",
  //     "sort_order": ""
  //   }
  // }

//   const reqForData = await fetch('https://countries-backend-y8w2.onrender.com/api/filter_names', {
//     method: 'POST',
//     headers: {
//         'Content-type': 'Application/json'
//     },
//     body: JSON.stringify(slug ? {slug: slug} : defaultFilter),
// });

// const initialData = await reqForData.json();


const reqForFilters = await fetch('https://countries-backend-y8w2.onrender.com/api/get_filters', {next:{ revalidate: 100}});
const {data} = await reqForFilters.json();

const initialFilterData = data;


  return (
    <main className="mainContainer w-full  max-w-6xl p-5">
      <div className="TitleContainer mt-5">
        <h1 className="font-bold text-3xl">Countries</h1>
      </div>


      <Suspense>
      <HomePageCountriesWrapper  initialFilterData={initialFilterData}  />
      </Suspense>


      <Feedback />
      <FooterHome />
    </main>
  );
}
