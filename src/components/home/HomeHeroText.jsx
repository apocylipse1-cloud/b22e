import React from 'react';

const HomeHeroText = () => {
  // Split text into words for staggered animation
  const createWordSpans = (text) => {
    return text.split(' ').map((word, index) => (
      <span key={index} className="word-reveal inline-block mr-2 sm:mr-3 lg:mr-4">
        {word}
      </span>
    ))
  }

  return (
    <div className="font-[font1] text-center relative depth-4 px-4 flex-1 flex items-center justify-center hero-fg-layer">
      <div className="w-full">
        <div className="text-fluid-8xl justify-center flex items-center uppercase leading-[0.9] text-layer-3 mb-2 sm:mb-0 font-bold text-shimmer">
          {createWordSpans('You do the work')}
        </div>
        <div className="text-fluid-8xl justify-center flex items-center uppercase leading-[0.9] text-layer-3 flex-wrap justify-center mb-2 sm:mb-0 font-bold">
          <span className="word-reveal inline-block mr-2 sm:mr-3 lg:mr-4 text-shimmer">we</span>
          <div className="h-[8vw] w-[20vw] sm:h-[7vw] sm:w-[16vw] rounded-full overflow-hidden mx-2 sm:mx-2 glass-luxury glow-luxury flex-shrink-0 my-1 sm:my-0 hover-lift">
            <video
              className="h-full w-full object-cover hero-inline-video ios-video-fix"
              autoPlay
              playsInline
              loop
              muted
              preload="auto"
              webkit-playsinline="true"
              onLoadedData={(e) => {
                // Force play on iOS after video loads
                const video = e.target;
                const playPromise = video.play();
                if (playPromise !== undefined) {
                  playPromise.catch(error => {
                    console.warn('Inline video autoplay failed:', error);
                  });
                }
              }}
            >
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </div>
          <span className="word-reveal inline-block mr-2 sm:mr-3 lg:mr-4 text-shimmer">do the</span>
        </div>
        <div className="text-fluid-8xl justify-center flex items-center uppercase leading-[0.9] text-layer-3 font-bold">
          {createWordSpans('stitches')}
        </div>
        
        {/* Enhanced CTA button with gradient border */}
        <div className="mt-8 sm:mt-12 lg:mt-16 fade-up">
          <div className="btn-gradient-border inline-block hover-lift">
            <div className="btn-content">
              <span className="font-[font2] text-fluid-lg uppercase tracking-wider text-white">
                Discover Our Work
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroText;