const ServiceSection = ({ isLeft = false, sectionData }) => {
  // Fallback data in case sectionData is incomplete
  const {
    title = 'Default Title',
    description = 'Default description text.',
    videoUrl = '',
    altText = 'Service video',
  } = sectionData || {};

  return (
    <section className='py-12 md:py-16 font-open-sans bg-gray-50'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12'>
          {/* Text Content - Left Side */}
          {isLeft && (
            <div className='w-full lg:w-1/2 p-6 bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-lg'>
              <h2 className='text-2xl md:text-3xl font-semibold text-zinc-800 mb-4 tracking-tight'>
                {title}
              </h2>
              <p className='text-gray-600 leading-relaxed text-base md:text-lg'>
                {description}
              </p>
            </div>
          )}

          {/* Video Section */}
          <div className='w-full lg:w-1/2 p-6'>
            <div className='relative w-full aspect-video rounded-xl overflow-hidden bg-gradient-to-r from-yellow-400 via-orange-500 to-zinc-800 shadow-lg'>
              {videoUrl ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline // Improves mobile compatibility
                  className='absolute inset-0 w-full h-full object-cover'
                  src={videoUrl}
                  aria-label={altText}
                  onError={(e) => {
                    console.error('Video failed to load:', videoUrl);
                    e.target.style.display = 'none'; // Hide broken video
                  }}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className='absolute inset-0 flex items-center justify-center text-white'>
                  Video unavailable
                </div>
              )}
            </div>
          </div>

          {/* Text Content - Right Side */}
          {!isLeft && (
            <div className='w-full lg:w-1/2 p-6 bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-lg'>
              <h2 className='text-2xl md:text-3xl font-semibold text-zinc-800 mb-4 tracking-tight'>
                {title}
              </h2>
              <p className='text-gray-600 leading-relaxed text-base md:text-lg'>
                {description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
