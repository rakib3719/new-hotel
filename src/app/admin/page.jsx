const Page = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Highlighted Stats Section */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center hover:bg-yellow-500 hover:text-gray-900 transition-all">
          <h2 className="text-4xl font-bold">50+</h2>
          <p className="mt-2 text-gray-300">Luxury Suites Worldwide</p>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center hover:bg-yellow-500 hover:text-gray-900 transition-all">
          <h2 className="text-4xl font-bold">500+</h2>
          <p className="mt-2 text-gray-300">Satisfied Guests Monthly</p>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center hover:bg-yellow-500 hover:text-gray-900 transition-all">
          <h2 className="text-xl italic">
            {"Hospitality is simply an opportunity to show love and care."}
          </h2>
          <p className="text-gray-400 mt-2">— Unknown</p>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">
          Welcome to Hotel Seven View
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Experience luxury and elegance at Hotel Seven View, where every stay
          feels like home. Nestled in the heart of stunning destinations, we
          combine world-class services with breathtaking views for a truly
          unforgettable experience.
        </p>
        <div className="mt-8">
          <button className="px-6 py-3 bg-yellow-500 text-gray-900 font-bold rounded-lg shadow-md hover:bg-yellow-600 transition-all">
            Explore More
          </button>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-10">
            What Our Guests Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <p className="italic text-gray-300">
             {   `"The view from my room was absolutely breathtaking! The staff
                went above and beyond to ensure our stay was perfect."`}
              </p>
              <p className="mt-4 text-yellow-400 font-semibold">— Sarah K.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <p className="italic text-gray-300">
                {`"I’ve stayed in many hotels, but Hotel Seven View stands out for
                its exceptional service and attention to detail. Highly
                recommended!"`}
              </p>
              <p className="mt-4 text-yellow-400 font-semibold">— James M.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;


