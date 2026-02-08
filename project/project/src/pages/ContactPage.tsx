import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const offices = [
    {
      region: 'North America Headquarters',
      address: '55 Hudson Yards, 28th Floor',
      city: 'New York, NY 10001',
      country: 'United States',
      phone: '+1 (212) 901-0100',
      email: 'newyork@blueoceanholdings.com',
    },
    {
      region: 'Europe Office',
      address: '20 Fenchurch Street, 33rd Floor',
      city: 'London EC3M 3BY',
      country: 'United Kingdom',
      phone: '+44 (0) 20 7717-6500',
      email: 'london@blueoceanholdings.com',
    },
    {
      region: 'Asia Pacific Office',
      address: 'Level 28, Three International Towers',
      city: 'Sydney NSW 2000',
      country: 'Australia',
      phone: '+61 (0) 2 8823-3500',
      email: 'sydney@blueoceanholdings.com',
    },
    {
      region: 'Middle East Office',
      address: 'DIFC, Gate Village 4',
      city: 'Dubai',
      country: 'United Arab Emirates',
      phone: '+971 (0) 4 401-9200',
      email: 'dubai@blueoceanholdings.com',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[70vh] min-h-[600px] bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Contact"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-full flex items-center px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
              GET IN TOUCH
            </h1>
            <p className="text-xl text-white/90 mt-6 max-w-2xl">
              Connect with our global team to explore investment opportunities and partnerships.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <h2 className="text-sm font-semibold text-gray-700 tracking-wider">CONTACT INFORMATION</h2>
          </div>
          <h3 className="text-3xl md:text-4xl font-light text-gray-800 mb-12 max-w-4xl" style={{ fontFamily: 'Georgia, serif' }}>
            Our offices are located across major financial centers worldwide.
          </h3>

          <div className="grid gap-12 mb-20">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg border border-blue-100 shadow-sm">
              <div className="flex items-start space-x-4 mb-6">
                <Mail className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">General Inquiries</h4>
                  <a href="mailto:info@blueoceanholdings.com" className="text-lg text-blue-600 hover:text-blue-700 transition-colors">
                    info@blueoceanholdings.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 mb-6">
                <Mail className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Investor Relations</h4>
                  <a href="mailto:investors@blueoceanholdings.com" className="text-lg text-blue-600 hover:text-blue-700 transition-colors">
                    investors@blueoceanholdings.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Media Relations</h4>
                  <a href="mailto:media@blueoceanholdings.com" className="text-lg text-blue-600 hover:text-blue-700 transition-colors">
                    media@blueoceanholdings.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={ref}
        className={`py-24 px-6 bg-gray-50 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 mb-12">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <h2 className="text-sm font-semibold text-gray-700 tracking-wider">GLOBAL OFFICES</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-600"
              >
                <h3 className="text-2xl font-serif text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                  {office.region}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700">{office.address}</p>
                      <p className="text-gray-700">{office.city}</p>
                      <p className="text-gray-700 font-medium">{office.country}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <a href={`tel:${office.phone}`} className="text-gray-700 hover:text-blue-600 transition-colors">
                      {office.phone}
                    </a>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-gray-700 hover:text-blue-600 transition-colors">
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 rounded-2xl p-12 text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Clock className="w-6 h-6 text-white" />
              <h3 className="text-2xl font-serif text-white" style={{ fontFamily: 'Georgia, serif' }}>
                Business Hours
              </h3>
            </div>
            <p className="text-xl text-white/90 mb-4">
              Monday - Friday: 9:00 AM - 6:00 PM (Local Time)
            </p>
            <p className="text-lg text-white/80">
              Our offices operate in their respective local time zones. For urgent matters outside business hours, please email us and we will respond as soon as possible.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
