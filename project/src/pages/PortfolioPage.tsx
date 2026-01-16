import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const PortfolioPage = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [ref2, isVisible2] = useIntersectionObserver({ threshold: 0.1 });

  const portfolioItems = [
    {
      title: 'London Gatwick Airport',
      category: 'Transport',
      location: 'United Kingdom',
      description: 'Major international airport serving London and the South East',
      image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Edinburgh Airport',
      category: 'Transport',
      location: 'United Kingdom',
      description: 'Scotland\'s busiest airport and gateway to the capital',
      image: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Renewable Energy Portfolio',
      category: 'Energy',
      location: 'United States',
      description: 'Portfolio of wind and solar generation assets across North America',
      image: 'https://images.pexels.com/photos/9800036/pexels-photo-9800036.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Associated British Ports',
      category: 'Transport',
      location: 'United Kingdom',
      description: 'UK\'s largest port operator managing 21 ports',
      image: 'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Data Center Portfolio',
      category: 'Digital Infrastructure',
      location: 'Europe',
      description: 'Network of hyperscale data centers across Europe',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Fiber Optic Network',
      category: 'Digital Infrastructure',
      location: 'North America',
      description: 'Extensive fiber optic telecommunications infrastructure',
      image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-32 px-6 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight tracking-tight mb-8" style={{ fontFamily: 'Georgia, serif' }}>
            PORTFOLIO
          </h1>
          <p className="text-xl text-white leading-relaxed max-w-3xl">
            A diversified portfolio of essential infrastructure assets spanning multiple sectors and geographies, delivering stable returns and essential services to communities worldwide.
          </p>
        </div>
      </section>

      <section
        ref={ref}
        className={`py-24 px-6 bg-white transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <h2 className="text-sm font-semibold text-gray-700 tracking-wider">INFRASTRUCTURE INVESTMENTS</h2>
            </div>

            <h3 className="text-3xl md:text-4xl font-light text-gray-800 mb-8 max-w-5xl" style={{ fontFamily: 'Georgia, serif' }}>
              Our portfolio spans critical infrastructure sectors that provide essential services to millions of people and businesses worldwide.
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
              We focus on assets with strong fundamentals, stable cash flows, and opportunities for value creation through operational improvements. Our investments are strategically positioned across Transport, Energy, Digital Infrastructure, and Water sectors, providing diversified exposure to essential services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all border-4 border-blue-900"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {item.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif text-gray-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={ref2}
        className={`py-24 px-6 bg-gray-50 transition-all duration-1000 ${
          isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <h2 className="text-sm font-semibold text-gray-700 tracking-wider">PORTFOLIO HIGHLIGHTS</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg border-2 border-blue-900">
              <div className="text-5xl font-serif text-blue-600 mb-3" style={{ fontFamily: 'Georgia, serif' }}>45+</div>
              <p className="text-gray-700 font-medium">Active Projects</p>
            </div>
            <div className="bg-white p-8 rounded-lg border-2 border-blue-900">
              <div className="text-5xl font-serif text-blue-600 mb-3" style={{ fontFamily: 'Georgia, serif' }}>$30B</div>
              <p className="text-gray-700 font-medium">Assets Under Management</p>
            </div>
            <div className="bg-white p-8 rounded-lg border-2 border-blue-900">
              <div className="text-5xl font-serif text-blue-600 mb-3" style={{ fontFamily: 'Georgia, serif' }}>25+</div>
              <p className="text-gray-700 font-medium">Countries</p>
            </div>
            <div className="bg-white p-8 rounded-lg border-2 border-blue-900">
              <div className="text-5xl font-serif text-blue-600 mb-3" style={{ fontFamily: 'Georgia, serif' }}>8.5%</div>
              <p className="text-gray-700 font-medium">Average Annual Returns</p>
            </div>
          </div>

          <div className="bg-blue-950 text-white p-12 rounded-lg">
            <h3 className="text-3xl font-serif mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Investment Approach
            </h3>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xl font-semibold mb-4">Strategic Focus</h4>
                <p className="text-gray-300 leading-relaxed">
                  We invest in businesses that provide essential services with strong barriers to entry, stable regulatory frameworks, and predictable cash flows. Our focus on operational excellence and strategic capital deployment creates value for investors while improving service delivery for communities.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">Value Creation</h4>
                <p className="text-gray-300 leading-relaxed">
                  Through active ownership and hands-on management, we drive operational improvements, implement best practices, and position our portfolio companies for long-term sustainable growth. Our experienced team works closely with management to unlock value and enhance performance across all investments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
