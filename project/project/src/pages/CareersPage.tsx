import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { MapPin, Clock, ArrowRight } from 'lucide-react';

const CareersPage = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [ref2, isVisible2] = useIntersectionObserver({ threshold: 0.1 });

  const openPositions = [
    {
      title: 'Senior Infrastructure Investment Analyst',
      department: 'Investment',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Lead infrastructure investment analysis and due diligence for new opportunities across our global portfolio.',
    },
    {
      title: 'Sustainability Manager',
      department: 'ESG',
      location: 'London, UK',
      type: 'Full-time',
      description: 'Drive sustainability initiatives across portfolio assets and develop our climate transition strategy.',
    },
    {
      title: 'Portfolio Operations Director',
      department: 'Operations',
      location: 'Singapore',
      type: 'Full-time',
      description: 'Oversee operational performance of Asian infrastructure assets and drive value creation.',
    },
    {
      title: 'Digital Infrastructure Associate',
      department: 'Investment',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Focus on data center and telecommunications investments in the rapidly growing digital sector.',
    },
    {
      title: 'Financial Analyst',
      department: 'Finance',
      location: 'Toronto, Canada',
      type: 'Full-time',
      description: 'Support financial planning and analysis for portfolio companies and new investment opportunities.',
    },
    {
      title: 'Legal Counsel',
      department: 'Legal',
      location: 'Sydney, Australia',
      type: 'Full-time',
      description: 'Provide legal support for transactions and portfolio management in the Asia-Pacific region.',
    },
  ];

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'Industry-leading salaries and performance-based bonuses that recognize your contributions',
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive medical, dental, vision, and mental health benefits for you and your family',
    },
    {
      title: 'Retirement Planning',
      description: 'Generous 401(k) matching and pension plans to secure your financial future',
    },
    {
      title: 'Professional Development',
      description: 'Continuous learning through training programs, conferences, and continuing education',
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible work arrangements and hybrid options that respect your personal time',
    },
    {
      title: 'Time Off',
      description: 'Generous vacation policy, paid holidays, and additional leave benefits',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-32 px-6 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight tracking-tight mb-8" style={{ fontFamily: 'Georgia, serif' }}>
            CAREERS
          </h1>
          <p className="text-xl text-white leading-relaxed max-w-3xl">
            Join our team of world-class professionals shaping the future of sustainable infrastructure and creating lasting value for communities worldwide.
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
              <h2 className="text-sm font-semibold text-gray-700 tracking-wider">WHY BLUEOCEAN HOLDINGS LLC</h2>
            </div>

            <h3 className="text-3xl md:text-4xl font-light text-gray-800 mb-8 max-w-5xl" style={{ fontFamily: 'Georgia, serif' }}>
              At BlueOcean Holdings LLC, you'll work alongside industry leaders on some of the world's most impactful infrastructure projects.
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mb-12">
              We foster a culture of innovation, collaboration, and continuous learning where every team member contributes to our mission of building sustainable infrastructure for future generations. Our professionals come from diverse backgrounds and bring unique perspectives that drive our success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg border-4 border-blue-900 hover:shadow-xl transition-shadow"
              >
                <h4 className="text-xl font-serif text-blue-600 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                  {benefit.title}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
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
          <div className="flex items-center space-x-2 mb-12">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <h2 className="text-sm font-semibold text-gray-700 tracking-wider">OPEN POSITIONS</h2>
          </div>

          <div className="space-y-6 mb-16">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-lg border-4 border-blue-900 hover:shadow-xl transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="mb-4">
                      <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider rounded">
                        {position.department}
                      </span>
                    </div>

                    <h3 className="text-2xl font-serif text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                      {position.title}
                    </h3>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      {position.description}
                    </p>

                    <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-blue-600" />
                        {position.type}
                      </div>
                    </div>
                  </div>

                  <button className="group/btn flex items-center space-x-2 px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-950 text-white p-12 rounded-lg text-center">
            <h3 className="text-3xl font-serif mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Don't See the Right Position?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              We're always interested in hearing from talented professionals. Send us your resume and tell us how you can contribute to our mission of building sustainable infrastructure.
            </p>
            <button className="px-8 py-4 bg-white text-blue-950 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Send General Application
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
