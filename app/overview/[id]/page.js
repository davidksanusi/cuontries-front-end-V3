import React from "react";

import Gallery from "@/components/OverviewComponents/Gallery";
import Faq from "@/components/OverviewComponents/Faq";
import ContentPageWrapper from "@/components/OverviewComponents/ContentPageWrapper";

import Link from "next/link";
import dynamic from "next/dynamic";
import Feedback from "@/components/Feedback";

const ExploreCountries = dynamic(
  () => import("@/components/OverviewComponents/ExploreCountries"),
  {
    ssr: false,
  }
);

export const revalidate = 864000; // 10 Days.

export async function generateMetadata({ params }) {
  const req = await fetch(
    "https://countries-backend-y8w2.onrender.com/api/post_country",
    {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify({ code: params.id }),
    }
  );
  const { data } = await req.json();

  return {
    title: data.name,
    description: data.content_pages[0].summary,
  };
}

export async function generateStaticParams() {
  const ids = [
    "CY",
    "ER",
    "LR",
    "BM",
    "VA",
    "CK",
    "SO",
    "ZM",
    "VE",
    "TM",
    "AL",
    "HR",
    "GB",
    "SD",
    "TL",
    "CG",
    "AZ",
    "KE",
    "AS",
    "CI",
    "SN",
    "VN",
    "SV",
    "AF",
    "MF",
    "LV",
    "GT",
    "KW",
    "ST",
    "KG",
    "PL",
    "GU",
    "GH",
    "LT",
    "AM",
    "JE",
    "GD",
    "TJ",
    "ET",
    "EH",
    "MA",
    "PR",
    "CX",
    "NZ",
    "BN",
    "GF",
    "NU",
    "RO",
    "SJ",
    "BY",
    "PA",
    "CM",
    "CZ",
    "BL",
    "GR",
    "ML",
    "MQ",
    "FR",
    "PK",
    "PE",
    "BB",
    "GL",
    "PM",
    "TD",
    "HU",
    "KM",
    "BD",
    "TK",
    "FJ",
    "CN",
    "CO",
    "VG",
    "DZ",
    "MV",
    "MY",
    "KY",
    "ES",
    "IE",
    "EE",
    "PY",
    "UY",
    "ZA",
    "LC",
    "VU",
    "FI",
    "SE",
    "IO",
    "LB",
    "US",
    "CL",
    "NF",
    "MS",
    "AU",
    "BZ",
    "GY",
    "MN",
    "TV",
    "DO",
    "GQ",
    "KN",
    "BO",
    "NP",
    "TF",
    "TW",
    "BJ",
    "BG",
    "MD",
    "IM",
    "BT",
    "KH",
    "AG",
    "HT",
    "CV",
    "GE",
    "BI",
    "BS",
    "MU",
    "LY",
    "MW",
    "MX",
    "SZ",
    "PG",
    "DM",
    "LI",
    "RU",
    "IL",
    "SG",
    "UG",
    "SK",
    "TO",
    "AE",
    "YT",
    "SR",
    "UZ",
    "SA",
    "EG",
    "IT",
    "MG",
    "NC",
    "CA",
    "VI",
    "MH",
    "MR",
    "GM",
    "TT",
    "SC",
    "JP",
    "BR",
    "SY",
    "SH",
    "TZ",
    "AD",
    "IR",
    "TG",
    "MT",
    "KR",
    "WS",
    "DE",
    "NE",
    "BV",
    "JM",
    "NI",
    "GN",
    "AI",
    "AX",
    "BE",
    "PT",
    "DK",
    "PH",
    "WF",
    "AT",
    "GW",
    "MC",
    "NA",
    "UM",
    "CR",
    "BA",
    "MO",
    "MZ",
    "RE",
    "ME",
    "KP",
    "MP",
    "UA",
    "IQ",
    "GS",
    "AO",
    "SL",
    "FM",
    "CU",
    "TC",
    "RS",
    "EC",
    "FO",
    "PS",
    "TR",
    "KI",
    "KZ",
    "GI",
    "IS",
    "PW",
    "QA",
    "CH",
    "PF",
    "PN",
    "JO",
    "MM",
    "TH",
    "BQ",
    "AW",
    "GP",
    "NG",
    "BH",
    "LA",
    "CC",
    "DJ",
    "SB",
    "HM",
    "IN",
    "SM",
    "LU",
    "SX",
    "FK",
    "CF",
    "BW",
    "CW",
    "GG",
    "NO",
    "GA",
    "ZW",
    "LS",
    "SI",
    "AR",
    "BF",
    "YE",
    "CD",
    "OM",
    "ID",
    "NR",
    "RW",
    "MK",
    "NL",
    "TN",
    "SS",
    "HN",
    "VC",
    "LK",
    "HK",
  ];

  return ids.map((id) => ({
    id: id,
  }));
}

async function page({ params }) {
  const req = await fetch(
    "https://countries-backend-y8w2.onrender.com/api/post_country",
    {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify({ code: params.id }),
    }
  );
  const { data } = await req.json();

  return (
    <main className="OverviewMainContainer w-full  max-w-6xl p-5">
      <div className="TitleContainer mt-5">
        <h1 className="font-black leading-10  text-4xl">{data.name}</h1>
      </div>

      <ContentPageWrapper data={data} />

      <Gallery />
      {data.faq.faq_body.length !== 0 && <Faq data={data.faq} />}

      <ExploreCountries />

      <div className="ExploreCategories">
        <div className="TitleContainer mt-5">
          <h1 className="font-bold text-2xl">Explore Categories</h1>
        </div>

        <div className="categories py-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {data?.similar_query?.map((q) => (
            <Link href={`/?slug=${q.title.seo_slug}`} key={q.title.seo_slug}>
              <span className="item p-2 bg-slate-200 font-semibold rounded-xl block text-center">
                {q.title.seo_title}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <Feedback />

      <div className="flex flex-col gap-6 justify-center items-center py-10 px-4 md:px-6 lg:px-24 xl:px-40 w-full">
        <div className="flex justify-between items-center gap-6 flex-wrap w-full">
          <Link href={"/"} className="text-[#4A699C] text-base leading-normal">
            About Us
          </Link>
          <Link href={"/"} className="text-[#4A699C] text-base leading-normal">
            Privacy Policy
          </Link>
          <Link href={"/"} className="text-[#4A699C] text-base leading-normal">
            Terms of Service
          </Link>
        </div>
      </div>
    </main>
  );
}

export default page;
