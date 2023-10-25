"use client";

import useFetch from "@/app/hooks/useFetch";
import useSortReleases from "@/app/hooks/useSortReleases";
import useSortArtistNames from "@/app/hooks/useFormatArtistNames";
import Link from "next/link";
import type Release from "@/app/types/Release";
import type ResponseWrapper from "@/app/types/ResponseWrapper";

export default function Hero() {
  const { apiData, error } = useFetch<ResponseWrapper<Release[]>>(
    "http://localhost:1337/api/releases?populate=*"
  );

  if (apiData && apiData.data[0].artists) {
    useSortReleases(apiData.data);
    const backgroundImage = apiData.data[0].coverArt?.url;
    const formattedArtistNames = useSortArtistNames(apiData.data[0].artists);
    const title = apiData.data[0].title;

    return (
      <Link href={`http://localhost:3000/releases/${apiData.data[0].slug}`}>
        <div
          // TODO: div needs something else other than a pointer on hover
          className="h-[25rem] md:h-[30rem] xl:h-[40rem] px-4 bg-slate-950 flex"
          style={{
            // gradient copied from spotify
            // https://www.reddit.com/r/webdev/comments/lq7k11/how_spotify_makes_text_on_images_readable/
            background: `linear-gradient(0deg, #00000088 30%, #ffffff44 100%), url(http://localhost:1337${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <div className="self-end container mx-auto">
            <h2 className="text-slate-100 wrap">{formattedArtistNames}</h2>
            <h1 className="text-slate-100 font-bold uppercase pb-8 pt-1 xl:pt-2">
              {title}
            </h1>
          </div>
        </div>
      </Link>
    );
  }

  if (error) {
    return (
      <div className="h-[25rem] md:h-[30rem] xl:h-[40rem] px-4 bg-slate-950 flex">
        <div className="self-end container mx-auto">
          <h2 className="text-slate-100 font-normal wrap">Sorry!</h2>
          <h1 className="text-slate-100 font-bold uppercase pb-8 pt-1 xl:pt-2">
            Unable to fetch latest release
          </h1>
        </div>
      </div>
    );
  }

  // attempt at a skeleton...
  return (
    <div className="h-[25rem] md:h-[30rem] xl:h-[40rem] px-4 bg-slate-950 flex">
      <div className="self-end container mx-auto">
        <h2 className="text-slate-100 font-normal wrap">Artist name(s)</h2>
        <h1 className="text-slate-100 font-bold uppercase pb-8 pt-1 xl:pt-2">
          Release title
        </h1>
      </div>
    </div>
  );
}
