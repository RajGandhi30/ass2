import React from "react";

const Sect3 = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col px-5 mt-24 w-full font-bold max-w-[1206px] text-zinc-700 max-md:mt-10 max-md:max-w-full m-auto">
        <div className="text-2xl max-md:max-w-full">Accommodations</div>
        <div className="mt-3 text-base font-light max-md:max-w-full">
          A selection of accommodation verified according to quality and design
          criteria
        </div>
        <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-14 mt-6 w-full text-xs uppercase min-h-[310px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c2afcc37663be6bccc4e175ddc39c9eb993b196a720884652cfd9fd6aa27cf85?apiKey=74578851356e4301ad9acd8b3a4ecadc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2afcc37663be6bccc4e175ddc39c9eb993b196a720884652cfd9fd6aa27cf85?apiKey=74578851356e4301ad9acd8b3a4ecadc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2afcc37663be6bccc4e175ddc39c9eb993b196a720884652cfd9fd6aa27cf85?apiKey=74578851356e4301ad9acd8b3a4ecadc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2afcc37663be6bccc4e175ddc39c9eb993b196a720884652cfd9fd6aa27cf85?apiKey=74578851356e4301ad9acd8b3a4ecadc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2afcc37663be6bccc4e175ddc39c9eb993b196a720884652cfd9fd6aa27cf85?apiKey=74578851356e4301ad9acd8b3a4ecadc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2afcc37663be6bccc4e175ddc39c9eb993b196a720884652cfd9fd6aa27cf85?apiKey=74578851356e4301ad9acd8b3a4ecadc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2afcc37663be6bccc4e175ddc39c9eb993b196a720884652cfd9fd6aa27cf85?apiKey=74578851356e4301ad9acd8b3a4ecadc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2afcc37663be6bccc4e175ddc39c9eb993b196a720884652cfd9fd6aa27cf85?apiKey=74578851356e4301ad9acd8b3a4ecadc&"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative flex-col max-w-full w-[200px]">
            {/* <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/04319417f08c3d7738598437ca5b9eab5389dc5e1bc3727e34dd73fcde68fe43?apiKey=74578851356e4301ad9acd8b3a4ecadc&"
              className="self-center max-w-full aspect-square w-[124px]"
            /> */}
            <div className="flex flex-col justify-center mt-8">
              <div className="flex gap-5 px-5 py-4 bg-white rounded">
                <div className="flex-auto">DISCOVER ACCOMMODATION</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/768cfe3807c79b159cc5bd86192a739b7126d248469609a9a8f61aebeef2243b?apiKey=74578851356e4301ad9acd8b3a4ecadc&"
                  className="shrink-0 self-start border border-solid aspect-[0.56] border-zinc-700 stroke-[1px] stroke-zinc-700 w-[5px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sect3;
