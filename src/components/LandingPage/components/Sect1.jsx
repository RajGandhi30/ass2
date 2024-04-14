import * as React from "react";
import { useNavigate } from "react-router-dom";

const Sect1 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex overflow-hidden relative flex-col px-6 pt-3.5 pb-20 w-full min-h-[750px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5723bf7087bf1636c1b6d936865408430449bdbcdcd4b5e6fcdd813f3d9ca64e?apiKey=74578851356e4301ad9acd8b3a4ecadc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5723bf7087bf1636c1b6d936865408430449bdbcdcd4b5e6fcdd813f3d9ca64e?apiKey=74578851356e4301ad9acd8b3a4ecadc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5723bf7087bf1636c1b6d936865408430449bdbcdcd4b5e6fcdd813f3d9ca64e?apiKey=74578851356e4301ad9acd8b3a4ecadc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5723bf7087bf1636c1b6d936865408430449bdbcdcd4b5e6fcdd813f3d9ca64e?apiKey=74578851356e4301ad9acd8b3a4ecadc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5723bf7087bf1636c1b6d936865408430449bdbcdcd4b5e6fcdd813f3d9ca64e?apiKey=74578851356e4301ad9acd8b3a4ecadc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5723bf7087bf1636c1b6d936865408430449bdbcdcd4b5e6fcdd813f3d9ca64e?apiKey=74578851356e4301ad9acd8b3a4ecadc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5723bf7087bf1636c1b6d936865408430449bdbcdcd4b5e6fcdd813f3d9ca64e?apiKey=74578851356e4301ad9acd8b3a4ecadc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5723bf7087bf1636c1b6d936865408430449bdbcdcd4b5e6fcdd813f3d9ca64e?apiKey=74578851356e4301ad9acd8b3a4ecadc&"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative gap-5 justify-between w-full text-sm font-medium text-white max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2faca4eeb439c2714ee2525e101ede3f776b8de0b96e746c8f9a29b6a7ddb719?apiKey=74578851356e4301ad9acd8b3a4ecadc&"
            className="shrink-0 aspect-square w-[34px]"
          />
          <div className="flex gap-5 self-start mt-4 max-md:flex-wrap">
            <div className="grow">French (FR)</div>
            <div>EUR €</div>
            <div>Become a host</div>
            <div className="flex-auto">Create your Experience</div>
            <div>Aide</div>
            <div>Inscription</div>
            <div>Connection</div>
          </div>
        </div>
        <div className="flex relative flex-col justify-center mt-20 mb-2 ml-14 max-w-full w-[391px] max-md:mt-10 max-md:ml-2.5">
          <div className="flex flex-col px-6 pt-10 pb-6 w-full bg-white rounded max-md:px-5">
            <div className="text-3xl font-medium text-zinc-700">
              Book unique accommodations and activities.
            </div>
            <div className="flex flex-col mt-6 whitespace-nowrap">
              <div className="text-xs font-bold uppercase text-zinc-700">
                OR
              </div>
              <div className="flex flex-col justify-center mt-3 text-base text-neutral-400">
                <div className="justify-center items-start px-4 py-5 bg-white rounded-sm border border-solid border-neutral-200 max-md:pr-5">
                  Partout
                </div>
              </div>
            </div>
            <div className="flex gap-0 mt-4 whitespace-nowrap">
              <div className="flex flex-col flex-1">
                <div className="text-xs font-bold uppercase text-zinc-700">
                  Arrival
                </div>
                <div className="flex flex-col justify-center mt-3 text-base text-neutral-400">
                  <div className="justify-center items-start px-4 py-4 bg-white rounded-sm border border-solid border-neutral-200 max-md:pr-5">
                    jj/mm/aaaa
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1">
                <div className="text-xs font-bold uppercase text-zinc-700">
                  Départure
                </div>
                <div className="flex flex-col justify-center mt-3 text-base text-neutral-400">
                  <div className="justify-center items-start px-4 py-4 bg-white rounded-none border border-solid border-neutral-200 max-md:pr-5">
                    jj/mm/aaaa
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-5 whitespace-nowrap">
              <div className="text-xs font-bold uppercase text-zinc-700">
                Travelers
              </div>
              <div className="flex flex-col justify-center mt-3 text-base text-neutral-400">
                <div className="justify-center items-start px-4 py-4 bg-white rounded-sm border border-solid border-neutral-200 max-md:pr-5">
                  Travelers
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center self-end mt-6 max-w-full text-base font-bold text-center text-white whitespace-nowrap w-[146px]">
              <div
                onClick={() => {
                  navigate("/login");
                }}
                className="justify-center px-8 py-5 bg-rose-500 rounded max-md:px-5"
              >
                Book Now!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sect1;
