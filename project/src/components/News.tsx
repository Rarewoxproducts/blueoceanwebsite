import { ArrowRight, Calendar } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const News = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const newsItems = [
    {
      title:
        'Blue Ocean Holdings LLC is joined by Global Infrastructure Partners to launch a global data center development platform with initial $7.6B AUM portfolio',
      company: 'Company News',
      date: '15 November, 2025'
    },
    {
      title:
        "AI Infrastructure Partnership (AIP), MCX and Blackfin & CLS's Blue Ocean Holdings LLC to Acquire AI Equity to Aligned Data Centers",
      company: 'Company News',
      date: '12 October, 2025'
    },
    {
      title:
        "Global Infrastructure Partners Enters Investment to Acquire Co-Control Stake of $499+b in EU's Holding",
      company: 'Company News',
      date: '28 August, 2025'
    }
  ];

  return (
    <section
      ref={ref}
      id="news"
      className={`py-20 px-6 bg-gray-50 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-blue-900">
            Featured News & Press Releases
          </h2>
          <button className="group hidden md:flex items-center space-x-2 text-green-500 font-medium hover:text-green-600 transition-colors">
            <span className="text-sm tracking-wider">VIEW ALL NEWS</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className={`group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="p-8">
                <div className="h-40 mb-6 flex items-start">
                  <h3 className="text-xl font-light text-blue-900 leading-relaxed group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="space-y-2 text-sm text-gray-500">
                  <p className="font-medium">{item.company}</p>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>

              <div className="h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        <button className="md:hidden group flex items-center space-x-2 text-green-500 font-medium hover:text-green-600 transition-colors mt-8 mx-auto">
          <span className="text-sm tracking-wider">VIEW ALL NEWS</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default News;
