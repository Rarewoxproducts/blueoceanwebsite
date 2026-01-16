import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Capabilities = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const capabilities = [
    {
      title: 'Global Equity',
      description:
        'Our Flagship infrastructure equity funds focus more than the competition of Blue Ocean Holdings LLC since our founding in 2008. Our experience and proven track record enable us to efficiently manage some of the largest, most complex infrastructure assets.',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Specialized Equity',
      description:
        "We pursue specific equity strategies focused on tailored strategies to serve specific needs. We leverage our investment and asset management experience through Blue Ocean Holdings LLC's Core, Asia, and European Mid-Market equity strategies.",
      image: 'https://images.pexels.com/photos/4386346/pexels-photo-4386346.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Credit',
      description:
        "Blue Ocean Holdings LLC credit funds provide customized capital solutions for infrastructure projects and companies across the power and utilities, renewable power, transport, and other sectors. Our strategies leverage Blue Ocean Holdings LLC's significant operating expertise.",
      image: 'https://images.pexels.com/photos/7821513/pexels-photo-7821513.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section
      ref={ref}
      id="capabilities"
      className={`py-20 px-6 bg-gray-50 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-blue-900 mb-6">
            OUR CAPABILITIES
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl leading-relaxed">
            We seek to leverage in-depth analysis and comprehensive operational expertise to achieve the
            goal of producing consistent and attractive returns across our equity and debt investment
            strategies. We believe our industry-leading Business Improvement team brings unparalleled sector
            experience to help maximize the operational efficiency and performance of our portfolio assets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={capability.image}
                  alt={capability.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-light text-blue-900 mb-4">
                  {capability.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {capability.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
