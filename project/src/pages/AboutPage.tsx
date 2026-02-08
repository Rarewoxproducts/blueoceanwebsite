import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const AboutPage = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [ref2, isVisible2] = useIntersectionObserver({ threshold: 0.1 });
  const [ref3, isVisible3] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className="min-h-screen">
      <section className="relative h-[70vh] min-h-[600px] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Infrastructure"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-full flex items-center px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
              A LEADING<br />INFRASTRUCTURE<br />INVESTOR
            </h1>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <h2 className="text-sm font-semibold text-gray-700 tracking-wider">WHAT WE DO</h2>
          </div>
          <p className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 leading-relaxed max-w-5xl" style={{ fontFamily: 'Georgia, serif' }}>
            We are a leading infrastructure investor that specializes in investing in, owning and operating some
            of the largest and most complex assets in the energy, transport, digital infrastructure and water
            and waste management sectors. With decarbonization as an important part of our investment thesis,
            we believe we are well positioned to support the global energy transition.
          </p>
        </div>
      </section>

      <section
        ref={ref}
        className={`py-24 px-6 bg-gray-50 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Data Center"
                className="w-full h-[600px] object-cover rounded-lg shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8" style={{ fontFamily: 'Georgia, serif' }}>
                Our Ambition
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We strive to be best-in-class stewards and a valued partner for investors. In our approach, we emphasize disciplined investment, long-term value creation, sustainability and trusted relationships with our portfolio companies.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our identity rests on infrastructure — stable though what we understand and what we do, and dynamic as we strive to adapt our business in response to evolving market needs and pressing global priorities such as decarbonization, embodied congestion, economic recovery and digital inclusion.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our success depends on building trusted relationships with our investors, portfolio companies, governments, regulators, partners and other stakeholders. With a focus on sustainability, we pursue best-in-class governance and oversight to ensure the long-term value of assets we help grow, safeguarding and preserving portfolios.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <h2 className="text-sm font-semibold text-gray-700 tracking-wider">GLOBAL EQUITY FUNDS</h2>
          </div>
          <h3 className="text-3xl md:text-4xl font-light text-gray-800 mb-12 max-w-4xl" style={{ fontFamily: 'Georgia, serif' }}>
            Our infrastructure equity funds have been the cornerstone of our business since our founding in 2006.
          </h3>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Our global reach from three fund strategies</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>
                  <span>Power, energy and renewables (Gas, LNG, power, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>
                  <span>Transport (Ports, airports, toll roads, rail)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>
                  <span>Digital infrastructure (Data centers, telecom towers, fiber)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>
                  <span>Water and waste (Water utilities, waste, wastewater)</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-6">We differentiate mainly from how we:</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>
                  <span>Take direct control positions that allow us to influence strategic decision making</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>
                  <span>Bring deep sector expertise enabling us to address technical and operational issues</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>
                  <span>Adopt best practices through stable long-term platform partnering</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>
                  <span>Employ proven investments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={ref2}
        className={`relative h-[500px] overflow-hidden transition-all duration-1000 ${
          isVisible2 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/830891/pexels-photo-830891.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/50"></div>
        </div>
        <div className="relative h-full flex items-center px-6">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1"></div>
            <div className="lg:col-span-2">
              <h2 className="text-5xl md:text-6xl font-serif text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                SPECIALIZED<br />EQUITY
              </h2>
              <p className="text-lg text-white/90 max-w-2xl">
                Infrastructure markets, GIP's business and investment portfolios span multiple asset classes and sectors with distinct characteristics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={ref3}
        className={`py-32 px-6 bg-white transition-all duration-1000 ${
          isVisible3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-20 text-center" style={{ fontFamily: 'Georgia, serif' }}>
            BLUEOCEAN HOLDINGS LLC IN NUMBERS
          </h2>

          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center">
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-600 tracking-wider mb-6">+ Management</p>
                <p className="text-6xl md:text-7xl font-light text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  $170bn
                </p>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Managed by the 340 staff in global investor base
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-600 tracking-wider mb-6">+ Annual revenue</p>
                <p className="text-6xl md:text-7xl font-light text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  $71bn
                </p>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Combined annual revenues of companies in portfolio
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-600 tracking-wider mb-6">+ Employment</p>
                <p className="text-6xl md:text-7xl font-light text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  116,000
                </p>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Employed by the companies in portfolio
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
