import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Calendar, ArrowRight } from 'lucide-react';

const NewsPage = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  const newsArticles = [
    {
      date: 'January 10, 2026',
      category: 'Investment',
      title: 'BlueOcean Holdings LLC Acquires Major Solar Portfolio in Southeast Asia',
      excerpt: 'Acquisition adds 2GW of renewable energy capacity to our growing portfolio of sustainable assets.',
      image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      date: 'December 15, 2025',
      category: 'Sustainability',
      title: 'Commitment to Net Zero by 2040',
      excerpt: 'Announcing accelerated timeline for carbon neutrality across all portfolio assets.',
      image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      date: 'November 20, 2025',
      category: 'Infrastructure',
      title: 'New Data Center Opens in Europe',
      excerpt: 'State-of-the-art facility powered by 100% renewable energy begins operations.',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      date: 'October 5, 2025',
      category: 'Partnership',
      title: 'Strategic Partnership with Leading Tech Company',
      excerpt: 'Collaboration to deploy next-generation telecommunications infrastructure.',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      date: 'September 12, 2025',
      category: 'Achievement',
      title: 'BlueOcean Holdings LLC Named Infrastructure Investor of the Year',
      excerpt: 'Industry recognition for sustainable investment practices and portfolio performance.',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      date: 'August 18, 2025',
      category: 'Expansion',
      title: 'Expanding Operations to Latin America',
      excerpt: 'Opening new offices to support growing portfolio in the region.',
      image: 'https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      <section className="py-20 px-6 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            News & Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Stay updated with the latest developments, announcements, and insights from BlueOcean Holdings LLC
          </p>
        </div>
      </section>

      <section
        ref={ref}
        className={`py-20 px-6 bg-white transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {newsArticles.map((article, index) => (
              <article
                key={index}
                className="group bg-white border-2 border-gray-100 rounded-xl overflow-hidden hover:border-orange-500 hover:shadow-xl transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      {article.date}
                    </div>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <button className="group/btn flex items-center space-x-2 text-orange-600 font-medium hover:text-orange-700 transition-colors">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get the latest news, insights, and updates delivered directly to your inbox
          </p>
          <div className="flex max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none"
            />
            <button className="px-8 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
