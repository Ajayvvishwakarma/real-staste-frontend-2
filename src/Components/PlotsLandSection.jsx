import React, { useEffect, useRef, useState } from "react";

const sampleArticles = [
  { id: 1, title: "Tips for buying a plot in India", date: "Feb 16, 2022", thumb: "/realstateproject/image.png" },
  { id: 2, title: "Tips for buying commercial land in India", date: "Feb 17, 2022", thumb: "/realstateproject/image1.png" },
  { id: 3, title: "Know all about industrial plots", date: "Feb 24, 2022", thumb: "/realstateproject/image2.png" },
  { id: 4, title: "Legal tips for buying agricultural land", date: "Feb 23, 2022", thumb: "/realstateproject/image3.png" },
  { id: 5, title: "Checklist: due diligence for plots", date: "Mar 02, 2022", thumb: "/realstateproject/image4.png" },
  { id: 6, title: "Understanding land price trends", date: "Mar 10, 2022", thumb: "/realstateproject/image5.png" },
  { id: 7, title: "Infrastructure impact on plot value", date: "Mar 18, 2022", thumb: "/realstateproject/image6.png" },
  { id: 8, title: "How to verify RERA for land projects", date: "Mar 22, 2022", thumb: "/realstateproject/image7.png" },
  { id: 9, title: "Finance options for buying a plot", date: "Apr 01, 2022", thumb: "/realstateproject/project1.jpg" },
  { id: 10, title: "Converting agricultural to residential land", date: "Apr 08, 2022", thumb: "/realstateproject/project2.jpg" },
  { id: 11, title: "Plot layout & survey guide", date: "Apr 15, 2022", thumb: "/realstateproject/project3.jpg" },
  { id: 12, title: "Checklist for builders buying land", date: "Apr 22, 2022", thumb: "/realstateproject/project4.jpg" },
];

