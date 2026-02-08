import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';

const EnergyTransitionPage = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [ref2, isVisible2] = useIntersectionObserver({ threshold: 0.1 });
  const [ref3, isVisible3] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className="min-h-screen">
      <section className="relative py-32 px-6 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight tracking-tight mb-8" style={{ fontFamily: 'Georgia, serif' }}>
            ENERGY TRANSITION &<br />SUSTAINABILITY
          </h1>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-900 to-blue-800 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <h2 className="text-sm font-semibold text-white tracking-wider">RESPONSIBILITY</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-8" style={{ fontFamily: 'Georgia, serif' }}>
                We aspire to be one of the world's leading owners, developers, and operators of renewable energy assets. In line with our commitment to facilitating the global energy transition, we have a team focused on decarbonization investment opportunities across our targeted sectors.
              </p>

              
            </div>

            <div>
              <img
                src="https://images.pexels.com/photos/9875420/pexels-photo-9875420.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Wind turbine"
                className="w-full h-[400px] object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        ref={ref}
        className={`py-24 px-6 bg-white transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <h2 className="text-sm font-semibold text-gray-700 tracking-wider">Appendix and Integration</h2>
          </div>

          <h3 className="text-3xl md:text-4xl font-light text-gray-800 mb-12 max-w-5xl" style={{ fontFamily: 'Georgia, serif' }}>
            At our firm, making a positive contribution to the communities in which we operate is fundamental both to our business and to the operations of our portfolio companies.
          </h3>

          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Our Environmental, Social and Governance approach is results-focused and data-driven, seeking to integrate and manage Environmental, Social and Governance risks and opportunities. The lifecycle of an investment, with a view to enhancing the long-term value for all stakeholders and delivering tangible impacts for our investors and the communities we serve.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We believe that respecting environmental, health & safety, labor, social, governance, and business integrity considerations are crucial when underwriting new opportunities and managing existing investments in our portfolio. As such, Environmental, Social and Governance considerations have long been at the core of our approach to investing and operating our businesses in a safe and responsible manner. Climate change mitigation and adaptation feature prominently in this approach.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                We aspire to adopt Environmental, Social and Governance best practices and became a signatory to the United Nations Principles for Responsible Investment ("UNPRI") in 2020, providing the platform to continuously measure ourselves against industry best practices. The firm has reported to UNPRI on its performance. In 2024, we once again achieved the UNPRI's top 5-Star rating. These ratings are informed by the legacy BlueOak Infrastructure funds. Furthermore, as of 2023, a representative selection of the largest funds managed by the firm have obtained external verification of full alignment with the industry group standardization and seeking collaboration with peers.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We also recognize the importance of industry leadership on climate action, and as part of our commitment to mitigate the impacts of climate change, our team is to align itself and actively engage across our portfolio.
              </p>
            </div>
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Energy transition"
                className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center group-hover:bg-black/40 transition-colors">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-10 h-10 text-white fill-current ml-1" />
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                [1] International Energy Agency, "Net Zero by 2050: A Roadmap for the Global Energy Sector", October 2021
              </p>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8" style={{ fontFamily: 'Georgia, serif' }}>
                Facilitating the Energy Transition
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our energy transition aims to meet the World's biggest energy demand. Approximately US$4.5 trillion investment will be required. [1] We're aiming to capitalize on its leadership in renewables, expertise in sustainable infrastructure development, and track record supporting business and government leaders to contribute efficiently to the world's decarbonization.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8" style={{ fontFamily: 'Georgia, serif' }}>
            ESG Investment Life-Cycle Integration
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed max-w-5xl mb-16">
            In line with our fiduciary responsibilities, our intent is thoughtfully integrate and manage our materiality-based and disciplined ESG approach throughout the investment life-cycle and aim to achieve our investment objectives while upholding our commitment to responsible stewardship. The degree to which we believe we are most critical. ESG considerations for our equity investments are integrated into our investment process, from origination to exit, with the goal of enhancing positioning and energy transitions, supporting local needs, sustainability and value. Sustainability risks provide opportunities to work with operators in driving practices that build value through risk mitigation, business process and management improvement, supply chain diversification, reduction of wasteful ESG factors during due diligence, and where possible, ongoing monitoring in a manner which our governance policies dictate.
          </p>

          <h3 className="text-3xl font-serif text-gray-900 mb-12 text-center" style={{ fontFamily: 'Georgia, serif' }}>
            Integration of ESG Issues and Opportunities Throughout Life-Cycle of an Investment
          </h3>

          <div className="relative mb-16">
            <div className="flex items-stretch">
              <div className="flex-1 bg-blue-800 text-white py-8 px-6 relative clip-arrow">
                <p className="text-sm font-semibold mb-2 text-center">PRE-INVESTMENT</p>
              </div>
              <div className="flex-1 bg-blue-700 text-white py-8 px-6 relative clip-arrow">
                <p className="text-sm font-semibold mb-2 text-center">POST-INVESTMENT / OWNERSHIP</p>
              </div>
              <div className="flex-1 bg-blue-600 text-white py-8 px-6">
                <p className="text-sm font-semibold mb-2 text-center">EXIT</p>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-8 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <ChevronDown className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Origination<br />& Asset<br />Screening</h4>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <ChevronDown className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Detailed Due<br />Diligence</h4>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <ChevronDown className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Post-Close<br />Plan</h4>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <ChevronDown className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Targets /<br />Monitoring /<br />Reporting</h4>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <ChevronDown className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Exit<br />Divestment</h4>
              </div>
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
          <h2 className="text-5xl md:text-7xl font-serif text-gray-900 mb-12" style={{ fontFamily: 'Georgia, serif' }}>
            GIVING AT BLUEOCEAN HOLDINGS LLC
          </h2>

          <p className="text-2xl md:text-3xl font-light text-gray-800 leading-relaxed mb-16 max-w-5xl" style={{ fontFamily: 'Georgia, serif' }}>
            We're committed to meaningfully helping the communities in which we live and work. We engage with several impactful initiatives that support our communities through strategic partnerships, charitable giving, team involvement, and other support. Our charitable program is focused on social mobility and diversity, and is helmed by our flagship charity Engineering Tomorrow and various other charitable partners.
          </p>

          <div className="bg-gray-900 text-white p-12 rounded-lg">
            <h3 className="text-xl font-semibold mb-6">Disclaimer</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              While we seek to integrate certain Environmental, Social and Governance factors into the overall investment management processes, there is no guarantee that an ESG or impact investment strategy will be successful. Past performance does not guarantee future results. Diversification does not ensure a profit or guarantee against a loss. Investments in any product involve substantial risk and may not be suitable for all investors. Your principal may be at risk, and actual performance may vary. An investor can lose money. There is no guarantee that a particular ESG objective will be successful or that a product's investment strategy or techniques will be successful or that ESG investing may not result in losses. For the avoidance of doubt, our views are subject to change at any time based on market conditions and other factors, and there is no guarantee that these views will come to pass and be expressed in future actions or investments. This is not an offer to sell nor a solicitation to purchase any product or service. Investment decisions should not be made based on ESG considerations alone.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnergyTransitionPage;
