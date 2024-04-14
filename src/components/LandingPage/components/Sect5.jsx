import * as React from "react";
const listings = [
  {
    id: 1,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2face5b578ef2e12648a119adc4a7fc10010a25ac5d47fb2f19ba04ca13f51c5?apiKey=74578851356e4301ad9acd8b3a4ecadc&",
    location: "Toledo",
    rating: 4.98,
    price: "From 577€/person - 3 days",
  },
  {
    id: 2,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ba0e1262b4f0ed5f2eb5b3f18c062b013471841734d4f3fc0aeb709c5133d8a8?apiKey=74578851356e4301ad9acd8b3a4ecadc&",
    location: "Mesa",
    rating: 4.98,
    price: "From 577€/person - 3 days",
  },
  {
    id: 3,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2f2e4c356f6c32d4f0608dba8f66f2ccd72f181ef7fa61c5909601e8fdf30cf4?apiKey=74578851356e4301ad9acd8b3a4ecadc&",
    location: "Utica",
    rating: 4.98,
    price: "From 577€/person - 3 days",
  },
  {
    id: 5,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ab8a8bd2a1f60e7df97f8ffa0570f3070dfa4972a5c3877c951f2c045e8e672f?apiKey=74578851356e4301ad9acd8b3a4ecadc&",
    location: "Toledo",
    rating: 4.98,
    price: "From 577€/person - 3 days",
  },
  {
    id: 6,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d2b07d3edfe095c42c3077d25ccae3044a6fca7afc3c20cdec168256bd2f3355?apiKey=74578851356e4301ad9acd8b3a4ecadc&",
    location: "Mesa",
    rating: 4.98,
    price: "From 577€/person - 3 days",
  },
  {
    id: 7,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/817b7e3203866d8665a798178d5aef2012396dce34117c0bdf47b72b69920e44?apiKey=74578851356e4301ad9acd8b3a4ecadc&",
    location: "Utica",
    rating: 4.98,
    price: "From 577€/person - 3 days",
  },
];
const ListingCard = ({ listing }) => (
  <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
    {" "}
    <div className="flex flex-col grow max-md:mt-4">
      {" "}
      <img
        loading="lazy"
        src={listing.image}
        alt={`Listing in ${listing.location}`}
        className="w-full aspect-[1.45]"
      />{" "}
      <div className="flex gap-5 justify-between mt-2 w-full whitespace-nowrap">
        {" "}
        <div className="flex gap-3.5">
          {" "}
          <div className="flex flex-col justify-center text-xs font-bold uppercase text-zinc-700">
            {" "}
            <div className="justify-center px-2 py-3 rounded-sm border border-solid border-zinc-700">
              {" "}
              Superhost{" "}
            </div>{" "}
          </div>{" "}
          <div className="my-auto text-xs text-neutral-500">
            {listing.location}
          </div>{" "}
        </div>{" "}
        <div className="flex gap-1.5 my-auto text-xs font-medium text-right text-zinc-700">
          {" "}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea4816783b2b4336af9e60795e605129490d79f40eef170ed019d9d51c077aa3?apiKey=74578851356e4301ad9acd8b3a4ecadc&"
            alt=""
            className="shrink-0 self-start w-2 aspect-[1.14] fill-rose-500"
          />{" "}
          <div>{listing.rating}</div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="mt-2.5 text-sm leading-5 text-zinc-700">
        {listing.price}
      </div>{" "}
    </div>{" "}
  </div>
);
const ListingsGrid = () => (
  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
    {" "}
    {listings.map((listing) => (
      <ListingCard key={listing.id} listing={listing} />
    ))}{" "}
  </div>
);
function Sect5() {
  return (
    <div className="flex flex-row">
      <section className="flex flex-col px-5 py-0.5 mt-32 w-full max-w-[1208px] max-md:mt-10 max-md:max-w-full m-auto">
        {" "}
        <h2 className="text-2xl font-bold text-zinc-700 max-md:max-w-full">
          {" "}
          Accommodations around the world{" "}
        </h2>{" "}
        <div className="mt-14 max-md:mt-10 max-md:max-w-full">
          {" "}
          <ListingsGrid />{" "}
        </div>{" "}
        <div className="mt-9 max-md:max-w-full">
          {" "}
          <ListingsGrid />{" "}
        </div>{" "}
      </section>
    </div>
  );
}

export default Sect5;