const PlotsLandSection = () => {
  const sliderRef = useRef(null);
  const viewportRef = useRef(null);
  const [pageCount, setPageCount] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const articles = sampleArticles;

  // responsive items per page
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w < 640) setItemsPerPage(1); // mobile
      else if (w < 1024) setItemsPerPage(2); // tablet
      else setItemsPerPage(4); // desktop
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  useEffect(() => {
    const pages = Math.max(1, Math.ceil(articles.length / itemsPerPage));
    setPageCount(pages);
    setCurrentPage((p) => Math.min(p, pages - 1));
  }, [itemsPerPage, articles.length]);

  // autoplay
  useEffect(() => {
    if (isHovering) return;
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % pageCount);
    }, 4000);
    return () => clearInterval(timer);
  }, [pageCount, isHovering]);

  useEffect(() => {
    const vp = viewportRef.current;
    const slider = sliderRef.current;
    if (!vp || !slider) return;
    const width = vp.clientWidth;
    slider.style.transition = "transform 500ms ease-in-out";
    slider.style.transform = `translateX(-${currentPage * width}px)`;
  }, [currentPage, itemsPerPage]);

  const goNext = () => setCurrentPage((p) => (p + 1) % pageCount);
  const goPrev = () => setCurrentPage((p) => (p - 1 + pageCount) % pageCount);

  const pages = [];
  for (let i = 0; i < pageCount; i++) {
    pages.push(articles.slice(i * itemsPerPage, i * itemsPerPage + itemsPerPage));
  }

  const imgOnError = (e) => {
    e.currentTarget.src =
      "https://via.placeholder.com/150x100?text=No+Image";
  };

  return (
    <section className="w-full bg-gradient-to-br from-green-50 via-white to-gray-50 py-4 sm:py-12 lg:py-4 xl:py-4 relative">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        {/* HERO ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* LEFT IMAGE */}
          <div className="w-full order-2 lg:order-1">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="\image copy 6.png"
                alt="plots and land"
                onError={imgOnError}
                className="w-full h-[180px] sm:h-[240px] md:h-[280px] lg:h-[320px] xl:h-[360px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="w-full flex flex-col items-start justify-center px-2 sm:px-4 md:px-6 text-center lg:text-left order-1 lg:order-2">
            <p className="text-xs sm:text-sm text-green-600 font-semibold uppercase tracking-wide">
              BUY PLOTS/LAND
            </p>
            <h2 className="mt-1 sm:mt-3 text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold text-slate-900 leading-tight mb-1 sm:mb-4">
              Residential & Commercial <br className="hidden sm:block" /> Plots/Land
            </h2>
            <p className="text-sm sm:text-base lg:text-base text-slate-600 max-w-lg mx-auto lg:mx-0 mb-2 sm:mb-6">
              Explore Residential, Agricultural, Industrial and Commercial Plots/Land
            </p>
            <div className="w-full sm:w-auto">
              <a
                href="#explore"
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-6 lg:px-8 py-2 sm:py-3.5 lg:py-4 rounded-lg text-white font-semibold bg-gradient-to-r from-green-600 to-black hover:from-green-700 hover:to-gray-900 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Explore Plots/Land
              </a>
            </div>
          </div>
        </div>

        {/* Separate card container */}
        <div className="relative -mt-8 sm:-mt-12 lg:-mt-10 xl:-mt-10 mb-8 sm:mb-12 lg:mb-10 xl:mb-20">
          {/* CARD SLIDER */}
          <div className="mx-4 sm:mx-8 lg:mx-12 xl:xl-20">
            <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-xl hover:shadow-2xl border border-slate-100 overflow-hidden transition-shadow duration-300">
              <div className="p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
                {/* LEFT TITLE */}
                <div className="w-full lg:flex-[0_0_25%] xl:flex-[0_0_26%]">
                  <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-slate-900 leading-tight mb-2 sm:mb-3">
                    Best articles on <br className="hidden sm:block" />
                    <span className="font-bold text-green-600">Plots/Land</span>
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-slate-600">
                    Read from Beginners check-list to Pro Tips
                  </p>
                </div>

                {/* SLIDER */}
                <div className="w-full lg:flex-[0_0_75%] xl:flex-[0_0_74%] relative px-8 sm:px-10 lg:px-12">
                  <div
                    className="rounded-lg border border-slate-100 bg-gradient-to-br from-gray-50 to-white overflow-hidden hover:border-slate-200 transition-colors duration-300"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <div ref={viewportRef} className="overflow-hidden">
                      <div
                        ref={sliderRef}
                        className="flex"
                        style={{ width: `${pageCount * 100}%` }}
                      >
                        {pages.map((pageItems, pIndex) => (
                          <div
                            key={pIndex}
                            className="flex-shrink-0"
                            style={{ width: `${100 / pageCount}%` }}
                          >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 lg:gap-4 p-3 sm:p-4 lg:p-5">
                              {pageItems.map((art) => (
                                <article key={art.id} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 cursor-pointer group">
                                  <div className="w-10 h-6 sm:w-12 sm:h-8 lg:w-14 lg:h-10 xl:w-16 xl:h-12 rounded-md overflow-hidden border border-slate-100 group-hover:border-green-200 transition-colors duration-300 flex-shrink-0">
                                    <img
                                      src={art.thumb}
                                      alt={art.title}
                                      onError={imgOnError}
                                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h4 className="text-xs sm:text-sm lg:text-base font-semibold text-slate-900 leading-tight line-clamp-2 group-hover:text-green-700 transition-colors duration-300">
                                      {art.title}
                                    </h4>
                                    <p className="text-xs text-slate-500 mt-1 sm:mt-2">{art.date}</p>
                                  </div>
                                </article>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Page indicator dots */}
                    <div className="absolute bottom-4 sm:bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 mb-4 sm:gap-2">
                      {Array.from({ length: pageCount }, (_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentPage(i)}
                          className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                            i === currentPage 
                              ? 'bg-green-600 w-4 sm:w-6' 
                              : 'bg-slate-300 hover:bg-slate-400'
                          }`}
                          aria-label={`Go to page ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Arrows outside slider */}
                  <button
                    onClick={goPrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-white border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 z-30"
                    aria-label="Previous articles"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={goNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-white border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 z-30"
                    aria-label="Next articles"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Read more */}
                  <div className="mt-2 sm:mt-3 px-2 sm:px-4 text-center lg:text-right">
                    <a href="#articles" className="text-xs sm:text-sm lg:text-base text-green-600 hover:text-green-700 font-medium hover:underline transition-all duration-300 inline-flex items-center gap-1 sm:gap-2">
                      Read realty news, guides & articles 
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlotsLandSection;
