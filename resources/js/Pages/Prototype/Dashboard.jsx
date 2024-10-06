import Authenticated from "@/Layouts/Authenticated/Index";
import Flickity from "react-flickity-component";
import { Head } from "@inertiajs/react";
import FeatureMovie from "@/Components/FeatureMovie";
import MovieCard from "@/Components/MovieCard";

export default function Dashboard() {
  const flickityOptions = {
    cellAlign: "left",
    contain: true,
    groupCells: 1,
    wrapAround: false,
    pageDots: false,
    prevNextButtons: false,
    draggable: ">1",
  };
  return (
    <Authenticated>
      <Head>
        <title>Dashboard</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/flickity@2/dist/flickity.min.css"
        />
      </Head>
      {/* START: Feature */}
      <div>
        <div className="font-semibold text-[22px] text-black mb-4">
          Featured Movies
        </div>
        {/* Movie Thumbnail */}
        <Flickity className="gap-[30px]" options={flickityOptions}>
          {[1, 2, 3, 4].map((i) => (
            <FeatureMovie
              key={i}
              slug="slug-movie"
              name={`Judul Film ${i}`}
              category="Kategori"
              thumbnail="https://picsum.photos/id/1/300/300"
              rating={i}
            />
          ))}
        </Flickity>
      </div>
      {/* END: Feature */}
      {/* START: Browse */}
      <div className="mt-[50px]">
        <div className="font-semibold text-[22px] text-black mb-4">Browse</div>
        <Flickity className="gap-[30px]" options={flickityOptions}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <MovieCard
              key={i}
              slug="slug-movie"
              name={`Judul Film ${i}`}
              category="Kategori"
              thumbnail="https://picsum.photos/id/1/300/300"
            />
          ))}
        </Flickity>
      </div>
      {/* END: Browse */}
    </Authenticated>
  );
}
