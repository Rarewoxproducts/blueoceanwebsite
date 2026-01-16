const TeamPage = () => {
  const leadership = [
    {
      name: 'Adebayo Ogunlesi',
      role: 'Chairman & Chief Executive Officer (CEO)',
      location: 'North America',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Michael McGhee',
      role: 'Founding Partner, Deputy Chairman',
      location: 'Europe',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Raj Rao',
      role: 'President & Chief Operating Officer (COO)',
      location: 'North America',
      image: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Jonathan Bram',
      role: 'Founding Partner',
      location: 'North America',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Matt Harris',
      role: 'Founding Partner',
      location: 'North America',
      image: 'https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Bill Woodburn',
      role: 'Founding Partner',
      location: 'North America',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-24 px-6 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-white leading-tight mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              OUR <span className="inline-block border-4 border-white px-6 py-2">TEAM</span>
            </h1>
          </div>

          <div>
            <p className="text-lg text-white leading-relaxed">
              Blue Ocean Holdings LLC was built by combining financial and operational expertise to improve businesses for the long-term. Today, this ambition is still carried globally by a cohesive, experienced and diverse team of leaders who bring expertise across the Investment, Business Improvement and Credit disciplines, with an additional focus on Sustainability. These individuals bring a wealth of industry knowledge and hands-on operational expertise, as well as awareness of industrial and financial best practices, to ensure that Blue Ocean Holdings LLC is well positioned to deliver differentiated perspectives and improved business performance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border-4 border-blue-900"
              >
                <div className="p-6">
                  <div className="mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-lg object-cover"
                    />
                  </div>

                  <h3 className="text-2xl font-serif text-blue-600 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                    {member.name}
                  </h3>

                  <p className="text-gray-900 font-medium mb-16">
                    {member.role}
                  </p>
                </div>

                <div className="px-6 pb-6">
                  <p className="text-sm text-gray-600">
                    {member.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
