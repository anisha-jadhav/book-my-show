import React from "react";
import DefaultlayoutHoc from "../layout/Default.layout";

// components
import Poster from "../components/Poster/Poster.Component";
import PlayFilter from "../components/PlayFilters/PlayFilter.Components";

const PlayPage = () => {
  return (
    <>
      <div className="container mx-auto px-4 my-10">
        <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-4">
          <div className="lg:w-3/4 p-4 bg-white rounded">
            <h2 className="text-2xl font-bold mb-4">Plays in Mumbai</h2>
            <div className="flex flex-wrap">
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-ati-aani-sharti-lagu-0-2023-2-28-t-15-39-2.jpg"
                  title="NIYAM V ATI LAGU

"
                  subtitle="Comedy, Drama | Marathi | 2hrs 30mins"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/mobile/media-mobile-charchughi-0-2022-9-2-t-9-33-25.jpg"
                  title="Charchaughi"
                  subtitle="Drama | Marathi | 5yrs + | 2hrs 45mins"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-the-sound-of-music-0-2023-4-7-t-15-15-39.jpg"
                  title="The Sound of Music"
                  subtitle="Broadway, Musical | English | 2hrs 45mins"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-disco-dancer-the-musical-0-2023-4-5-t-6-7-29.jpg"
                  title="Disco Dancer"
                  subtitle="The Musical"
                />
              </div>

              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-amar-photo-studio-0-2022-12-27-t-14-51-7.jpg"
                  title="Amar Photo Studio

"
                  subtitle="Drama | Marathi | 2hrs 30mins"
                />
              </div>

              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-albattya-galbattya-0-2022-9-7-t-12-7-0.jpg"
                  title="Albattya Galbattya
"
                  subtitle="Fantasy | Marathi | 2hrs"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-1/4 p-4 bg-white rounded">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>
            <div>
              <PlayFilter
                title="Date"
                tags={["Today", "Tomorrow", "This weekend"]}
              />
            </div>
            <div>
              <PlayFilter
                title="Language"
                tags={["English", "Hindi", "Tamil"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultlayoutHoc(PlayPage);
