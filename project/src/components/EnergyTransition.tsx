import { ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const EnergyTransition = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section
      ref={ref}
      id="energy-transition-&-sustainability"
      className={`relative min-h-[80vh] flex items-center justify-center px-6 py-20 overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms]"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          transform: isVisible ? 'scale(1)' : 'scale(1.1)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-teal-900/80 to-blue-900/85"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}
        >
          <div className="inline-block mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 border-b-2 border-white/30 pb-4">
              ENERGY TRANSITION
            </h2>
          </div>

          <div className="max-w-2xl space-y-6">
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed">
              Blue Ocean Holdings LLC is committed to facilitating the global energy transition. We have a team focused on decarbonization investment
              opportunities across our targeted sectors.
            </p>

            <button className="group flex items-center space-x-2 text-green-400 font-medium hover:text-green-300 transition-colors mt-8">
              <span className="text-sm tracking-wider">OUR STRATEGY</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-[3000ms] ${
            isVisible ? 'translate-x-full' : '-translate-x-full'
          }`}
        ></div>
      </div>
    </section>
  );
};

export default EnergyTransition;
